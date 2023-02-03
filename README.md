# art-of-the-day
A random art generator using Harvard's Art Museum API.

`<work-in-progress>`

![art_test2](https://user-images.githubusercontent.com/116316499/216523717-76d92717-3b15-4138-ada8-5f24009b6595.png)

## Planned Usage
1. Load the Page.
2. Examine the art piece you've been blessed with:
- The artwork itself
- Title
- The Artist Name
- Year of the Artwork
- Description (if any)

Miscellaneous information could be added, such as art piece technique, main colors used, etc.

As it is a `<work-in-progress>`, this can always be revisited to increase the functionality of the site.

The server-side components can be improved to store the time of the web server and conditionally generate a new URL on a new day. In other words, the amount of API calls is reduced, and provides exactly the experience one should expect for the art of the day.

## For Developers

## Prerequisites
`Node.js` & `npm`

## Installation

1. Clone this repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
```

2. Navigate to the cloned repository:

```bash
cd <repo-name>
```

3. Install the required dependencies:

```bash
npm install
```

(For those unfamilliar, this npm will read the package.json included from this repo, and fetch the dependencies needed to run the node server if you don't have them already installed)

4. Create a `.env` file in the root of the project and add the following line with your own API key:

```bash
touch .env
nano .env # or use vi .env

API_KEY=your-api-key-here
```

> Be sure to add this `.env` file to `.gitignore`-- **very important**, to ensure your API-KEY is hidden and not mis-used.

```bash
touch .gitignore # if it isn't created already
nano .gitignore # or use vi .gitignore

.env
```

5. Create an `index.js` file, which contains your local server's code:

```js
const express = require("express");
const dotenv = require("dotenv");

// Load the environment variables from the .env file
dotenv.config();

const app = express();
const port = 3000;

app.get("/api-key", (req, res) => {
  res.send({
    apiKey: process.env.API_KEY
  });
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
```

6. Run the server.

```bash
node index.js
```

* Test the API by making a GET request to http://localhost:3000/api-key. You should get a JSON response with your API key.

```bash
curl http://localhost:3000/api-key
```

Expected output:

```json
{"apiKey":"your-api-key-here"}
```

## Disclaimer
Harvard's Art API is available for Public Use, all rights reserved to HAM.
Visit the API Docs at https://api-toolkit.herokuapp.com/

