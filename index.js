import bodyParser from "body-parser";
import express from "express";

const app = express();
const jsonParser = bodyParser.json();

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/hello-world', (req, res) => {
  console.log('---terminal: ', req.query.count)
  return res.send('hello-world');
});

const port = process.env.PORT || 8040;

app.listen(port, () => {
  console.log(`Server is running in port ${port}.`)
})