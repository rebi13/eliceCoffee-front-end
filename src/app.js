import express from "express";
const app = express();
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import mime from "mime";
import viewRouter from "./routes/viewRouter.js";

const PORT = process.env.PORT || 8080;

// 정적 파일들을 서빙하기 위한 절대 경로 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  express.static(join(__dirname, "./public"), {
    setHeaders: (res, path) => {
      res.setHeader("Content-Type", mime.getType(path));
    },
  })
);

app.use(viewRouter);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`The server is listening on port ${PORT}`);
});
