import { faker } from "@faker-js/faker";

class MockingService {
    
    static async generateMockingPets(num) {
        const pets = [];

        for(let i = 0; i < num; i++){
            pets.push({
                name: faker.animal.petName(),
                type: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.birthdate(),
                img: "https://via.placeholder.com/150"
            })
        }
        return pets
    }

}

export default MockingService;