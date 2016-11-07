$(document).ready(function() {

  console.log('script loaded');


// $('#workPaper1').on('click', function () {
//   append('')
// })
// $('#workPaper2').on('click', function () {
//   append('.bag')
// })
// $('#workPaper3').on('click', function () {
//   append('.bag')
// })

//images coming from pixabay or labeled for reuse from google search
//put each item in an array

$('#navRight').hide()
$('#navLeft').hide()
$('#start').on('click', function() {
  $('.instructions').remove();
  $('#navLeft').show();
})

var items = [
  ['cellphone', $('#cellphone'), 100],
  ['keys', $('#keys'), 100],
  ['metrocard', $('#metrocard'), 100],
  ['money',$('#money'), 50],
  ['wallet',$('#wallet'),100]
];
//put each hiding place in an array
var hider = [['plant', $('#itemContainer1')],
['laundry', $('#itemContainer2')],
['luggage', $('#itemContainer3')],
['ottomon', $('#itemContainer4')],
['fridge', $('#itemContainer5')]
// ,['', $('#itemContainer6')]
];

var $hideItems = function(){
  //picks random item from items array.
    var $randomItem= items[Math.floor(Math.random()*items.length)];
    return $randomItem;
  }
var $hidePlace = function() {
  //picks location item from hider array.
    var $randomHide= hider[Math.floor(Math.random()*hider.length)];
    return $randomHide;
  }

 var $scramble= $hideItems()
 var $itemName= $scramble[0]
 var $itemLocation = $scramble[1];
 var $itemPriority = $scramble[2];
 var $randomPlace = $hidePlace()
 var $hidingPlace= $randomPlace[1]


for (var i = 0; i < items.length; i++) {
  var hideSpot = $hidePlace();
  hideSpot[1].append(items[i][1])
  $('.items').hide()
}

var disappearItems= function() {
  //attempted to shorten code, did not function properly
  // for (var j = 0; j > hider.length; j++) {
  //   $(this).on('click', function() {
  //   if ($(this.items).css('display') == 'none') {
  //     $($(this).on('click', function () {
  //       $(this.items).show();}))}})}}

$('#itemContainer1').css('overflow','hidden');
  $('#itemContainer1').on('click', function() {
    if ($('#itemContainer1').css('overflow') == 'hidden') {
      $('#itemContainer1').on('click', function () {
        $('#itemContainer1').css('left', '82%');
        $('#itemContainer1 .items').show();
        }
      )}
  })
$('#itemContainer2').css('overflow','hidden');
  $('#itemContainer2').on('click', function() {
    if ($('#itemContainer2').css('overflow') == 'hidden') {
      $('#itemContainer2').on('click', function () {
        $('#itemContainer2 .items').show();}
      )}
  })
$('#itemContainer3').css('overflow','hidden');
  $('#itemContainer3').on('click', function() {
    if ($('#itemContainer3').css('overflow') == 'hidden') {
      $('#itemContainer3').on('click', function () {
        $('#itemContainer3 .items').show();}
      )}
  })
$('#itemContainer4').css('overflow','hidden');
  $('#itemContainer4').on('click', function() {
    if ($('#itemContainer4').css('overflow') == 'hidden') {
      $('#itemContainer4').on('click', function () {
        $('#itemContainer4 .items').show();}
      )}
  })
$('#itemContainer5').css('overflow','hidden');
  $('#itemContainer5').on('click', function() {
    if ($('#itemContainer5').css('overflow') == 'hidden') {
      $('#itemContainer5').on('click', function () {
        $('#itemContainer5 .items').show();}
      )}
  })
}

disappearItems()

//hides inventory bag
$('.bagInv').hide()
//when you click on inventory bag, item slots are displayed
$('.bag').on('click', function() {
$('.bagInv').show();})


function allItemsCollected() {
  if ($('.found').length == 5) {
    alert("You've collected all the items! Now get to the train!")
  }
  else if (min ==0 && sec==0) {
      alert("You've ran out of time! Better start looking for another job...")
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
// attempted to shorten code, did not work properly afterwards
$('#cellphone').click(function () {
  if($(".bagInv").css("display") !== "block") {
    alert("Can't carry item, find a bag!")}
  else {$('#iSlot1').append($('#cellphone'))
        $('#iSlot1').addClass('found');
        allItemsCollected()}
        })
$('#wallet').click(function () {
  if($(".bagInv").css("display") !== "block") {
    alert("Can't carry item, find a bag!")}
  else {$('#iSlot2').append($('#wallet'))
    $('#iSlot2').addClass('found')
    allItemsCollected()}
    })
$('#keys').click(function () {
  if($(".bagInv").css("display") !== "block") {
    alert("Can't carry item, find a bag!")}
  else {$('#iSlot3').append($('#keys'))
        $('#iSlot3').addClass('found')
        allItemsCollected()}
        })
$('#metrocard').click(function () {
  if($(".bagInv").css("display") !== "block") {
    alert("Can't carry item, find a bag!")}
  else {$('#iSlot4').append($('#metrocard'))
        $('#iSlot4').addClass('found')
        allItemsCollected()}
        })
$('#money').click(function () {
  if($(".bagInv").css("display") !== "block") {
    alert("Can't carry item, find a bag!")}
  else {$('#iSlot5').append($('#money'))
        $('#iSlot5').addClass('found')
        allItemsCollected()}
        })


//Notes from Nick
//thingyToHide.css('visibility', 'hidden')
//thingyToShow.css('visibility', 'visible')
// ^css onclick switch visibility: visible and display: block; default should be visibility: hidden and display: none

//navigation

$('#navRight').on('click', function() {
  $('.bedroom').show();
  $('.livingroom').hide();
  $('#navRight').hide();
  $('#navLeft').show();
});

$('#navLeft').on('click', function() {
  $('.livingroom').show();
  $('.bedroom').hide();
  $('#navLeft').hide();
  $('#navRight').show();
});

// visible timer

var sec= 59
var min= 3
var countDown= setInterval(function () {
  var minDisplay= $('#minutes').html(min)
  var secDisplay= $('#seconds').html(sec)
  if ($('#start').length== 0){
  //checking for element solution from stackoverflow http://stackoverflow.com/questions/31044/is-there-an-exists-function-for-jquery
    $('#seconds').html(sec -= 1)
      if (sec < 0){
        $('#seconds').html(sec = 59)
        $('#minutes').html(min -= 1)
      }
    }
  if (sec===0 && min===0 ){
    youLose();
      }
    },1000)


function youLose() {
  if ($('.found').length ==! 5) {
      alert("You've ran out of time! Better start looking for another job...")
      sec = 0;
      min = 0;
      clearInterval(countDown)
    }

}

//Additional thanks to Marcos Wade for help utilizing setInterval to call decrementing function properly



});
