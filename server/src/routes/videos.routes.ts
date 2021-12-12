import { Router } from "express";
const router = Router();
import * as videoController from './controllers/videos.controller'

/* CRUD */
router.get('/videos', videoController.getVideos);
router.get('/videos/:id', videoController.getVideo);
router.post('/videos', videoController.createVideo);
router.put('/videos/:id', videoController.updateVideo);
router.delete('/videos/:id', videoController.deleteVideo);

export default router;