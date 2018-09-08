function takeANumber(current, Ada) {
  current.push(Ada);
  return "Welcome, " + Ada + ". You are number " + current.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  } 
}

function currentLine(katzDeliLine){
  if (katzDeliLine > 0) {
    return katzDeliLine.join("The line is currently: ");
  }
}