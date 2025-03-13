const express = require("express")
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
  res.status(200).send("welcome to our backend")
})

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}....`)
})