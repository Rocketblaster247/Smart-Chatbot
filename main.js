var artyom = new Artyom();
artyom.say("Hmm...");
var tag_dataset = [];
var net = new brain.recurrent.LSTM();
var load = function (d) {
  tag_dataset = d.toString().split(";");
    net.train(tag_dataset, {
      iterations: 1000,
      errorThresh: 0.03,
      log: true,
      logPeriod: 1,
      learningRate: 0.2,
      momentum: 0.1,
      callback: null,
      callbackPeriod: 10,
      timeout: 1000*60,
    });
};
var say = function (x) {
  var y = net.run(x+"=>").toString().split("=>").join("");
  console.log(y);
  artyom.say(y);
};
var xhr = new XMLHttpRequest();
xhr.open("GET", "response-dataset");
xhr.addEventListener("load", function (x) {
    console.log("Loaded file...");
    load(this.responseText);
});
xhr.send();
