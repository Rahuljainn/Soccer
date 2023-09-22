import { addNewPlayer } from "../controllers/playerControllers.js";

const routes = (app) => {
  app.route("/players").post(addNewPlayer); // post endpoint
};

export default routes;
