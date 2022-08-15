import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";
import { tour, tourInput } from "../model/type";
import {Request, Response} from "express"


export class TourDatabase extends BaseDatabase {

    public async TodosPasseios(): Promise<void> {
        try {
          const passeio = await TourDatabase.connection()
            .where("DogWalking")
            .select("*")
            .from("DogWalking")

            return passeio[0]

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }

    public inserirPasseio = async (
        id: string,
        status: string,
        data: string,
        duração: number,
        quantidade_dogs: number,
        hora_início: string,
        preço_total: number) => {
      try {
        await TourDatabase.connection
          .insert({
            id,
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início,
            preço_total
          })
          .into("DogWalking");
      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };

    public editarPasseio = async (
        id: string,
        status: string,
        data: string,
        duração: number,
        quantidade_dogs: number,
        hora_início: string,
        preço_total: number) => {
        try {
          await TourDatabase.connection
            .update({ 
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início,
            preço_total})
            .where({ id })
            .into("DogWalking");
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };

      public async localizarPasseio(status: string): Promise<void> {
        try {
          const passeio = await TourDatabase.connection()
            .where({ status })
            .select("*")
            .from("DogWalking")

            return passeio[0]

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
} 