// Creates and returns a new dancer object that can step
var Dancer = class {

  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function() {
  var context = this;
  setTimeout(context.step, this.timeBetweenSteps);
};

