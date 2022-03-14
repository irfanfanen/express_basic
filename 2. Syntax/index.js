import express from "express";
 
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.listen(3000, () => console.log('Running at :3000'));