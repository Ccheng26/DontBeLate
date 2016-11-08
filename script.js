$(document).ready(function() {
  console.log('script loaded');
  //images coming from pixabay or labeled for reuse from google search
  //initially hide eveything on instruction page aside from start button
  $('#navRight').hide();
  $('#navLeft').hide();
  $('#start').on('click', function() {
      $('.instructions').remove();
      $('#navLeft').show();
    });
    //put each item in an array
  var items = [
    ['cellphone', $('#cellphone'), 100],
    ['keys', $('#keys'), 100],
    ['metrocard', $('#metrocard'), 100],
    ['money', $('#money'), 50],
    ['wallet', $('#wallet'), 100]
  ];
  //put each hiding place in an array
  var hider = [
    ['plant', $('#itemContainer1')],
    ['laundry', $('#itemContainer2')],
    ['luggage', $('#itemContainer3')],
    ['ottomon', $('#itemContainer4')],
    ['fridge', $('#itemContainer5')]
  ];
  var $hideItems = function() {
    //picks random item from items array
    var $randomItem = items[Math.floor(Math.random() * items.length)];
    return $randomItem;
  }
  var $hidePlace = function() {
    //picks location item from hider array
    var $randomHide = hider[Math.floor(Math.random() * hider.length)];
    return $randomHide;
  }
  var $randomPlace = $hidePlace();
  var $hidingPlace = $randomPlace[1];
    //function to hide the items; will append
  for (var i = 0; i < items.length; i++) {
    var hideSpot = $hidePlace();
    hideSpot[1].append(items[i][1]);
    $('.items').hide();
  }
  //showItems will show the hidden items when clicking on the correct container that hides them; this will also move the containers slightly so the user won't have to constantly click on them to find more items
  var showItems = function() {
    //attempted to shorten code, did not function properly
    // for (var j = 0; j > hider.length; j++) {
    //   $(this).on('click', function() {
    //   if ($(this.items).css('display') == 'none') {
    //     $($(this).on('click', function () {
    //       $(this.items).show();}))}})}}
    // ^attempt to shorten code, did not work properly afterwards
    $('#itemContainer1').css('overflow', 'hidden');
    $('#itemContainer1').on('click', function() {
      if ($('#itemContainer1').css('overflow') == 'hidden') {
        $('#itemContainer1').on('click', function() {
          $('#itemContainer1').css('left', '82%');
          $('#itemContainer1 .items').show();
          $('#itemContainer1 .items').css({'top': '80%', 'right': '21%'});
        })
      }
    })
    $('#itemContainer2').css('overflow', 'hidden');
    $('#itemContainer2').on('click', function() {
      if ($('#itemContainer2').css('overflow') == 'hidden') {
        $('#itemContainer2').on('click', function() {
          $('#itemContainer2').css('bottom', '25%');
          $('#itemContainer2 .items').show();
          $('#itemContainer2 .items').css('top', '65%');
        })
      }
    })
    $('#itemContainer3').css('overflow', 'hidden');
    $('#itemContainer3').on('click', function() {
      if ($('#itemContainer3').css('overflow') == 'hidden') {
        $('#itemContainer3').on('click', function() {
          $('#itemContainer3').css('left', '25%');
          $('#itemContainer3 .items').show();
          $('#itemContainer3 .items').css('top', '70%');
        })
      }
    })
    $('#itemContainer4').css('overflow', 'hidden');
    $('#itemContainer4').on('click', function() {
      if ($('#itemContainer4').css('overflow') == 'hidden') {
        $('#itemContainer4').on('click', function() {
          $('#itemContainer4').css('left', '63%');
          $('#itemContainer4 .items').show();
          $('#itemContainer4 .items').css('top', '65%');
        })
      }
    })
    $('#itemContainer5').css('overflow', 'hidden');
    $('#itemContainer5').on('click', function() {
      if ($('#itemContainer5').css('overflow') == 'hidden') {
        $('#itemContainer5').on('click', function() {
          $('#itemContainer5').css('left', '80%')
          $('#itemContainer5 .items').show();
          $('#itemContainer5 .items').css('top', '75%');
        })
      }
    })
  }
  showItems();
    //hides inventory bag
  $('.bagInv').hide();
    //when you click on inventory bag, item slots are displayed
  $('.bag').on('click', function() {
      $('.bagInv').show();
      $('.bag').css({'left': '20%', 'bottom': '3%'});
      $('.bagInv').append($('.bag'));
    })
    // checks if the user has collected all the items via amount of class length 'found', if so winning statement is displayed
  function allItemsCollected() {
    if ($('.found').length == 5) {
      alert("You've collected all the items! Now get to the train!");
        //stops the counter from going down further after you lose
      clearInterval(countDown);
    }
  }
  //if statements to check if inventory slots are available, if not return alert
  // for(var i = 0; i < $('.items').length; i++){
  //   $('.items')[i].click(function () {
  //   if($(".bagInv").css("display") !== "block") {
  //     alert("Can't carry item, find a bag!")}
  //   else {$('#iSlot'+(i+1)).append($('.items')[i])
  //         $('#iSlot'+(i+1)).addClass('found');
  //         allItemsCollected()}
  //         })
  //   $('.items').hide()
  // }
  // ^attempt to shorten code, did not work properly afterwards
  // these click functions will add the items to designated inventory slots if there is a bag present, if not then an alert telling the user to find a bag will display;
  //items that are clicked if there is a bag present will be added to inventory slot via the .append() method and will also be given a class found; if all the items are found, the winning statement will appear
  $('#cellphone').click(function() {
    if ($(".bagInv").css("display") !== "block") {
      alert("Can't carry item, find a bag!");
    } else {
      $('#iSlot1').append($('#cellphone'));
      $('#cellphone').css({'top': '', 'right': ''});
      $('#iSlot1').addClass('found');
      allItemsCollected()
    }
  })
  $('#wallet').click(function() {
    if ($(".bagInv").css("display") !== "block") {
      alert("Can't carry item, find a bag!");
    } else {
      $('#iSlot2').append($('#wallet'))
      $('#wallet').css({'top': '', 'right': ''});
      $('#iSlot2').addClass('found');
      allItemsCollected();
    };
  });
  $('#keys').click(function() {
    if ($(".bagInv").css("display") !== "block") {
      alert("Can't carry item, find a bag!");
    } else {
      $('#iSlot3').append($('#keys'));
      $('#keys').css({'top': '', 'right': ''});
      $('#iSlot3').addClass('found');
      allItemsCollected();
    };
  });
  $('#metrocard').click(function() {
    if ($(".bagInv").css("display") !== "block") {
      alert("Can't carry item, find a bag!");
    } else {
      $('#iSlot4').append($('#metrocard'));
      $('#metrocard').css({'top': '', 'right': ''});
      $('#iSlot4').addClass('found');
      allItemsCollected()
    };
  });
  $('#money').click(function() {
      if ($(".bagInv").css("display") !== "block") {
        alert("Can't carry item, find a bag!");
      } else {
        $('#iSlot5').append($('#money'));
        $('#money').css({'top': '', 'right': ''});
        $('#iSlot5').addClass('found');
        allItemsCollected()
      };
    });
    //navigation functions with click event listener
    //will hide the living room if the right arrow is clicked; and will show the left arrow, hiding the right arrow
  $('#navRight').on('click', function() {
    $('.bedroom').show();
    $('.livingroom').hide();
    $('#navRight').hide();
    $('#navLeft').show();
  });
  //will hide the bedroom if the left arrow is clicked; and will show the right arrow, hiding the left arrow
  $('#navLeft').on('click', function() {
    $('.livingroom').show();
    $('.bedroom').hide();
    $('#navLeft').hide();
    $('#navRight').show();
  });
  // visible timer
  var sec = 59;
  var min = 1;
    //setInterval function to get the timer working every second
  var countDown = setInterval(function() {
      //function to display seconds and minutes remaining
      var minDisplay = $('#minutes').html(min);
      var secDisplay = $('#seconds').html(':' + sec);
        //this function will start after the start button disappears; checking for element solution from stackoverflow http://stackoverflow.com/questions/31044/is-there-an-exists-function-for-jquery
      if ($('#start').length == 0) {
        $('#seconds').html(':' + (sec -= 1));
          //each second will decrease by 1 when when this function is called
        if (sec < 0) { //when the second variable gets below 0, it will start over at 59 seconds and subtract a minute
          $('#seconds').html(':' + (sec = 59));
          $('#minutes').html(min -= 1);
        };
      };
      //function to check the loser called when timer reaches 0 on seconds and minutes; will call the function, you lose
      if (sec == 0 && min == 0) {
        youLose();
      }
    }, 1000);
    // checks if all items are found when the second and minute counter reach 0
  function youLose() {
    if ($('.found').length == !5) {
      alert("You've ran out of time! Better start looking for another job...");
      sec = 0;
      min = 0;
      //stops the counter from going down further after you lose
      clearInterval(countDown)
    };
  };
  //Additional thanks to Marcos Wade and Bairon Vasquez for help utilizing setInterval to call decrementing function properly

});
