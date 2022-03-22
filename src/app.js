const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const app = express();

app.set("port", process.env.PORT || 3000);

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(morgan("dev"));
app.use(
    myConnection(
        mysql,
        {
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "appform_db",
        },
        "single"
    )
);

app.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}`);
});
