// here express is import
import express from "express";
const app = express();

// here cors is import
import cors from "cors";
app.use(cors());

// dotenv helps for the access the env veriables
import dotenv from "dotenv";
dotenv.config();

//Port for the application
const PORT = process.env.PORT || 4000;
app.use(express.json());

// here import router
import signuproute from "./routes/signuproute.js";
app.use("/home", signuproute);

// server listen here on port
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server start at port ${PORT}`);
  }
});
