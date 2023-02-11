import express from 'express';
import { chainOfResponsibilityClient } from './behavioralPatterns/chain-of-responsibility';
import { commandClient } from './behavioralPatterns/command';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// Chain Of responsibility pattern
const chain = chainOfResponsibilityClient
console.log("====================>" , chain.requestDayOff(1));
console.log("====================>" , chain.requestDayOff(3));
console.log("====================>" , chain.requestDayOff(6));

// Command pattern
const commandPattern = commandClient
commandPattern.exec()
