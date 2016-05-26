var glir = require('./gloo.glir.js');

function init_webgl(c) {
    // Get the DOM object, not the jQuery one.
    var canvas = c.$el.get(0);
    var extra_args = {preserveDrawingBuffer:true}
    c.gl = canvas.getContext("webgl", extra_args) ||
           canvas.getContext("experimental-webgl", extra_args);
}


/* Creation of vispy.gloo */
var gloo = function() {
    this.glir = glir;
    // Constructor.

};

gloo.prototype.init = function(c) {
    init_webgl(c);
    this.glir.init(c);
};


module.exports = new gloo();
