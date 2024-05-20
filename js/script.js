/*$(selector/object/element).event(action value/parameter,
    function) */

/*Preloader */

$(window).on("load", function () { 
    // makes sure that whole site is loaded
    $('#status').fadeOut("slow");
    $('#preloader').delay(500).fadeOut("slow");
});

//Navigation show & hide
$(function (){

    showHideNav();

    $(window).scroll(function(){
        showHideNav();

    });

    function showHideNav(){
        //condition 
        if($(window).scrollTop() >640){
            //show white navigation
            $("nav").addClass("white-nav-top");       
        }
        else{
            $("nav").removeClass("white-nav-top")

        }
    }
   
});

//Smooth Scrolling
$(function(){
                        //when clicked
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        //Get section id ex. #About, #Update, #stat etc.
        var section_id= $(this).attr("href");
        $("html,body").animate({
                                //get current position  
            scrollTop: $(section_id).offset().top
        }, 1500);


    });

});

/*Responsive Tabs */

$(function(){
    $("#education-tabs").responsiveTabs({
        animation:'slide'
    });
}); 

/*Gallery*/
$(window).on('load',function(){
    //Initialize Isotope;
    $("#isotope-container").isotope({});
    //filter items on button click
    $("#isotope-filters").on('click','button', function(){
        //alert("You clicked filter button");
        //get filter value
                        /*this-attribute value*/
        var filterValue = $(this).attr('data-filter');

        //filter gallery
        $("#isotope-container").isotope({
            filter:filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        //When clicked
        $(this).addClass('active');
    });

});

/*Magnifier */
$(function(){
    $("#gal-wrapper").magnificPopup({
        delegate:'a',
        type:'image'
    })
});

/*jQUery Slider */

$(function(){
    $("#project-view").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
});

/*Counter:Stats*/
$(function(){
    $(".counter").counterUp({
        delay: 10, // delay per count up
        time:3000 //total duration
    });
});