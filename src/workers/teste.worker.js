onmessage = function(e){
  console.log("starting worker")
  setTimeout(() => {
    postMessage("worker completed")
  }, 1*1000);
}