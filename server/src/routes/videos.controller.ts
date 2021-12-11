import { RequestHandler } from "express";
const { Video } = require('../database');

export const createVideo: RequestHandler = async (req, res) => {
    const video = await Video.create(req.body);
    res.json(video);
};
export const getVideos: RequestHandler = async (req, res) => {
    const videos = await Video.findAll();
    res.json(videos);
}
export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({
        where: { id: req.params.id }
    });
    res.json(videoFound);
}
export const updateVideo: RequestHandler = async (req, res) => {
    await Video.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Row updated' });
}
export const deleteVideo: RequestHandler = async (req, res) => {
    await Video.destroy(
        { where: { id: req.params.id } });
    res.json("Video deleted");
}
