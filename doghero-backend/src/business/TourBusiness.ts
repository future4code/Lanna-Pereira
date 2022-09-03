import { TourDatabase } from "../data/TourDatabase";
import { CustomError } from "../error/customError";
import { tour, tourInput } from "../model/type";


export class PasseioBusiness {
  static localizarTodos: any;
    async criarPasseio (tour: tourInput) { 

        if ( 
            !tour.id ||
            !tour.status||
            !tour.data ||
            !tour.duração ||
            !tour.quantidade_dogs ||
            !tour.hora_início) {

          throw new CustomError(
            400,
            'Preencha todos os campos corretamente.'
          );
        }

          if(tour.duração === 30){
               const preço_total = 25 + (tour.quantidade_dogs - 1) * 15

              const passeioDatabase = new TourDatabase();
              await passeioDatabase.inserirPasseio(
                tour.id,
                tour.status,
                tour.data,
                tour.duração,
                tour.quantidade_dogs,
                tour.hora_início, 
                preço_total);

          } else {
            if(tour.duração === 60){
              const preço_total = 35 + (tour.quantidade_dogs - 1) * 20

              const passeioDatabase = new TourDatabase();
              await passeioDatabase.inserirPasseio(
                tour.id,
                tour.status,
                tour.data,
                tour.duração,
                tour.quantidade_dogs,
                tour.hora_início, 
                preço_total);
            }else{
              throw new Error("Somente passeios de 30min e 60min estão disponíveis")
            }
          }

      }

      async editarPasseio (tour: tourInput)  {

              if ( 
                !tour.id ||
                !tour.status||
                !tour.data ||
                !tour.duração ||
                !tour.quantidade_dogs ||
                !tour.hora_início
                ) {

              throw new CustomError(
                400,
                'Preencha todos os campos corretamente.'
              );
            }

            if(tour.duração === 30){
              const preço_total = 25 + (tour.quantidade_dogs - 1) * 15

             const passeioDatabase = new TourDatabase();
             await passeioDatabase.editarPasseio(
               tour.id,
               tour.status,
               tour.data,
               tour.duração,
               tour.quantidade_dogs,
               tour.hora_início, 
               preço_total);

         } else {
           if(tour.duração === 60){
             const preço_total = 35 + (tour.quantidade_dogs - 1) * 20

             const passeioDatabase = new TourDatabase();
             await passeioDatabase.editarPasseio(
               tour.id,
               tour.status,
               tour.data,
               tour.duração,
               tour.quantidade_dogs,
               tour.hora_início, 
               preço_total);
           }else{
             throw new Error("Somente passeios de 30min e 60min estão disponíveis")
           }
         }
      }


      async localizarPasseio(input: {status:string}) {

        if(!input.status){
          throw new Error("Insira um status.")
        }

        return await new TourDatabase().localizarPasseio(input.status);
      }

      async TodosPasseios(tour:tour) {

        return await new TourDatabase().TodosPasseios()
      }
}