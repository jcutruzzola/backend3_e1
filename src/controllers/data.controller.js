 import PetDTO from "../dto/Pet.dto.js";
 import { petsService } from "../services/index.js";
 import MockingService from "../services/mocking.js";
 import petDao from "../dao/Pets.dao.js";

 const PetDao = new petDao();


 const generateData = async (req, res) => {

    try {
        const petList = await MockingService.generateMockingPets(10);

        console.log(petList);
        // const result = PetDao.save(petList);

        res.status(201).send({status: "success", payload: result}); 
        

    } catch (error) {
        res.status(500).send("Error al crear pet", error);  
    }
 }


 export default generateData;



 