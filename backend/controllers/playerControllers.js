import mongoose from "mongoose";
import PlayerSchema from "../models/playerModel.js";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer
    .save()
    .then((Player) => {
      // The error message "MongooseError: Model.prototype.save() no longer accepts a callback"
      res.json(Player);
    })
    .catch((err) => {
      res.json(err);
    });
};
