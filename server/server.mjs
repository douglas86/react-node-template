import express from "express";
import cors from "cors";
import homeRoutes from "./routes/homeRoutes.mjs";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", homeRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
