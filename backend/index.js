import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/socRoutes.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

// Mongoose connection

const connectDb = async () => {
  // mongoose.set("strictQuery", false); // TURE: only the fields that are specified in your schema will be saved in database.
  // By defaulty set to False in mongoose 7 and above.
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB Connected:" + conn.connection.host);
};
connectDb();

// Body Parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

routes(app);

const PORT = process.env.PORT || 8000;

app
  .get("/", (req, res) => {
    res.json({
      status: 200,
      message: `Soccer Running..! on ${process.env.PORT}`,
    });
  })
  .listen(process.env.PORT, () => {
    console.log(`App runnning on ${process.env.PORT}`);
  });

app.get("/:id", (req, res) => {
  res.json({
    status: 200,
    message: `Soccer Running..! on ${process.env.PORT}`,
  });
});
