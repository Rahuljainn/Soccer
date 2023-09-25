import mongoose from "mongoose";
import PlayerSchema from "../models/playerModel.js";

const Player = mongoose.model("Player", PlayerSchema);

const addNewPlayer = (req, res) => {
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

const getPlayers = async (req, res) => {
  try {
    const result = await Player.find({});
    console.log(`Player: here: ${result}`);
    res.json(result);
  } catch (error) {
    res.send("Error:", error);
    console.log("Error:", error);
  }
};

const getPlayer = async (req, res) => {
  try {
    const result = await Player.findById(req.params.id);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const updatePlayer = async (req, res) => {
  try {
    const result = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const deletePlayer = async (req, res) => {
  try {
    const result = await Player.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, mesaage: "Successfully Deleted the Player" });
  } catch (error) {
    res.send(error);
  }
};

export { addNewPlayer, getPlayers, getPlayer, updatePlayer, deletePlayer };
