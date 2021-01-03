$(document).ready(function() {
  var random = Math.floor(Math.random() * 100 + 1);

  // random number b/w 1-100
  //
  $("#randomNumber").text(random);
  // Append random number
  //
  var num1 = Math.floor(Math.random() * 15 + 1);
  var num2 = Math.floor(Math.random() * 15 + 1);
  var num3 = Math.floor(Math.random() * 15 + 1);
  var num4 = Math.floor(Math.random() * 15 + 1);

  // random numbers for each crystal

  //
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  //reset game
  function reset() {
    random = Math.floor(Math.random() * 100 + 1);
    
    $("#randomNumber").text(random);
    num1 = Math.floor(Math.random() * 15 + 1);
    num2 = Math.floor(Math.random() * 15 + 1);
    num3 = Math.floor(Math.random() * 15 + 1);
    num4 = Math.floor(Math.random() * 15 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }
  //add wins/losses to the userTotal
  function yay() {
    alert("You win!");
    wins++;
    $("#numberWins").text(wins);
    reset();
  }

  function loser() {
    alert("Lame...you should have done better...");
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }
  //crystals
  $("#one").on("click", function() {
    userTotal = userTotal + num1;
    
    $("#finalTotal").text(userTotal);
    //win/lose
    if (userTotal == random) {
      yay();
    } else if (userTotal > random) {
      loser();
    }
  });
  $("#two").on("click", function() {
    userTotal = userTotal + num2;
    
    $("#finalTotal").text(userTotal);
    if (userTotal == random) {
      yay();
    } else if (userTotal > random) {
      loser();
    }
  });
  $("#three").on("click", function() {
    userTotal = userTotal + num3;
    
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      yay();
    } else if (userTotal > random) {
      loser();
    }
  });

  $("#four").on("click", function() {
    userTotal = userTotal + num4;
   
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      yay();
    } else if (userTotal > random) {
      loser();
    }
  });
});
