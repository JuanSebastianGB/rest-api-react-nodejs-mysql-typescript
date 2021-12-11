import { RequestHandler } from "express";

export const createVideo: RequestHandler = (req, res) => {
    console.log(req.body);
    res.json('Video saved');
};
export const getVideos: RequestHandler = (req, res) => {
    res.json('Getting videos');
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
