import express from "express";
import task from "./routes/taskRoute";
import user from "./routes/userRoute";

const app = express();
app.use(express.json());
app.use(user);
app.use(task);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});