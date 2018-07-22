const request = require('request');
const fs = require('fs');

const options = {
    uri: 'https://api.github.com/users/iwilliam317/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'}
};

request(options, (error, response, body) => {
  if (error) throw error;

  const repositories = JSON.parse(body);

  repositories.forEach(repository => {
    fs.appendFile('./repositories/github.txt', `${repository.name} - ${repository.language} \n`, error => {
      if (error) throw error;      
    })
  });
});