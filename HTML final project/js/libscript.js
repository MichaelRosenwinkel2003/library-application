
$(document).ready(function() {
    console.log("jQuery is working!"); // Debugging: Check if jQuery is loaded.

    // Initially hide all hidden text
    $(".hidden-text").hide();

    // Show text on hover
    $(".carousel-item img").on("mouseover", function() {
        $(this).siblings(".hidden-text").fadeIn(300);
        console.log("Mouse entered image, showing text.");
    });

    // Hide text when mouse leaves
    $(".carousel-item img").on("mouseout", function() {
        $(this).siblings(".hidden-text").fadeOut(300);
        console.log("Mouse left image, hiding text.");
    });
});