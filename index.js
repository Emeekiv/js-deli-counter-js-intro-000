function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome ${name}, you are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  return katzDeliLine[0];
  katzDeliLine.shift();
}
function currentLine(katzDeliLine){
var line = [];
  for (let i=0; i < katzDeliLine.length; i++){
    line = `${line} ${i + 1}. ${katzDeliLine[i]},`
  }
  return `The line is currently:${line}`
}
