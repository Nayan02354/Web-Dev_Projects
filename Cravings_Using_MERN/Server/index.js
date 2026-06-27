// Environment variable load
import dotenv from "dotenv";
dotenv.config();

// Express
import express from "express";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

// Default API
// app.get("/", (req, res) => {
//   console.log("Server Started");
//   res.json({ message: "Welcome to my First Backend Project" });
// });

app.get("/", (req, res) => {
  console.log(" Default Get API hit");
  res.json({ message: "Welcome to Cravings Project" });
});

// Default Error Handler
app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal Server Error";
  const errStatusCode = error.statusCode || 500;

  res.status(errStatusCode).json({ message: errMessage });
});

// Process ki help se Environment varibales access kar skte h
const port = process.env.PORT || 5000;

// Listen to port no. 4500
app.listen(port, () => {
  console.log("Server started on port", port);
  connectDB();
});
