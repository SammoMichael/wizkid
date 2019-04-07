const express = require("express");
const path = require('path');

const app = express();
var BSearch2 = `def play_game():
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
  while is_happy:
    jump_up_and_down
`
// Bsearch2 =  Bsearch2.replace(/(\n)+/g, '<br />');
var BSearch = `function bsearch (Arr,value){<br>var low = 0,
  high = Arr.length - 1,
  mid;
while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (Arr[mid] == value) return mid;
  else if (Arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}
return -1;
}`

app.use(express.static(path.join(__dirname, 'client')));

app.get('/express_backend', (req, res) => {
  res.send({
    express: BSearch2
  });
});
app.get("/", (req, res) => {
  res.send({ status: 'Hello World' });
});


const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
