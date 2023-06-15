import express, { Request, Response } from 'express';
import todoRouter from './todo/router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/todo', todoRouter);

export default app;
