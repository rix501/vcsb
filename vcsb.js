var randomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var vcsb = function(data){
    var num1 = randomInt(0, data.cool.length-1);
    var num2 = randomInt(0, data.story.length-1);
    var num3 = randomInt(0, data.bro.length-1);
    
    $("#theStory").html(data.cool[num1] + " " + data.story[num2] + ", " + data.bro[num3]);
};

$(function() {
    $.ajax({
        url: "./parts.json",
        success: vcsb
    });
});