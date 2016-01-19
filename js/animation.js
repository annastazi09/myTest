
$(document).ready(function () {
    $(".tabs_menu a").click(function (e) {
        e.preventDefault();
        $(".tabs_menu .active").removeClass("active");
        $(this).addClass("active");
        var tab = $(this).attr("href");
        $(".tab").not(tab).css({ "display": "none" });
        $(tab).fadeIn(400);
    });

    $("#button1").click(function () {
        $("#panel").toggle("fast");
    });

    if ($("#txt1").click(function () {
        $("#tab1").show();
        $("#tab2").hide();
        $("#tab3").hide();

    }));
    if (
        $("#txt2").click(function () {
            $("#tab2").show();
            $("#tab3").hide();
            $("#tab1").hide();


    }));
    if (
        $("#txt3").click(function () {
            $("#tab3").show();
            $("#tab2").hide();
            $("#tab1").hide();

    }));

    $("#box").hide();
    $("#list").click(function () {
        $("#box").toggle("fast");
    });
    $("#box1").hide();
    $("#list1").click(function () {
        $("#box1").toggle("fast");
    });
    $("#box2").hide();
    $("#list2").click(function () {
        $("#box2").toggle("fast");
    });

});