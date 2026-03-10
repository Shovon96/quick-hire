import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './app/routes';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ['http://localhost:3000', 'https://qtec-quick-hire.vercel.app'],
        credentials: true
    })
);

// Routes
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to the Quick Hire Server.");
})

// If any routes are not matched.
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'API route not found',
    });
});

export default app;