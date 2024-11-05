import express from "express";
import cors from "cors";
import { connectDB } from "./connection.js"; // Ensure this path is correct
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  await connectDB(); // Wait for the database to connect
  app.listen(PORT, () => {
    console.log("Server listening on port ${PORT}");
  });
};

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});