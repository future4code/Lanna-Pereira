export class Pets {
    constructor(
        private id: string,
        private name_owner: string,
        private email: string,
        private name_pet: string
    ){}

    static petModel(pet: Pets){
        return new Pets(pet.id, pet.name_owner, pet.email, pet.name_pet )
    }
}