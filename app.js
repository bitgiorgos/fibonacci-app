const PORT = process.env.PORT || 8080
const express = require('express');
const app = express();


app.get('/fibonacci/:number', (req, res) => {
  const number = parseInt(req.params.number);
  const fibonacci = [0, 1];

  // // If the input is not a number, return an error response
  if (isNaN(number)) {
    res.status(400).send('Invalid input');
    return;
  }

  // If the input number is negative, return an error response
  if (number < 0) {
    res.status(400).send('Number must be positive');
    return;
  }

  // // If the input number is too large, return an error response
  if (number > 1476) {
    res.status(400).send('Number too large');
    return;
  }

// Calculate the next 5 numbers in the Fibonacci sequence starting from the input number
  for (let i = 2; i <= number + 5; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

// Return the next 5 numbers in the Fibonacci sequence as a comma-separated string
  res.send(fibonacci.slice(number, number + 5).join(', '));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))