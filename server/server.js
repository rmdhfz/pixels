const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');

const movies = require('./movies_metadata.json');

require('dotenv/config');

// PWAs want HTTPS!
function checkHttps(request, response, next) {
  // Check the protocol — if http, redirect to https.
  console.log(request.get('X-Forwarded-Proto'));
  const XFowarded = request.get('X-Forwarded-Proto');
  if (XFowarded) {
    if (request.get("X-Forwarded-Proto").indexOf("https") != -1) {
      return next();
    } else {
      response.redirect("https://" + request.hostname + request.url);
    }
  }
}

// app.all("*", checkHttps);

app.use(cors())
app.get('/', (req, res) => {
    res.status(404);
});

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});


// A mock route to return some data.
app.get("/api/movies", (request, response) => {
  response.status(200).json({'data': movies});
  console.log("❇️ Received GET request to /api/movies");
});


app.get('/api/movie/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id) {
      const movieById = movies.filter((movie) => movie.id === id)[0];
      if (movieById) {
        res.status(200).json({'data': movieById});
      } else {
        res.status(404).json({'error': 'data not found'});
      }
  }else{
    res.status(400).json({'error': 'bad parameter'});
  }
  console.log("❇️ Received GET request to /api/movie/:id");
})

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
