import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:5173']
    })
);

// Routes
// app.use('/api/auth');
// app.use('/api/jobs');
// app.use('/api/applications');

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