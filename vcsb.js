(function(){

    var root = this;
    
    var vcsb;
    if (typeof exports !== 'undefined') {
        vcsb = exports;
    }
    else {
        vcsb = root.vcsb = {};
    }
    
    var _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;
    
    var $ = root.jQuery || root.Zepto;
    
    if (typeof require !== 'undefined'){
         vcsb.data = require('data');
    }
    else {
        vcsb.data = $.ajax({
            url: "./data.json"
        }); 
    }

    var randomInt = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    vcsb.buildMsg = function(data, cb){
        var num1 = randomInt(0, data.cool.length-1);
        var num2 = randomInt(0, data.story.length-1);
        var num3 = randomInt(0, data.bro.length-1);
        
        cb(data.cool[num1] + " " + data.story[num2] + ", " + data.bro[num3]);
    };

    vcsb.getMsg = function(cb){
        if(typeof vcsb.data.done !== 'undefined'){
            vcsb.data.done(function(data){
                vcsb.buildMsg(data, cb);
            });
        }
        else{
            vcsb.buildMsg(vcsb.data, cb);
        }
    };

}).call(this);