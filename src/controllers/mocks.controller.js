import { petsService } from "../services/index.js";
import MockingService from "../services/mocking.js";

const getMockingPets = async (req, res) => {
    const pets = await MockingService.generateMockingPets(10);
    res.send({status: "success", payload: pets});
   
}


export default {
    getMockingPets

}
