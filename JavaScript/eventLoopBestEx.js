function timeConsumingByLoop() {
    console.log("Loop Starts");
    for (let i = 0; i < 1000000000; i++) {
      //some task
    }
    console.log("Loop ends");
  }
  
  function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    setTimeout(function exec0() {
      console.log("Completed the timer0");
      for (let i = 0; i < 1000000000; i++) {
      //some task
      }
    }, 5000);
  }
  
  function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec1() {
      console.log("Completed the timer1");
    }, 1000);
  }
  
  function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec2() {
      console.log("Completed the timer2");
    }, 2000);
  }
  
  console.log("Hii");
  timeConsumingByLoop();
  timeConsumingByRuntimeFeature0();
  timeConsumingByRuntimeFeature1();
  timeConsumingByRuntimeFeature2();
  timeConsumingByLoop();
  console.log("Bye");