const express = require("express");
const app = express();
const port = 3000;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
const users = [
    {
        name: "Joker",
        age: 55,
    },
    {
        name: "Batman",
        age: 35,
    },
    {
        name: "Iron man",
        age: 25,
    },
];
app.get("/users", function (req, res) {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Example app listening to port: ${port}`);
});
