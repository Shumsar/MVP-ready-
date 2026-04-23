import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// TEMP test route
app.get("/", (req, res) => {
  res.send("Driver Check‑In Backend is running");
});

// Driver check‑in endpoint
app.post("/api/checkin", async (req, res) => {
  const { shipmentNumber, truckType } = req.body;

  // (Later this connects to ISP / Excel / Teams)
  console.log("Check‑in:", shipmentNumber, truckType);

  res.json({
    message: `✅ Checked in for ${shipmentNumber}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
