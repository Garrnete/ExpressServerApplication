// Imports
import express from "express";

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware (logger)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Hogwarts API 🧙‍♂️");
});

app.get("/characters", (req, res) => {
  res.json([
    { id: 1, name: "Harry Potter", house: "Gryffindor" },
    { id: 2, name: "Hermione Granger", house: "Gryffindor" },
    { id: 3, name: "Draco Malfoy", house: "Slytherin" }
  ]);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server listener
app.listen(PORT, () => {
  console.log(`⚡ Server running on http://localhost:${PORT}`);
});