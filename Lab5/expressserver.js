import express from "express";

const app = express();

app.use(express.json());

const userdata = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];

// GET all users
app.get("/users", (req, res) => {
    res.status(200).json({
        message: "welcome to the user api",
        data: userdata
    });
});

// POST new user
app.post("/users", (req, res) => {
    const { id, name, age } = req.body;

    userdata.push({ id, name, age });

    res.status(201).json({
        message: "user added successfully",
        data: userdata
    });
});

// PUT user
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = userdata.find(user => user.id == id);

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    user.name = name;
    user.age = age;

    res.status(200).json({
        message: "user updated successfully",
        data: user
    });
});

// MSG route
app.get("/msg/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: "your msg is",
        data: id
    });
});

app.listen(3000, () => {
    console.log("Server is running on port number 3000");
});