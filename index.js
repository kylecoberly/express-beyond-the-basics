const express = require("express")
const cors = require("cors")

const app = express()

app.get("/", (request, response) => {
  response.json({ message: "Hi!" })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("Currently listening on port", PORT))
