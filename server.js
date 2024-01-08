// importing express moduel
const express = require ("express");
const app = express();
const port = 5000;


// creting simple route with / 
app.get('/', (req, res)=> {
  res.send("hey there i had created my first local server");
})

// creting  route  responding with json 
app.get('/api', (req , res)=> {
  res.json({
    myname:"yuvaraj\n",
    studying :"1st year ist sem cs in srm\n",
    intrest: "just trying to be good at doing things\n"});
});

// creting  route  with parametr responding  by using it 
// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.listen(port, ()=> {
  console.log(`your current port is ${port}`)
})

