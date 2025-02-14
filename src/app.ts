import express, { Request, Response } from 'express';
import cors from 'cors';
import session from 'cookie-session';
import notFound from './middleware/notFount';
import { appConfig } from './config/app.config';

const app = express();

app.use(express.json());

app.use(
  session({
    name: 'session', 
    keys: [appConfig.session_secret as string],
    maxAge: 24 * 60 * 60 * 1000,
    secure: appConfig.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  })
);


app.use(
  cors({
    origin: appConfig.fronted_url,
    credentials: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use(notFound);

export default app;
