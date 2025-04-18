const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Docker backend!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});