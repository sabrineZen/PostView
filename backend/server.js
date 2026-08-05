import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import "./models/index.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;

sequelize
    .authenticate()
    .then(() => {
        console.log("Base de données connectée");
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log("Tables créées");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
    app.get("/", (req, res) => {
    res.json({ message: "Backend PostView fonctionne 🚀" });
});