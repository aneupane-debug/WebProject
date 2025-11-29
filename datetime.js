// datetime.js - Tutorial 9: Date and Time Functionality
// JavaScript for dynamic date/time display

function updateDateTime() {
    const now = new Date();
    
    // Format the date and time
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    
    // Update main datetime display
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = formattedDateTime;
        datetimeElement.classList.add('datetime-updated');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            datetimeElement.classList.remove('datetime-updated');
        }, 500);
    }
    
    // Update footer date
    const footerDateElement = document.getElementById('footer-date');
    if (footerDateElement) {
        const footerOptions = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        };
        footerDateElement.textContent = `Last updated: ${now.toLocaleDateString('en-US', footerOptions)}`;
    }
}

// Update date/time immediately when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    
    // Update the time every second for real-time clock
    setInterval(updateDateTime, 1000);
});

// Additional function to get time in different formats
function getTimeIn12HourFormat(date) {
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });
}

function getTimeIn24HourFormat(date) {
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });
}

// Export functions for potential future use
window.updateDateTime = updateDateTime;
window.getTimeIn12HourFormat = getTimeIn12HourFormat;
window.getTimeIn24HourFormat = getTimeIn24HourFormat;