const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use("/api/tasks", taskRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//Frontend UI
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));
