function takeANumber(line, name){
  line.push(name);
  return `Welcome ${name}, you are number ${line.length + 1} in line.`
}
