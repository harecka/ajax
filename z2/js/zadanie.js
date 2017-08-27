"use strict";

$(function() {

    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >=
            document.body.offsetHeight) {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                dataType: "json",
                succes: function (response) {

                },
                onerror: function (error) {

                }
            });

        }
    });
});