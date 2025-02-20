import { Hono } from "hono";

const app = new Hono();

// 仮の菌類データ
const mushrooms = [
  {
    id: 1,
    name: "ベニテングタケ",
    color: "赤",
    shape: "丸",
    stipe: "つばあり",
  },
  {
    id: 2,
    name: "シロタマゴテングタケ",
    color: "白",
    shape: "丸",
    stipe: "つばあり",
  },
];

// 全菌類データを取得
app.get("/", (c) => {
  return c.json(mushrooms);
});

app.get("/:id", (c) => {
  const id = Number(c.req.param("id"));
  const mushroom = mushrooms.find((m) => m.id === id);

  if (!mushroom) {
    return c.json({ error: "Not found" }, 404);
  }

  return c.json(mushroom);
});

export default app;
