var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var led2 = new five.Led(12);
  var led3 = new five.Led(11);
  var led4 = new five.Led(10);

  photoresistor = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    led2: led,
    led3: led,
    led4: led
  });

  photoresistor.on("data", function() {
    if (this.value <= 200) {
      led4.off();
    } else if (this.value > 200) {
      led4.on();
    }
  });

  led.on();
  led2.on();
  led3.on();
 
});
