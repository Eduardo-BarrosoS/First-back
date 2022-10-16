import "reflect-metadata"
import express from "express";
import "./database"

const app = express();

app.listen(3001, () => console.log("lass uns alles beenden"))

app.get("/benutzer", (req, res)  => {
    return res.json({ message: "server lauft"})
})

app.post("/", (req, res) => {
    return res.json({message: "Die Daten wurden erfolgreich gespeichert"})
})