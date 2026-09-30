const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});


app.post("/api/analyse", (req, res) => {
  res.status(200).json({
    score: 72,
    reasons: ["a", "b", "c"],
    tailoredBullets: [],
    missingKeywords: [],
    interviewQuestions: []
  });
});

app.listen(5000);