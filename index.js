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

app.get("/users/:id", function (req, res) {
    const { id } = req.params;
    console.log(id);
    const result = id > users.length ? "User does not exist!" : users[id];
    res.send(result);
});

app.get("/users/delete/:id", function (req, res) {
    const { id } = req.params;
    console.log(id);
    const result =
        id > users.length
            ? "User does not exist!"
            : users.splice(users.indexOf(id), 1);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening to port: ${port}`);
});
