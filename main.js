$(document).ready(function () {
 
  $(".check1").css("backgroundColor", "gray");
  

  // CLICK on START

  $(".start").click(function () {
    event.preventDefault();

 // SORTABLE
 
    
    $(".box").sortable({
    connectWith: ".left_box,.right_box",
  });

    $(".start").prop("disabled", true);
    $(".check1").prop("disabled", false);
    $(".check1").css("backgroundColor", "red");
    $(".start").css("backgroundColor", "gray");

    // TIMER

    let sec = 60;
    let indexS = sec;
    let timerId = setInterval(function () {
      let s = indexS--;
      $(".min").text("00");
      $(".sec").text(`${s - 1}`);
      $("#timeS").text(`${s - 1}`);
      if (indexS < 10) {
        $(".min").text("00");
        $(".sec").text(`0${s - 1}`);
        $("#timeS").text(`0${s - 1}`);
      }
      if (indexS == 00) {
        clearInterval(timerId);
        $(".start").prop("disabled", false);
        $(".check1").prop("disabled", true);
        $(".check1").css("backgroundColor", "gray");
        $(".start").css("backgroundColor", "red");
        $(".min").text("01");
        $(".sec").text("00");
        $(".window").css("display", "block");
        $(".window").fadeIn(1000,'easeElastic');
        $("h2").text("It's a pity, but you lost");
        $("#timeM").text("");
        $("#timeS").text("");
        $("#points").text("");
        $(".check").css("display", "none");
      }
    }, 1000);
    console.log($(".sec").text());
    // CLICK on CHECK

    $(".check1").click(function () {
      event.preventDefault();
      //$(".window").css("display", "block");
      $(".window").fadeIn(500,'easeInQuart');
      $("#timeM").text("00");

      console.log($(".sec").text());
    });
    $(".close").click(function () {
    // $(".window").css("display", "none");
     $(".window").fadeOut(500);
     
    });
    $(".new").click(function () {
      event.preventDefault();
      $(".min").text("01");
      $(".sec").text("00");
      location.reload();
    });

    // ПЕРЕВІРКА ПРАВИЛЬНОСТІ СКЛАДЕННЯ ПАЗЛА

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let check = true;

    $(".check").click(function () {
      event.preventDefault();

      for (let n = 1; n < $(".box__item").length; n++) {
        if ($(".box__item").eq(n).text() != numbers[n]) {
          check = false;
          break;
        }
      }
      if (check) {
        $(".window").css("display", "block");
        $("h2").text("Woohoo, well done, you did it!");
        $("#timeM").text("");
        $("#timeS").text("");
        $("#points").text("");
        $(".check").css("display", "none");

        $(".new").click(function () {
          event.preventDefault();
          location.reload();
        });

        $(".close").click(function () {
          $(".window").css("display", "none");

          $(".start").prop("disabled", true);
          $(".check1").prop("disabled", true);
          $(".check1").css("backgroundColor", "gray");
          $(".start").css("backgroundColor", "gray");
        });
      } else {
        $(".window").css("display", "block");
        $("h2").text("It's a pity, but you lost");
        $("#timeM").text("");
        $("#timeS").text("");
        $("#points").text("");
        $(".check").css("display", "none");

        $(".new").click(function () {
          event.preventDefault();
          location.reload();
        });

        $(".close").click(function () {
          $(".window").css("display", "none");
          event.preventDefault();
          $(".start").prop("disabled", true);
          $(".check1").prop("disabled", true);
          $(".check1").css("backgroundColor", "gray");
          $(".start").css("backgroundColor", "gray");
        });
      }

      check = true;
      clearInterval(timerId);
      $(".min").text("01");
      $(".sec").text("00");

      $(".start").prop("disabled", false);
      $(".check1").prop("disabled", true);
      $(".check1").css("backgroundColor", "gray");
      $(".start").css("backgroundColor", "red");
    });
  });

  // CLICK on NEW

  $(".new").click(function () {
    event.preventDefault();

    for (i = 0; i < $(".box__item").length; i++) {
      $(".box__item")
        .eq(i)
        .css("order", `${Math.round(Math.random() * 5)}`);
    }

    $(".start").prop("disabled", false);
    $(".check1").prop("disabled", true);
    $(".check1").css("backgroundColor", "gray");
    $(".start").css("backgroundColor", "red");
    $(".min").text("01");
    $(".sec").text("00");
  });
});
