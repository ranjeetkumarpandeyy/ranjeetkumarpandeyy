import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "employee-overload-api" });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
