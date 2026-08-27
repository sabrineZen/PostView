import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import "./models/index.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import notificationRoute from "./routes/notificationRoute.js";
import profilVisitRoute from "./routes/profilVisitRoute.js";
import followRoute from "./routes/followRoute.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/notifications", notificationRoute);
app.use("/api/profilVisit", profilVisitRoute);
app.use("/api", followRoute);

const port = process.env.PORT || 5000;

sequelize
    .authenticate()
    .then(() => {
        console.log("Base de données connectée");
        return sequelize.sync({ force: false, alter: false });
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