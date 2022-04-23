const express = require("express")

const app = express()

let PRE_PATH = "/"
let PATH = "/build"
let PATH_2 = "/build/index.html"
if (process.env.NODE_ENV !== "production") {
  // PATH = "D:/Projects/fn-mondays/viewer/client/build"
  // PATH_2 = "D:/Projects/fn-mondays/viewer/client/build/index.html"
  // PRE_PATH = ""
}

// Serve the static files from the React app
app.use(PRE_PATH, express.static(PATH))

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(PATH_2)
})

const port = process.env.PORT || 80
app.listen(port)

console.log("App is listening on port " + port)
