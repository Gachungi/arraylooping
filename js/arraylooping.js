//BUSINESS LOGIC
var countUp = function(countTo){
  var result = [];
  for(var i = 1; i <= countTo; i++){
      var index = result.indexOf(i);
      if(i % 15 === 0) {
        result.splice(index, 0);
        result.push('pingpong');
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
      }else if(i % 3 === 0) {
        result.splice(index, 0);
        result.push('ping');
      }else{
        result.push(i);
      }
  }

  return result;
};


$(document).ready(function(){
  $("#num").submit(function(event){
    $("#output").empty();
    var countTo = parseInt($("input#countTo").val());
    var output = countUp(countTo);

    output.forEach(function(item){
      $("#output").append('<li>' + item + '</li>');
    });
    event.preventDefault();
  });
});

//
// $(document).ready(function() {
//     $("form#divisible-number").submit(function(event) {
//       event.preventDefault();
//       var divisible = parseInt($("input#number").val());
//       var result = divisibleNumber(number);
//       $(".number").text(number);
//       if (!result){
//         $(".not").text("not");
//       }
//       else {
//         $(".not").text ("");
//       }
//
//       $("#result").show();
//     });
//   });
//
//
//
//   var divisibleNumber = function(number) {
//       if (number % 3 === 0);
//       // && (year % 100 !== 0) || (year % 400 === 0))
//       {
//         return true;
//       } else {
//         return false;
//       }
//     };
