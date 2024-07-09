const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
    console.log("request", req);

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
