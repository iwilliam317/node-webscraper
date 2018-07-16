const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('http://www.imdb.com/chart/moviemeter', (error, response, body) => {
  if (error) console.log(`Error: ${error}`);

  let $ = cheerio.load(body);

  $('.lister-list tr').each(function(){
    let title = $(this).find('.titleColumn a').text().trim();
    let rating = $(this).find('.imdbRating strong').text().trim();
    // console.log(title, rating);

    fs.appendFile('imdb.txt', `Título: ${title} | Nota: ${rating} \n`, error => {
      if (error) throw error;      
    });
  });
});