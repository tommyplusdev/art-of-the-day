# art-of-the-day
A random art generator using Harvard's Art Museum API.

`<work-in-progress>`

## Planned Usage

1. Enter your `API-KEY` from Harvard*
- This should be encrypted.
2. Click "Art of the Day!"
3. Examine the art piece you've been blessed with:
- The artwork itself
- Title
- Year of the Artist
- Artist Name
- Description (if any)


** May be disregarded if one is hosting their own server, in this case, my own.

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

4. Create a .env file in the root of the project and add the following line with your own API key:

```
touch .env
nano .env
# or use vi .env
API_KEY=your-api-key-here
```

> Be sure to add this `.env` file to `.gitignore` **very important!**

```bash
touch .gitignore # if it isn't created already
nano .gitignore

API_KEY=your-api-key-here
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

