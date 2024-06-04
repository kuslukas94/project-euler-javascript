//Reading external txt file and writing to it.
const fs = require('node:fs');
fs.readFile('/Users/lukaskus/work/project-euler/list.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
//Writing to file
const content = "nové jméno";
fs.appendFile('/Users/lukaskus/work/project-euler/list.txt', content, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("New list item added.")
  }
});