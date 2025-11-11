import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/api/*", cors());

app.get("/", (c) => {
	return c.text("Welcome to Hono!");
});

app.get("/api/test", (c) => {
	return c.json({ message: "This is API test!!" });
});

export default app;
