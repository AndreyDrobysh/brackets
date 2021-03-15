module.exports = function check(str, bracketsConfig) {
  let open = [];
let close = [];
let stack = [];
for (let i = 0; i < bracketsConfig.length; i++) {
  open.push(bracketsConfig[i][0]);
  close.push(bracketsConfig[i][1]);
}
for (let i = 0; i < str.length; i++) {
  if (open.includes(str[i])) {
    stack.push(str[i]);
    continue
  }
  let bracketIndex = close.indexOf(str[i])
  let openBracket = open[bracketIndex]
  let lastOpenBracket = stack.pop()
  if (lastOpenBracket !== openBracket) {
    return false
  }
}
if (stack.length === 0) {
  return true
}
return false;
}
