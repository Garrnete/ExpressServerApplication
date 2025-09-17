import express from "express";
import logger from "./middleware/logger.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import requestTimer from "./middleware/requestTimer.mjs";

import charactersRouter from "./routes/characters.mjs";
import housesRouter from "./routes/houses.mjs";
import spellsRouter from "./routes/spells.mjs";

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Custom middleware
app.use(logger);
app.use(requestTimer);

// Set view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Home route
app.get("/", (req, res) => {
  res.render("index", { title: "🧙‍♂️🪄Welcome to Hogwarts! 🧙‍♂️🪄" });
});

// API & view routes
app.use("/characters", charactersRouter);
app.use("/houses", housesRouter);
app.use("/spells", spellsRouter);

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`⚡ Server running on http://localhost:${PORT}`);
});


