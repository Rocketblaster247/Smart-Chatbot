var tag_dataset = [];
var net = new brain.recurrent.LSTM();
var load = function (d) {
  tag_dataset = d.toString().split(";");
    net.train(tag_dataset, {
      iterations: 300,
      errorThresh: 0.02,
      log: true,
      logPeriod: 1,
      learningRate: 0.2,
      momentum: 1,
      callback: null,
      callbackPeriod: 10,
      timeout: 1000*60,
    });
};
var xhr = new XMLHttpRequest();
xhr.open("GET", "tag-dataset");
xhr.addEventListener("load", function (x) {
    console.log("Loaded file...");
    load(this.responseText);
});
xhr.send();
