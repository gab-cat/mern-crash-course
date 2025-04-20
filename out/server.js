import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // allows us to accept json data in the body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV == "production") {
  // In production, serve static files from the root directory (one level up from server.js)
  app.use(express.static(path.resolve(__dirname, "./out")));

  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/")) {
      res.sendFile(path.resolve(__dirname, "index.html"));
    }
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
