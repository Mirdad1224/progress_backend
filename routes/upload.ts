import { Router } from "express";
import {profileImage, productImage, productGallery, articleImage} from '../controllers/upload'

const router = Router();

router.post("/profile", profileImage);
router.post("/prodimg", productImage);
router.post("/prodgallery", productGallery);
router.post("/articleimg", articleImage);

export default router