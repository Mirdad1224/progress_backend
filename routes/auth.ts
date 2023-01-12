import { Router } from "express";
import { register, social, login, refresh, logout } from "../controllers/auth";
import loginLimiter from "../middlewares/loginLimiter";

const router = Router();

router.route("/register").post(loginLimiter, register);

router.route("/social").post(social);

router.route("/login").post(loginLimiter, login);

router.route("/refresh").get(refresh);

router.route("/logout").post(logout);

export default router;
