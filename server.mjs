import express from 'express';
import dao from './dao.js';

const app = express();

app.get('/getgeo', (req, res) => {
  dao.getGeoData().then((data) => {
    res.json(data);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
