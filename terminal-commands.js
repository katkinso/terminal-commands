const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  // your code here
  fs.writeFile('new-file.txt', '', 'utf8', (err) => {
      if (err) throw err;
      console.log('file created')
  })
};

module.exports.mkdir = () => {
  // your code here
  fs.mkdir('newDir',(err) => {
    if (err) throw err;
    console.log('directory created')
  })
};