import express from 'express';
import authRoutes from './routes/routes';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

export default app;