import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentacion de la app AdoptMe",
            description: "App dedicada a vincular familias con animales"
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}

export const swaggerSpecs = () => {
    const specs = swaggerJSDoc(swaggerOptions);
    return specs
}