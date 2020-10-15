



(function($) {

    // $('#sandbox-container input').datepicker({
    //     language: "de"
    // });
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (modal.target == modal) {
    //     modal.style.display = "none";
    //   }
    // } 

  

    function hover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
      }
      
      function unhover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
      }
    
   
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
        }

        hidePreloader();
        var elems = document.querySelectorAll('.tap-target');

    });
    
    $( "#test" ).click(function() {
        eModal.iframe('questionary.html', 'Fragebogen Versicherungsvergleich')
        eModal.setEModalOptions({
            animation: false
        });

    }); 

    $( "#chatbotModal" ).click(function() {
        eModal.alert('Den Chatbot findest du unten Rechts :)');

    }); 




    $('#modalPoll-1').on('show.bs.modal', function () {
        $(this).find('.modal-body').css({
               width:'auto', //probably not needed
               height:'auto', //probably not needed 
               'max-height':'100%'
        });
 });

        $( "#sendForm" ).click(function() {
            
            var vimg;
            var html = '<div class="col-md-12">';
            html += '<div class="border-primary mb-3">';
            html += '<div class="row">';
            html += '<div class="col-md-4 userimg"> </div>';
            html += '<div class="col-md-8 px-5">';
            html += '<div class="card-block px-5">';
            html += '<h6 class="card-title"> </h6>';
           // html += '  <a class="btn btn-primary" href="www.google.de" id="butttonMore" role="Mehr">Link</a>   '
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

            if($("input[type='radio'].custom-control-input").is(':checked')) {
                var countTravel = $("input[type='radio'][name=countTravel]:checked").val();

            }

            if (countTravel === 'multipleTravel'){
                    countTravel = true;
            }
            else{
                    countTravel = false;
            }
            if($("input[type='radio'].custom-control-input").is(':checked')) {
                var region = $("input[type='radio'][name=region ]:checked").val();
            }
            var travelDays = $("#inputDays").val();
            var daysFormat = $('#daysformat option:selected').val();

            if (daysFormat === 'days'){
               travelDays*1;
            }

            else if (daysFormat === 'weeks'){
                travelDays = travelDays*7;
            }
            else if (daysFormat === 'months'){
                travelDays = travelDays*30;
            }


            var luggage = $('#luggage:checked').val();
            if (luggage !== undefined){
                luggage = 'mittel'
            }
            else{
                luggage =''
            }

            

            var financeLoss = $('#ruecktritt:checked').val();
            if (financeLoss !== undefined){
                financeLoss = 'mittel'
            }
            else{
                financeLoss = ''
            }
            var family = $('#group option:selected').val();
            if (family === 'True'){
                family = true;
            }
            else{
                family = false;
            }
            var myDate = $("#birthday").val();
        
           actualYear = new Date().getFullYear()
           myDate = actualYear - myDate;

            alert(countTravel + " " + region + "  " + travelDays + "  " + daysFormat + "  " + luggage + "  " + financeLoss + "  " + family +"   " + myDate);

   
$.ajax({
    method: "POST",
    url: "https://nodeserver-292320.nw.r.appspot.com/users",
    // The key needs to match your method's input parameter (case-sensitive).
    'data':JSON.stringify({"age":myDate,
    "luggage":luggage,
    "financeLoss":financeLoss,
    "group":family,
    "travelDays":travelDays,
    "moreTravel":countTravel
    }),
         dataType: "json",
    processData: false,
    contentType: 'application/json',
    success: function(data){
        for (var i = 0; i < data.length; i++) {
            $('#printcard').append(html);
          
            uimg = data[i].image_link;
            text = data[i].name;

            var $href = $("<href>='google.de");
            var $img = $("<img/>");
            $img.width('200px');
            $img.height('220px');
            $img.attr("src", "" + uimg);
            $(".userimg:eq("+i+")").append($img);
            $(".card-title:eq("+i+")").append(' <a class="btn btn-primary active"' +' href=" ' + uimg + '"' + 'target="_blank" id="butttonMore" role="Mehr">Weiter</a> ');
        
          }  

        console.log(data[0].image_link);
        console.log(data)
       
    },
  
});



          });

          $( "#closeForm" ).click(function() {
            
            $('#printcard').empty();


        });
          
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })

	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    
    /* Image Slider - Swiper */
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: false,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        spaceBetween: 30,
        slidesPerView: 5,
		breakpoints: {
            // when window is <= 380px
            380: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 516px
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window is <= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window is <= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        }
    });


    /* Image Slider - Magnific Popup */
	$('.popup-link').magnificPopup({
		removalDelay: 300,
		type: 'image',
		callbacks: {
			beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
			},
			beforeClose: function() {
				$('.mfp-figure').addClass('fadeOut');
			}
		},
		gallery:{
			enabled:true //enable gallery mode
		}
    });

    
    /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/', 
                    id: function(url) {        
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });


    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }



    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Back To Top Button */
    // create the back to top button
    // $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    // var amountScrolled = 700;
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > amountScrolled) {
    //         $('a.back-to-top').fadeIn('500');
    //     } else {
    //         $('a.back-to-top').fadeOut('500');
    //     }
    // });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
    });
    


})(jQuery);



