import express from "express";

let characters = [
  { id: 1, name: "Harry Potter", house: "Gryffindor" },
  { id: 2, name: "Hermione Granger", house: "Gryffindor" },
  { id: 3, name: "Draco Malfoy", house: "Slytherin" },
];

const router = express.Router();

// Render characters page
router.get("/view", (req, res) => {
  res.render("characters", { characters });
});

// GET all characters (optional house filter)
router.get("/", (req, res) => {
  const { house } = req.query;
  if (house) return res.json(characters.filter(c => c.house === house));
  res.json(characters);
});

// GET character by ID
router.get("/:id", (req, res) => {
  const char = characters.find(c => c.id === parseInt(req.params.id));
  char ? res.json(char) : res.status(404).json({ error: "Character not found" });
});

// POST new character
router.post("/", (req, res) => {
  const { name, house } = req.body;
  const newChar = { id: characters.length + 1, name, house };
  characters.push(newChar);
  res.redirect("/characters/view");
});

// PATCH character by ID
router.patch("/:id", (req, res) => {
  const char = characters.find(c => c.id === parseInt(req.params.id));
  if (!char) return res.status(404).json({ error: "Character not found" });

  if (req.body.name) char.name = req.body.name;
  if (req.body.house) char.house = req.body.house;

  res.json(char);
});

// DELETE character by ID
router.delete("/:id", (req, res) => {
  characters = characters.filter(c => c.id !== parseInt(req.params.id));
  res.json({ message: "Character removed" });
});

export default router;