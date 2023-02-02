fetch("http://localhost:3000/api-key")
  .then(res => res.json())
  .then(data => {
    const apiKey = data.apiKey;
    // Use the API key as needed
    const url = "https://api.harvardartmuseums.org/object?apikey=" + apiKey;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));