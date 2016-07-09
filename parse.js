function parser (input) {
  var parseArray = [];
  var getPos = input.search("GET");
  var lineBreak = input.search('/r/n');
  var uri = input.slice(5, lineBreak);
  var space = uri.search(' ');
  uri = uri.slice(0, space);
  if(uri === 'favicon.ico') {
    uri = 'index.html';
  }
  // if(uri !== 'index.html') {
  //   uri = '404.html';
  // }
  console.log('uri', uri);
  parseArray.push(uri);
  return parseArray;
}

module.exports = parser;