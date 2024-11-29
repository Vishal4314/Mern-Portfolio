require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
require("./db/conn");

const app = express();
const port = 8007;

app.use(cors());
app.use(express.json());
app.use(router);

// app.get("/", async (req, res) => {
//   res.send("Reached backend");
// });

app.listen(port, async (req, res) => {
  console.log(`server started on port: ${port}`);
});
