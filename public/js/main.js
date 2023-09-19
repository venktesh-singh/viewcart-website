
jQuery(function($) {
  $('.box-title>h5').on('click', function() {
    var $el = $(this),
      textNode = this.lastChild,
      $img = $el.find('span>img');

    if ($img.hasClass('plus-img')) {
      $img.attr('src', 'images/mins-icon.png');
    } else {
      $img.attr('src', 'images/plus-icon.png');
    }

    $img.toggleClass('plus-img mins-img');

    textNode.nodeValue = ' Gimme ' + ($el.hasClass('showFire') ? 'Fire' : 'Water');
    $el.toggleClass('showFire');
  });
});




function fileValue(input) {
  var path = input.value;
  var extension = path.split('.').pop().toLowerCase(); 
  var allowedExtensions = ["jpg", "svg", "jpeg", "png", "gif"];
  
  if (allowedExtensions.includes(extension)) {
    var fileURL = URL.createObjectURL(input.files[0]);
    document.getElementById('file-image-preview').src = fileURL;
    
    var filename = path.split('\\').pop().split('.').slice(0, -1).join('.');
    document.getElementById("filename").textContent = filename;
  } else {
    alert("File not supported. Please upload an image with one of the following extensions: jpg, svg, jpeg, png, gif");
  }
}


function readUrl(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgData = e.target.result;
      const imgName = input.files[0].name;
      input.dataset.title = imgName; // Use dataset for data attributes
      console.log(e.target.result);
      $('#preview').html(`<img src="${e.target.result}" />`);
    };
    reader.readAsDataURL(input.files[0]);
  }
}



/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function () {
  var $this = $(this);
  var numberOfOptions = $this.children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }
});


$(document).ready(function () {
  $('select').each(function () {
    var $this = $(this);
    var numberOfOptions = $this.children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }
    
    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
});


// Select all range slider input elements and the progress element
const range = document.querySelectorAll(".range-slider span input");
const progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

// Handle input event for each range slider
range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(range[0].value);
    let maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
      inputValue[0].value = minRange;
      inputValue[1].value = maxRange;
    }
  });
});

// Using an IIFE to handle button click event
(function () {
  $("#account-btn").on("click", function () {
    $("#mobile-show").slideToggle("2000");
  });
})();


// Toggle button click event
$('#toggle').click(function() {
  $(this).toggleClass('active'); // Toggle 'active' class on the button
  $('#overlay').toggleClass('open'); // Toggle 'open' class on the overlay element
});

// Close sidebar click event
$('.closesidebar').click(function() {
  $('.sideheader').removeClass('open'); // Remove 'open' class from the sidebar element
});




jQuery(function($){
  // Handle menu open button click event
  $('.js-menu__open').on('touchend click', function(){
    var menu = $(this).attr('data-menu');

    $(menu).toggleClass('js-menu__expanded'); // Toggle 'js-menu__expanded' class on the menu
    $(menu).parent().toggleClass('js-menu__expanded'); // Toggle 'js-menu__expanded' class on the menu's parent
  });

  // Handle context and close button click event
  $('.js-menu__context, .js-menu__close').on('touchend click', function(event){
    if ($(event.target).hasClass('js-menu__context') || $(event.target).hasClass('js-menu__close')) {
      $('.js-menu__expanded').removeClass('js-menu__expanded'); // Remove 'js-menu__expanded' class from expanded menus
    }
  });
});





// Increment button click event
$('.add').click(function () {
  if ($(this).prev().val() < 10) {
    $(this).prev().val(+$(this).prev().val() + 1);
  }
});

// Decrement button click event
$('.sub').click(function () {
  if ($(this).next().val() > 1) {
    $(this).next().val(+$(this).next().val() - 1);
  }
});

// Button click event to toggle class
$(document).ready(function () {
  $("#account-btn").click(function () {
    if ($("#dashbordlinks").hasClass("for_mobile_link")) {
      $("#dashbordlinks").removeClass("for_mobile_link");
    } else {
      $("#dashbordlinks").addClass("for_mobile_link");
    }
  });
});


// Main/Product image slider for product page
$('#detail .main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  autoplay: false,
  autoplaySpeed: 8000,
  speed: 900,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav',
  prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'
});

// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: false,
  draggable: true,
  speed: 2000,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'
});



// Keeps thumbnails active when changing main image
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  // Remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  // Set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});




var shownDefault = 5;
var numShown = shownDefault; // Initial rows shown & index
var $table = $('.tbl').find('tbody'); // tbody containing all the rows
var numRows = $table.find('tr').length; // Total # rows

var moretext = "Show more";
var lesstext = "Show less";

$(document).ready(function () {
  $table.find('tr:gt(' + (numShown - 1) + ')').hide();

  $('#btn').click(function () {
    if (numShown === numRows) {
      // Show more button behavior when all rows are shown
      numShown = shownDefault;
      $table.find('tr:gt(' + (numShown - 1) + ')').hide();
      $('#btn').text(moretext);
    } else {
      // Show more button behavior when not all rows are shown
      numShown = numRows;
      $('#btn').text(lesstext);
    }

    $table.find('tr:lt(' + numShown + ')').show();
  });
});
