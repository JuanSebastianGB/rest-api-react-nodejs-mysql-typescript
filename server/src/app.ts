import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import config from './config'

import videoRoutes from './routes/videos.routes';
import userRoutes from './routes/Users.routes'

const app = express();

app.set('port', config.PORT || 3000);

// Middleweares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(videoRoutes);
app.use(userRoutes);
export default app;