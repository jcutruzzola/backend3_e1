import supertest from "supertest";
import mongoose from "mongoose";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");




describe("Router de Adopciones",  function() {


    describe("GET /api/adoptions", () => {


        let aid = "67a034c97a7acc5fd2d65e12"

        it("Debe retornar status 200 para la lista de adopciones y la misma debe ser un array", async () => {
            const { status, _body } = await requester.get("/api/adoptions");

            expect(status).to.equal(200);
            expect(_body).to.have.property("payload").that.is.an("array");
        })


        it("Retorna 404 si la ruta no existe", async () => {
            const { status } = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404);
        })

        it("Retorna info de una adopcion existente", async () => {
            const { status } = await requester.get(`/api/adoptions/${aid}`);
            
            expect(status).to.equal(200);
        })

        it("Retorna 404 cuando la adopcion es inexistente", async () => {
            let noId = "67870c7d8285e3fb296ac399";

            const { status } = await requester.get(`/api/adoptions/${noId}`);

            expect(status).to.equal(404);
            
        })
    })

    describe("POST /api/adoptions", () => {

    let pid = "675685d2557768cd29cab226";
    let uid = "675685d3557768cd29cab22a";
    let falseUid = "675685e3557768cd49cab22a";
    let falsePid = "675682d2551768ce29cab226";


        it("Retorna status 404 si el uid es inexistente", async() => {
            const { status } = await requester.post(`/api/adoptions/${falseUid}/${pid}`);
            expect(status).to.eql(404);
        })

        it("Retorna status 404 si el pid es inexistente", async () => {
            const { status } = await requester.post(`/api/adoptions/${uid}/${falsePid}`);
            expect(status).to.eql(404);
        })

        it("Retorna status 200 cuando se crea una adopcion", async () => {
            const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200)

        })

        it("Retorna status 400 si el pid ya se encuentra adoptado", async () => {
            let pid = "675685d2557768cd29cab226";
            let uid = "678299396c5e47ae1544df59";

            const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.be.eql(400);
        })

    })

    this.afterAll( async function() {

        await mongoose.connect("mongodb+srv://jorgecutruzzola:jcut1245@cluster0.rmhgc.mongodb.net/Adoptme?retryWrites=true&w=majority&appName=Cluster0");
        const petsCollection = mongoose.connection.collection("pets");
        await petsCollection.updateMany({}, {$set: { adopted: false}});
    })

    after(async function() {
        await mongoose.disconnect();

        
    })
})



