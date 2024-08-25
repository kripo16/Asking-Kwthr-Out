document.addEventListener("DOMContentLoaded", function() {
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const message3 = document.getElementById("message3");
    const message4 = document.getElementById("message4");
    const message5 = document.getElementById("message5");
    const message6 = document.getElementById("message6");
    const message7 = document.getElementById("message7");
    const btn = document.getElementById("btn");
    const parentheses = document.getElementById("parentheses");
    const heart = document.getElementById("heart")

    btn.addEventListener('click', () => {
        heart.style.animation = "pulse 1.5s ease-in-out infinite, explode 1.5s ease-in-out forwards";
    })

    // Show first message after 1 second
    setTimeout(() => {
        message1.style.display = "block";
        message1.style.animation = "fadeIn 1s forwards";
    }, 1000); // 1 second delay

    // Transition to the second message after 3 seconds
    setTimeout(() => {
        message1.style.display = "none";
        message2.style.display = "block";
        message2.style.animation = "fadeIn 2s forwards";
    }, 4000); // 3 seconds after message1 appears

    // Rotate parenthesis after message2 appears
    setTimeout(() => {
        parentheses.classList.add("rotate");
        // Set the text content to '(' after the rotation is done// Delay to match animation duration
    }, 6000); // 2 seconds after message2 appears

    // Show the typing animation and the next message
    setTimeout(() => {
        message3.style.display = "block";
        message3.style.animation = "fadeIn 2s forwards";
    }, 8000); // 2 seconds after parenthesis rotation

    // Replace the typing animation text and fade out
    setTimeout(() => {
        message2.style.display = "none";
        message3.style.display = "none";
        message4.style.display = "block";
        message4.style.animation = "fadeIn 2s forwards";
    }, 12000); // 3 seconds after typing animation

    // Show message5 after message4
    setTimeout(() => {
        message4.style.display = "none";
        message5.style.display = "block";
        message5.style.animation = "fadeIn 2s forwards";
        setTimeout(() => {
            heart.style.display = "block";
            heart.style.animation = "fadeIn 2s forwards";
        }, 1500);
        

    }, 15000); // 3 seconds after message4

    // Show message6 (KWTHR) with colored text
    setTimeout(() => {
        message5.style.display = "none";
        message6.style.display = "block";
        message6.style.animation = "fadeIn 2s forwards";
    }, 18000); // 3 seconds after message5

    // Show typing animation and button
    setTimeout(() => {
        message7.style.display = "block";
        message7.style.animation = "fadeIn 2s forwards";
        setTimeout(() => {
            btn.style.display = "inline-block";
            btn.style.animation = "fadeIn 1s forwards";
        }, 1000); // 1 second after message7 appears
    }, 21000); // 3 seconds after message6
});
