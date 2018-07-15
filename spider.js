const request = require('request');
const cheerio = require('cheerio');

request('http://www.imdb.com/chart/moviemeter', (error, response, body) => {
  if (error) console.log(`Error: ${error}`);

  let $ = cheerio.load(body);
});