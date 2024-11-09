const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const conn = mysql.createConnection({
    host: "database",
    user: "root",
    password: "root",
    database: "nodedb",
});

app.get("/", (req, res) => {
    const insertName = `INSERT INTO people(name) values('Jhonatan')`;
    const selectNames = `SELECT * FROM people`;
    conn.query(insertName);

    conn.query(selectNames, (err, result) => {
        const html = `
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${result.map((person) => `<li>${person.name}</li>\n`).join("")}
            </ul>
        `;
        res.send(html);
    });
});

app.listen(port, () => {
    console.log("connected to port " + port);
});
