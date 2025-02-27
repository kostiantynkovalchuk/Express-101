// const express = require("express");

// const app = express();

// const PORT = 9090;

// const trainees = [
//   { id: 1, name: "John Doe", age: 25, region: "Nairobi" },
//   { id: 2, name: "Jane Doe", age: 24, region: "Mombasa" },
//   { id: 3, name: "John Smith", age: 26, region: "Kisumu" },
//   { id: 4, name: "Jane Smith", age: 23, region: "Nairobi" },
// ];

// // app.get("/", function (request, response) {
// //   response.send("Hello World, you are getting a response from my server");
// // });

// app.get("/trainees", function (request, response) {
//   console.log(request.query);
//   const { region } = request.query; // Get the 'region' query parameter

//   let filteredTrainees = trainees;

//   if (region) {
//     filteredTrainees = trainees.filter(
//       (trainee) => trainee.region.toLowerCase() === region.toLowerCase()
//     );
//   }

//   response.send({ trainees: filteredTrainees });
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/multiply", (req, res) => {
  const value1 = parseFloat(req.query.value1);
  const value2 = parseFloat(req.query.value2);

  if (isNaN(value1) || isNaN(value2)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide two numbers." });
  }

  const result = value1 * value2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
