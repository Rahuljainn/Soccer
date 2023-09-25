import {
  addNewPlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers.js";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer); // post endpoint
  app
    .route("/player/:id")
    .get(getPlayer)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
