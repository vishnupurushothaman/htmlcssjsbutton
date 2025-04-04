// Select the subscribe button and notification button
const subscribeButton = document.getElementById('subscribeButton');
const notificationButton = document.getElementById('notificationButton');

// Add click event listener to the subscribe button
subscribeButton.addEventListener('click', () => {
    alert('You clicked the Subscribe button!');
});

// Add click event listener to the notification button
notificationButton.addEventListener('click', () => {
    alert('You clicked the Notification button!');
});
// Add hover event listeners to the subscribe button
subscribeButton.addEventListener('mouseover', () => {
    subscribeButton.style.backgroundColor = 'lightblue'; // Change background color on hover
});

subscribeButton.addEventListener('mouseout', () => {
    subscribeButton.style.backgroundColor = ''; // Revert background color when mouse leaves
});

// Add hover event listeners to the notification button
notificationButton.addEventListener('mouseover', () => {
    notificationButton.style.backgroundColor = 'lightgreen';
});



