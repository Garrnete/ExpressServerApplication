let houses = [
  { id: 1, name: "Gryffindor", founder: "Godric Gryffindor" },
  { id: 2, name: "Slytherin", founder: "Salazar Slytherin" },
  { id: 3, name: "Hufflepuff", founder: "Helga Hufflepuff" },
  { id: 4, name: "Ravenclaw", founder: "Rowena Ravenclaw" },
];

import express from "express";
const router = express.Router();

// GET all houses
router.get("/", (req, res) => {
  res.json(houses);
});

// GET house by ID
router.get("/:id", (req, res) => {
  const house = houses.find(h => h.id === parseInt(req.params.id));
  house ? res.json(house) : res.status(404).json({ error: "House not found" });
});

// POST new house
router.post("/", (req, res) => {
  const { name, founder } = req.body;
  const newHouse = { id: houses.length + 1, name, founder };
  houses.push(newHouse);
  res.status(201).json(newHouse);
});

// PATCH house by ID
router.patch("/:id", (req, res) => {
  const house = houses.find(h => h.id === parseInt(req.params.id));
  if (!house) return res.status(404).json({ error: "House not found" });

  if (req.body.name) house.name = req.body.name;
  if (req.body.founder) house.founder = req.body.founder;

  res.json(house);
});

// DELETE house by ID
router.delete("/:id", (req, res) => {
  houses = houses.filter(h => h.id !== parseInt(req.params.id));
  res.json({ message: "House removed" });
});

export default router;