import { Hono } from "hono";
import mushrooms from "./mushrooms";

const app = new Hono();

app.route("/mushrooms", mushrooms);

export default app;
