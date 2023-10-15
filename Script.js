document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM is fully loaded

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the user's email input
        const email = document.querySelector('input[name="email"]').value;

        // Validate the email (you might want to add more robust validation)
        if (email && email.includes('@')) {
            // Open YouTube subscription page in a new tab
            window.open(`https://www.youtube.com/subscribe_widget?p=YOUR_CHANNEL_ID`, '_blank');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
