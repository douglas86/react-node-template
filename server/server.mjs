import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import homeRoutes from "./routes/homeRoutes.mjs";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

const options = {
  definitions: {
    openapi: "3.0.0",
    info: {
      title: "Open API",
      version: "1.0.0",
    },
  },
  explorer: true,
  swaggerDefinition: {
    description: "This is a sample Pet store server",
    version: "1.0",
  },
  swaggerOptions: {
    urls: [
      {
        url: "https://petstore.swagger.io/v2/swagger.json",
        name: "Spec1",
      },
      {
        url: "https://petstore.swagger.io/v2/swagger.json",
        name: "Spec2",
      },
    ],
  },
  path: {},
  apis: ["./routes/*.mjs"],
};

const swaggerSpec = swaggerJsDoc(options);

app.use("/user", homeRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
