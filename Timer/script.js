( function( $ ) {

    // Load parameters from JSON file
    fetch('../customize.json')
        .then(response => response.json())
        .then(parameters => {

            // Ubah judul halaman
            document.title = parameters.title;

            // Ubah konten elemen <h1>
            document.querySelector("h1.text-center").textContent = parameters.h1Text;

            // Set the date we're counting down to
            var countDownDate = new Date(parameters.countDownDate);

            // Array of month names
            var monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];

            // Update the count down every 1 second
            var x = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate.getTime() - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Format the date
                var formattedDate = countDownDate.getDate() + ' ' + monthNames[countDownDate.getMonth()] + ' ' + countDownDate.getFullYear();

                // Update the event date text
                document.getElementById("event-date").innerHTML = formattedDate;

                // Display the result in the element with id=""
                document.getElementById("countdowndays").innerHTML = '<div class="cd-num">' + days + '</div> DAYS';
                document.getElementById("countdownhours").innerHTML = '<div class="cd-num">' + hours + '</div> HRS';
                document.getElementById("countdownmins").innerHTML = '<div class="cd-num">' + minutes + '</div> MINS';
                document.getElementById("countdownsecs").innerHTML = '<div class="cd-num">' + seconds + '</div> SECS';

                // If the count down is finished, hide the containing div
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown").style.display = "none";
                    window.location.href = "../index.html";
                }
            }, 1000);
        });

} )( jQuery );
