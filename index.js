const fs = require('fs');
const express = require('express');
const app = express();
const zips = fs.readFileSync('./zips.csv').toString()
  .split('\n')
  .map(z => z.split(','))
  .map(l=>Object.assign({}, {
    zip: l[0],
    city: l[1],
    state: l[2],
    county: l[4],
    lat: l[5],
    long: l[6] && l[6].replace('\r', '')
  }))
app.get('/zips/:zip', (req, res)=>{
  console.log('get', req.params.zip);
  res.json(zips.find(z=>z.zip === req.params.zip))
});
app.listen(8080)