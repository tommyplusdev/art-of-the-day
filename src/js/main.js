let apiKey;
fetch("http://localhost:3000/api-key")
  .then(res => res.json())
  .then(data => {
    apiKey = data.apiKey;
    console.log(`API-KEY in use: ${apiKey}`)
    getHarvardAPI();
    })
  .catch(error => console.error(error));

const getHarvardAPI = () => {
  fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}`) // contact the url first to see how many pages
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch with status code ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const randomPagination = Math.floor(Math.random() * data.info.pages + 1);
    const randomPageURL = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&page=${randomPagination}`;
    return fetch(randomPageURL);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch with status code ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    function getRandomIndex() {
      return Math.floor(Math.random() * data.records.length);
    }
    let randomIndex = getRandomIndex();
    while (!data.records[randomIndex].primaryimageurl) {
      randomIndex = getRandomIndex(); // get another index if there's no image (primaryimageurl == null)
    }
    console.log(data.records[randomIndex]);
    const setData = () => {
      document.querySelector('#artwork').src = data.records[randomIndex].primaryimageurl;
      document.querySelector('#title').textContent = data.records[randomIndex].title;
      if (data.records[randomIndex].culture) {
        document.querySelector('#culture').textContent = `${data.records[randomIndex].culture} / `
      } else {
        document.querySelector('#culture').textContent = "Of unknown cultural origins / ";
      };
      if (data.records[randomIndex].dated) {
        document.querySelector('#dated').textContent = data.records[randomIndex].dated;
       } else {
         document.querySelector('#dated').textContent = "Unknown date"
      }
      document.querySelector('#materials').textContent = data.records[randomIndex].materials;
      document.querySelector('#creditLine').textContent = data.records[randomIndex].creditline;
    };
    setData();
  })
  .catch(error => {
    console.error(error);
    // handle the error by displaying a message or retrying the fetch
    getHarvardAPI();
  });
};