const express = require("express");
const cors = require("cors");
const inspectionRouter = require("./routes/inspection.routes");
const errorHandler = require("./middleware/error.middleware");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/inspections", inspectionRouter);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Quality Inspection Tracker API"
    });
});

app.use(errorHandler);

module.exports = app;