import express from 'express';
import { getNodes, getPipes } from './dao.mjs';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/nodes', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  try {
    const data = await getNodes();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
});

app.get('/pipes', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  try {
    const data = await getPipes();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
