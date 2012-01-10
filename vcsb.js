(function(){

    var root = this;
    
    var Vcsb;
    if (typeof exports !== 'undefined') {
        Vcsb = exports;
    }
    else {
        Vcsb = root.Vcsb = {};
    }
    
    var _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;
    
    var $ = root.jQuery || root.Zepto;

    var randomInt = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    Vcsb.getMsg = function(cb){
        $.ajax({
            url: "./parts.json",
            success: function(data){
                var num1 = randomInt(0, data.cool.length-1);
                var num2 = randomInt(0, data.story.length-1);
                var num3 = randomInt(0, data.bro.length-1);
                cb(data.cool[num1] + " " + data.story[num2] + ", " + data.bro[num3]);
            }
        });    
    };

}).call(this);