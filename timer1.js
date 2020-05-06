

const timer = ((beepTime) => {
  // console.log(beepTime);
  if (beepTime === undefined) {
    return;
  }

  for (let alarm of beepTime) {
    if (alarm < 0 || Number.isNaN(alarm)) {
      continue;
    }
    let time = alarm * 1000;
    setTimeout(() => {
      process.stdout.write("beep");
      // process.stdout.write('\x07');
    }, time);
    setTimeout(() => {
      console.log();
    }, time + 1);
  }
})

timer(process.argv.slice(2));
