import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const definition: OAS3Definition = {

};

const options: OAS3Options = {
  swaggerDefinition: definition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(options);
