const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit process with failure
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Import routes
const authRoute = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoute = require("./routes/posts");

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes()); // Mount the users route
app.use("/api/posts", postRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}!`);
});
