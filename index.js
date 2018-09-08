function takeANumber(current, Ada) {
  current.push(Ada);
  return "Welcome, " + Ada + ". You are number " + current.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift[0];
  }
}