import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
