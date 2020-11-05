$(document).ready(function (){

    var pricePowerTab = $(".price__power");
    var pricePowerItem = $(".cost");

    pricePowerTab.on("click", function (event) {
        var activePowerTab = $(this).attr("data-target");
        pricePowerTab.removeClass("price__power_active");
        pricePowerItem.removeClass("cost_active");
        $(activePowerTab).addClass("cost_active");
        $(this).addClass("price__power_active");
        
    });


    // form validation

    // $('.form').each(function (){
    //     $(this).validate({
    //      errorClass: "invalid",
    //      messages: {
    //         name: {
    //             required: "Это обязятаельное поле!",
    //             minlength: "Name must be at least 2 characters",
    //         } ,
    //         email: {
    //             required: "Email is required",
    //             email: "Format: name@domain.com"
    //         },
    //         phone: {

    //             required: "Это обязательное поле!",
    //             minlength: "Phone must be at least 10 characters",
    //         }
    //     }
    // });
    // })
   $('.phone_us').mask('+7 999 999-99-99');




});