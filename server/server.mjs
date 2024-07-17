import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import homeRoutes from "./routes/homeRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
    allowedHeaders: true,
    allowHeaders: true,
  }),
);
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
    info: {
      title: "Swagger API",
      description: "Swagger API documentation",
      contact: {
        name: "Swagger API",
      },
    },
    version: "1.0",
    host: "localhost:5000",
    basePath: "/",
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

// routes
app.use("/", homeRoutes);
app.use("/user", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => console.log(`Listening on port ${port}`));
