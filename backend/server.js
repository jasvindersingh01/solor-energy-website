require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  credentials: true
};

const app = express();

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());



connectDB();

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
