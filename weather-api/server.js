import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const FLASK_URL = "http://127.0.0.1:5050/predict";

app.post("/api/predict", async (req, res) => {
  try {
    const flaskResponse = await fetch(FLASK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await flaskResponse.json();
    res.json(data);
  } catch (error) {
    console.error("Error communicating with Flask:", error);
    res.status(500).json({ error: "Server communication error" });
  }
});

app.listen(5000, () => console.log("🚀 Node server running on port 5050"));
