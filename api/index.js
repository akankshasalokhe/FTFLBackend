const express = require('express');
const connectDB = require('../config/db.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Import routes
app.use('/api/footer', require('../routes/footerRoutes.js'));
app.use('/api/testimonial', require('../routes/testimonialRoutes.js'));
app.use('/api/blog', require('../routes/blogRoutes.js'));

app.get('/', (req, res) => {
    res.send('Welcome to the backend API');
});

const PORT = process.env.PORT || 5005;

app.use((req, res, next) => {
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
