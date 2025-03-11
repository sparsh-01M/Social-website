import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import partnerRoutes from './routes/partnerRoutes.js';
import siteContentRoutes from './routes/siteContentRoutes.js'; // Add this

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the vybes API');
});

// Routes
app.use('/api/partners', partnerRoutes);
app.use('/api/site-content', siteContentRoutes); // Add this

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
  } catch (error) {
    console.error('Server failed to start:', error);
  }
};

startServer();
