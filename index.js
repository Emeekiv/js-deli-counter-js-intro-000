function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome ${name}, you are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  return `Currently serving ${katzDeliLine[0]}`;
  katzDeliLine.shift();
}
function currentLine(katzDeliLine){
var line = [];
  for (let i = katzDeliLine.length; i = -1 ; i--){
    if (i === 0 ){
      return 'The line is currently empty.'
    }
    else { line = `${line} ${i + 1}. ${katzDeliLine[i]},`}
  }
  return `The line is currently:${line}`
}
