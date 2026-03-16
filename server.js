import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const funFact = response.data.text;
    res.json({ fact: funFact });
  } catch (error) {
    res.status(500).json({ error: "Not so fun fact: we couldn't fetch a fun fact" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening: ${port}`)
})