// Function to switch between tabs
function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active-content');
    });

    // Remove the 'active' class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content and add 'active' class to the clicked tab button
    document.getElementById(tabName).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// Function to toggle the dropdown visibility
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function() {
            // Toggle the display of dropdown content
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });

        // Close the dropdown if the user clicks outside of it
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});

// Function to handle "Match me a ride" button click
document.querySelectorAll('.match-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Matching you with a ride...');
    });
});

// Function to handle circle actions buttons (Add Circle / Join Circle)
document.querySelectorAll('.circle-button').forEach(button => {
    button.addEventListener('click', function() {
        const action = button.classList.contains('add-circle') ? 'add' : 'join';
        alert(`You clicked to ${action} a circle.`);
    });
});
