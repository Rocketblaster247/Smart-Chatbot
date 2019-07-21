var artyom = new Artyom();
artyom.say("Hmm...");
artyom.say("Welcome ... I am the future's world best chat bot ... Please develope me on git hub!");
var chatbot = function () {
  this.replace = [];
  this.functions = {};
  this.responses = [];
};
chatbot.prototype.addSub = function (/*replace*/ a, /* with */ b) {
  this.replace.push({a: a, b: b});
};
chatbot.prototype.addFunction = function (name, f) {
  this.functions[name] = f;
};
chatbot.prototype.ask = function () {
  
};
chatbot.prototype.addPhrase = function (que, response) {
  this.response.push({que: que, res: response});
};
chatbot.prototype.prepString = function (x) {
  x = x.toString();
  for (var i = 0; i < this.replace.length; i ++) {
    x = x.toString().split(this.replace[i].a).join(b);
  }
  var variables = {};
  x = x.toString().split(" ");
  return x;
};
chatbot.prototype.checkMatch = function (a, b) {
  
};
chatbot.prototype.setup = function (a) {
  
};
chatbot.prototype.getSetup = function (a) {
  
};
var sixla = new chatbot();
sixla.addSub(["He'll'"], "He will");
sixla.ask("Hello, He'll be with you shortly.");
