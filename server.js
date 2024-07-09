const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

app.use((req, res, next) => {
    console.log('Cookies:', req.cookies);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
    const mockData = {
        name: 'John Doe',
        age: 30,
        occupation: 'Software Developer'
    };
    res.json(mockData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
