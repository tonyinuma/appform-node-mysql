const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}`);
});
