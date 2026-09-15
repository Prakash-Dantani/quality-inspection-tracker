require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");


const PORT = process.env.PORT || 8000;

async function startServer() {
    try {
        await pool.connect(); // Connect Databse

        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}/`);
        });

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startServer();