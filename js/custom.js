$('#first, #second, #third, #fourth, #fifth, #sixth').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#branding').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    responsive:{
        0:{
            items:8
        },
        600:{
            items:8
        },
        1000:{
            items:8
        }
    }
});


// For Latest Project 
$('#prFirst, #prSecond, #prThird, #prFour, #prFive, #prSix, #prSeven, #prEight').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
          },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})