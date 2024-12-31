const fs = require('fs');
const path = require('path');

const generatedDir = path.join(__dirname, '../src/lib/graphql/generated');
const files = ['gql.ts', 'graphql.ts'];

files.forEach(file => {
  const filePath = path.join(generatedDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Keep eslint-disable and ts-nocheck comments but remove all other comments
  content = "/* eslint-disable */\n// @ts-nocheck\n" + content
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // Remove all comments
    .replace(/^\s*[\r\n]/gm, ''); // Remove empty lines
    
  fs.writeFileSync(filePath, content);
});
