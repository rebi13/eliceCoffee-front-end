import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url"; // import the fileURLToPath function

const __filename = fileURLToPath(import.meta.url); // Get the current file path (app.js)
const __dirname = dirname(__filename); // Get the directory path

export const serveStatic = (resource) => {
  const resourcePath = join(__dirname, `../views/${resource}.html`);
  return express.static(resourcePath);
};

const router = express.Router();

router.use("/login", serveStatic("login"));
router.use("/register", serveStatic("register"));
router.use("/register-complete", serveStatic("register-complete"));
router.use("/product", serveStatic("product-list"));
router.use("/product/:productId", serveStatic("product-detail"));
router.use("/pay", serveStatic("pay"));
router.use("/pay-complete", serveStatic("pay-complete"));
router.use("/order-list", serveStatic("order-list"));
router.use("/order-edit", serveStatic("order-edit"));
router.use("/mypage", serveStatic("mypage-list"));
router.use("/mypage/edit", serveStatic("mypage-edit"));
router.use("/cart", serveStatic("cart"));

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../views/home.html"));
});

router.use((req, res) => {
  res.status(404).sendFile(join(__dirname, "../views/404.html"));
});

// router.get : 특정 경로로 요청을 보낼 때 핸들러 실행.
// router.use : 특정 경로에 대해 미들웨어 함수를 실행하도록 라우터 설정.

export default router;
