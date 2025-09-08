import express from "express";

let spells = [
  { id: 1, name: "Expelliarmus", type: "Charm" },
  { id: 2, name: "Lumos", type: "Charm" },
  { id: 3, name: "Avada Kedavra", type: "Curse" },
];

const router = express.Router();

// Render spells page
router.get("/view", (req, res) => {
  res.render("spells", { spells });
});

// GET all spells (optional type filter)
router.get("/", (req, res) => {
  const { type } = req.query;
  if (type) return res.json(spells.filter(s => s.type === type));
  res.json(spells);
});

// GET spell by ID
router.get("/:id", (req, res) => {
  const spell = spells.find(s => s.id === parseInt(req.params.id));
  spell ? res.json(spell) : res.status(404).json({ error: "Spell not found" });
});

// POST new spell
router.post("/", (req, res) => {
  const { name, type } = req.body;
  const newSpell = { id: spells.length + 1, name, type };
  spells.push(newSpell);
  res.redirect("/spells/view");
});

// PATCH spell by ID
router.patch("/:id", (req, res) => {
  const spell = spells.find(s => s.id === parseInt(req.params.id));
  if (!spell) return res.status(404).json({ error: "Spell not found" });

  if (req.body.name) spell.name = req.body.name;
  if (req.body.type) spell.type = req.body.type;

  res.json(spell);
});

// DELETE spell by ID
router.delete("/:id", (req, res) => {
  spells = spells.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: "Spell removed" });
});

export default router;