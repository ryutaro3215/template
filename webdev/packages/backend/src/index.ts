import { Hono } from "hono";
import { cors } from "hono/cors";
import { supabaseClient } from "./supabase";

const app = new Hono();

app.use("/api/*", cors());

app.get("/", (c) => {
  return c.text("Welcome to Hono!");
});

app.get("/api/test", (c) => {
  return c.json({ message: "This is API test!!" });
});

app.get("/api/users", async (c) => {
  const { data, error } = await supabaseClient.from("users").select("*");
  if (error) {
    return c.json({ error: error.message }, 500);
  }
  return c.json({ users: data });
});

export default app;
