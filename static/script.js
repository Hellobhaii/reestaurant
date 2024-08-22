// script.js
// modal form book a table
$(document).ready(function(){
    $('#bookTableModalButton').click(function(){
        $('#bookTableModal').modal('show');
    });

   // Add time validation
$('#bookTableForm').submit(function(event) {
    event.preventDefault();

    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var selectedTime = $('#bookingTime').val();
    var selectedHour = parseInt(selectedTime.split(':')[0]);
    var selectedMinute = parseInt(selectedTime.split(':')[1]);

    // Calculate the current time in minutes
    var currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Calculate the selected time in minutes
    var selectedTimeInMinutes = selectedHour * 60 + selectedMinute;

    // Check if the selected time is at least 15 minutes ahead of the current time
    if (selectedTimeInMinutes < currentTimeInMinutes + 15) {
        alert('Booking time must be at least 15 minutes ahead of the current time');
        return false;
    }

        // Check if the selected time has already passed for the same day
        if (selectedHour < currentHour || (selectedHour === currentHour && selectedMinute <= currentMinute)) {
            alert('Cannot book a table for a time that has already passed');
            return false;
        }

        // If all validations pass, submit the form
        $(this).submit();
    });
});
//same booking 
// $(document).ready(function() {
//     $('#bookTableModalButton').on('click', function() {
//         $.ajax({
//             type: 'POST',
//             url: '{% url "book_table" %}',
//             data: $('#book-table-form').serialize(),
//             dataType: 'json',
//             success: function(data) {
//                 if (data.error) {
//                     $('#error-message').html('<div class="alert alert-danger">' + data.error + '</div>');
//                 } else {
//                     $('#bookTableModal').modal('hide'); // Close the modal dialog
//                     $('#success-message').html('<div class="alert alert-success">Table booked successfully!</div>'); // Display a success message
//                 }
//             }
//         });
//     });
// });
   
  document.addEventListener('DOMContentLoaded', function(){

  });
// Swiper initialization

    "use strict";
    var swiperContainers = document.querySelectorAll('.swiper-container');
    swiperContainers.forEach(function (container) {
        var swiper = new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
        })
    })

//modal form book a table
$(document).ready(function(){
    $('#bookTableModalButton').click(function(){
        $('#bookTableModal').modal('show');
    });
});

// Back to top button
$(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
});


// Add smooth scrolling to anchor links
$("a[href^='#']").on("click", function(event) {
    var target = $(this.hash);
    if (target.length > 0) { // Check if the target element exists
        $("html, body").animate({
            scrollTop: target.offset().top - $(".navbar").height(),
        }, 300);
    }
});

// Show/hide Back to Top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".back-to-top").fadeIn();
    } else {
        $(".back-to-top").fadeOut();
    }
});

// Menu toggling
$(".menu-section h3 span.toggle-button").on("click", function () {
    $(this).toggleClass("active");
    $(this).parent().next(".menu-items").slideToggle();
});

// Hide video on all pages except home page
document.addEventListener('DOMContentLoaded', function() {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        var currentPage = window.location.pathname;
        if (currentPage !== '/') { // adjust the value to your home page URL
            videoContainer.classList.add('hidden');
        }
    }
});

// Hide video when scrolling down on home page
if (window.location.pathname === '/' && window.scrollY > 500) {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        videoContainer.classList.add('hidden');
    }
} else {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        videoContainer.classList.remove('hidden');
    }
}

// Remove hidden class when navigating to other pages
window.addEventListener('popstate', function() {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        var currentPage = window.location.pathname;
        if (currentPage !== '/') { // adjust the value to your home page URL
            videoContainer.classList.add('hidden');
        }
    }
});

// Show video when navigating back to home page
document.addEventListener('DOMContentLoaded', function() {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        var currentPage = window.location.pathname;
        if (currentPage === '/') { // adjust the value to your home page URL
            videoContainer.classList.remove('hidden');
        }
    }
});

// Show video when scrolling back up
window.addEventListener('scroll', function() {
    var videoContainer = document.getElementById('home');
    if (videoContainer) {
        if (window.scrollY < 500) { // adjust the value to your liking
            videoContainer.classList.remove('hidden');
        }
    }
});

// Add JavaScript to hide loading animation when page is loaded
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading").style.display = "none";
    }, 500);
});
