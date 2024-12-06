import MockingService from "../services/mocking.js";
import { petsService, usersService } from "../services/index.js";


    const getMockingPets = async (req, res) => {
        const pets = await MockingService.generateMockingPets(50);
        res.send({ status: "success", payload: pets });

    }

    const getMockingUsers = async (req, res) => {
        const users = await MockingService.generateMockingUsers(50);
        res.send({ status: "Success", payload: users });
    }

    const generateData = async (req, res) => {
        const { amountPets = 1, amountUsers = 1 } = req.body;

        try {
            
            await MockingService.generateData(amountPets, amountUsers);

            res.json({ status: "success", message: "Data generated" });

        } catch (error) {
            console.error("Error generating data:", error);
            
            res.status(500).send("Internal server error");
        }

    }

    const getMockedUsers = async (req, res) => {

        try {
            const mockedusers = await usersService.getAll();

            if(!mockedusers) return res.status(404).send("Error al traer mocked users");

            res.json(mockedusers);


        } catch (error) {
            res.status(500).send("Internal server error")
        }
    }

    const getMockedPets = async (req, res) => {

        try {

            const mockedPets = await petsService.getAll();

            if(!mockedPets) return res.status(404).send("Error al traer mocked pets")

            res.json(mockedPets);

        } catch (error) {
            res.status(500).send("Internal server error")
        }

    }


    export default {
        getMockingPets,
        getMockingUsers,
        generateData,
        getMockedPets,
        getMockedUsers
    }


// Function para la ruta /generatedata pero solo funciona con metodo GET ya que debe enviar la data a la db y devolverla al cliente \\

/* const generateData = async (req, res) => {
    const {amountPets = 1, amountUsers = 1 } = req.body

    try {
        const {pets, users} = await MockingService.generateData(amountPets, amountUsers);
        
        res.status(200).send({
            status: "success", 
            payload: {pets, users}, 
            message: `Cantidad de pets: ${pets.length} y Cantidad de users: ${users.length}`});

    } catch (error) {
        res.status(500).send({
            status: "error",
            message: `Hubo un error al generar los datos: ${error.message}`
        })
    } 
*/