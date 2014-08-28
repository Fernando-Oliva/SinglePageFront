jQuery(function ($) {

    $("a.topopup").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup(); // function show popup
        }, 500); // .5 second
        return false;
    });

    /* event for close the popup */
    $("div.close").hover(
					function () {
					    $('span.ecs_tooltip').show();
					},
					function () {
					    $('span.ecs_tooltip').hide();
					}
				);

    $("div.close").click(function () {
        disablePopup();  // function close pop up
    });

    $(this).keyup(function (event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            disablePopup();  // function close pop up
        }
    });

    $("div#backgroundPopup").click(function () {
        disablePopup();  // function close pop up
    });


    $("a.topopup2").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup2(); // function show popup
        }, 500); // .5 second
        return false;
    });


    /* event for close the popup */
    $("div.close").hover(
					function () {
					    $('span.ecs_tooltip').show();
					},
					function () {
					    $('span.ecs_tooltip').hide();
					}
				);

    $("div.close").click(function () {
        disablePopup2();  // function close pop up
    });

    $(this).keyup(function (event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            disablePopup2();  // function close pop up
        }
    });

    $("div#backgroundPopup").click(function () {
        disablePopup2();  // function close pop up
    });


    $("a.topopup3").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup3(); // function show popup
        }, 500); // .5 second
        return false;
    });


    /* event for close the popup */
    $("div.close").hover(
					function () {
					    $('span.ecs_tooltip').show();
					},
					function () {
					    $('span.ecs_tooltip').hide();
					}
				);

    $("div.close").click(function () {
        disablePopup3();  // function close pop up
    });

    $(this).keyup(function (event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            disablePopup3();  // function close pop up
        }
    });

    $("div#backgroundPopup").click(function () {
        disablePopup3();  // function close pop up
    });


    $("a.topopup4").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup4(); // function show popup
        }, 500); // .5 second
        return false;
    });


    /* event for close the popup */
    $("div.close").hover(
					function () {
					    $('span.ecs_tooltip').show();
					},
					function () {
					    $('span.ecs_tooltip').hide();
					}
				);

    $("div.close").click(function () {
        disablePopup4();  // function close pop up
    });

    $(this).keyup(function (event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            disablePopup4();  // function close pop up
        }
    });

    $("div#backgroundPopup").click(function () {
        disablePopup4();  // function close pop up
    });

    /************** start: functions. **************/
    function loading() {
        $("div.loader").show();
    }
    function closeloading() {
        $("div.loader").fadeOut('normal');
    }

    var popupStatus = 0; // set value
    var popupStatus2 = 0;
    var popupStatus3 = 0;
    var popupStatus4 = 0;

    function loadPopup() {
        if (popupStatus == 0) { // if value is 0, show popup
            closeloading(); // fadeout loading
            $("#toPopup").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
            $("#backgroundPopup").fadeIn(0001);
            popupStatus = 1; // and set value to 1
        }
    }

    function disablePopup() {
        if (popupStatus == 1) { // if value is 1, close popup
            $("#toPopup").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus = 0;  // and set value to 0
        }
    }


    function loadPopup2() {
        if (popupStatus2 == 0) { // if value is 0, show popup
            closeloading(); // fadeout loading
            $("#toPopup2").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
            $("#backgroundPopup").fadeIn(0001);
            popupStatus2 = 1; // and set value to 1
        }
    }

    function disablePopup2() {
        if (popupStatus2 == 1) { // if value is 1, close popup
            $("#toPopup2").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus2 = 0;  // and set value to 0
        }
    }

    function loadPopup3() {
        if (popupStatus3 == 0) { // if value is 0, show popup
            closeloading(); // fadeout loading
            $("#toPopup3").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
            $("#backgroundPopup").fadeIn(0001);
            popupStatus3 = 1; // and set value to 1
        }
    }

    function disablePopup3() {
        if (popupStatus3 == 1) { // if value is 1, close popup
            $("#toPopup3").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus3 = 0;  // and set value to 0
        }
    }

    function loadPopup4() {
        if (popupStatus4 == 0) { // if value is 0, show popup
            closeloading(); // fadeout loading
            $("#toPopup4").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
            $("#backgroundPopup").fadeIn(0001);
            popupStatus4 = 1; // and set value to 1
        }
    }

    function disablePopup4() {
        if (popupStatus4 == 1) { // if value is 1, close popup
            $("#toPopup4").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus4 = 0;  // and set value to 0
        }
    }

    /************** end: functions. **************/
}); // jQuery End