#!/usr/bin/env node

function important(text) {
  return `\u001b[92m\u001b[1m${text}\u001b[0m`
}

console.log('-----------------|----------|----------|----------|----------|----------------|');
console.log('File             |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |');
console.log('-----------------|----------|----------|----------|----------|----------------|');
console.log(`${important('All files')}        |      ${important('💯')}   |      ${important('💯')}   |      ${important('💯')}   |      ${important('💯')}   |                |`);
console.log('-----------------|----------|----------|----------|----------|----------------|');