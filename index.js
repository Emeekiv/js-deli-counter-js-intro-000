function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome ${name}, you are number ${katzDeliLine.length + 1} in line.`
}
function nowServing(katzDeliLine){
  return katzDeliLine[0];
  katzDeliLine.shift();
}
