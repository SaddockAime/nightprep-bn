require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { specs, swaggerUi } = require('./config/swagger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'NightPrep API Documentation'
}));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/checklist', require('./routes/checklist'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/timer-settings', require('./routes/timer'));
app.use('/api/bedtime', require('./routes/bedtime'));
app.use('/api/reminder', require('./routes/reminder'));

app.get('/', (req, res) => {
  res.json({
    message: 'NightPrep API is running...',
    documentation: 'Visit /api-docs for API documentation',
    endpoints: {
      docs: '/api-docs',
      auth: '/api/auth',
      checklist: '/api/checklist',
      settings: '/api/settings',
      bedtime: '/api/bedtime',
      reminder: '/api/reminder',
      timer: '/api/timer-settings'
    }
  });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})