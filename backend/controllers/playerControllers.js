import mongoose from "mongoose";
import PlayerSchema from "../models/playerModel.js";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer
    .save()
    .then((Player) => {
      res.json(Player);
    })
    .catch((err) => {
      res.json(err);
    });
};
