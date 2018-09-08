function takeANumber(current, Ada) {
  current.push(Ada);
  return "Welcome, " + Ada + ". You are number " + current.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return ""
  } else {
    let served = katzDeliLine.shift[0];
  }
}