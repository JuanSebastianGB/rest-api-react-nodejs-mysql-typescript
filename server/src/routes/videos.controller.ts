import { RequestHandler } from "express";
const { Video } = require('../database');

export const createVideo: RequestHandler = async (req, res) => {
    /* const video = new Video(req.body); */
    const video = await Video.create(req.body);
    res.json(video);
};
export const getVideos: RequestHandler = async (req, res) => {
    const videos = await Video.findAll();
    res.json(videos);
}
export const getVideo: RequestHandler = (req, res) => {
    res.json('Getting video')
}
export const updateVideo: RequestHandler = (req, res) => {
    res.json('Updating video');
}
export const deleteVideo: RequestHandler = (req, res) => {
    res.json('Deleting video');
}
