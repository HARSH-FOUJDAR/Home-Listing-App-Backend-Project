const express = require('express');
const mysql = require("mysql")
const app = express();

const path = require('path')

app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "Pages"))

const packegroutes = require("./routes/homeRoutes")

///midleware
app.use(express.urlencoded({ extended: true }));


//import routes

app.use(packegroutes)
app.listen(3000, () => {
    console.log("Server was running");

})