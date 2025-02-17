import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './middleware/notFount';
import { appConfig } from './config/app.config';
import { sessionConfig } from './config/session.config';
import router from './routes';

const app = express();

app.use(express.json());
app.use(sessionConfig);
app.use(
  cors({
    origin: appConfig.fronted_url,
    credentials: true,
  })
);

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use(notFound);

export default app;
