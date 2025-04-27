// Social Proof Widget
const socialProofMessages = [
  { name: "John Doe From Canada", action: "signed up", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 5) }, // 5 minutes ago
  { name: "Esther Madu From Nigeria", action: "subscribed to the monthly", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 30) }, // 30 minutes ago
  { name: "Mike Johnson From South Africa", action: "purchased a weekly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 2) }, // 2 hours ago
  { name: "Sarah Lee From Malaysia", action: "joined the platform", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24) }, // 1 day ago
  { name: "Ademola Seun From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) }, // 3 days ago
  { name: "Collins Kings From Finland", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) }, // 1 week ago
  { name: "MEZIDON From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14) }, // 2 weeks ago
  { name: "Arinze Samuel From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) }, // 1 month ago
  { name: "Asa Amara From UK", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60) }, // 2 months ago
  { name: "Mbada From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90) }, // 3 months ago
  { name: "Rankur From India", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 180) }, // 6 months ago
  { name: "Royce From Singapore", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`, date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365) }, // 1 year ago
];

const socialProofWidget = document.getElementById('social-proof-widget');
const socialProofContainer = document.getElementById('social-proof-message-container');
const closeWidgetButton = document.querySelector('.close-widget');

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * socialProofMessages.length);
  return socialProofMessages[randomIndex];
}

function formatTimestamp(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return "Just now";
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks === 1 ? '' : 's'} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
}

function showSocialProofMessage() {
  const message = getRandomMessage();
  const timestamp = formatTimestamp(message.date);

  const messageElement = document.createElement('div');
  messageElement.classList.add('social-proof-message');

  messageElement.innerHTML = `
    <img src="${message.avatar}" alt="${message.name}">
    <div class="message-content">
      <p><strong>${message.name}</strong> ${message.action}.</p>
      <span class="timestamp">${timestamp}</span>
    </div>
  `;

  // Append the message to the container
  socialProofContainer.innerHTML = ''; // Clear previous message
  socialProofContainer.appendChild(messageElement);

  // Trigger the slide-in animation
  socialProofWidget.style.animation = 'slideIn 0.5s forwards';

  // After 5 seconds, trigger the slide-out animation
  setTimeout(() => {
    socialProofWidget.style.animation = 'slideOut 0.5s forwards';
  }, 5000);
}

// Start the social proof simulation
setInterval(showSocialProofMessage, 10000); // Show a new message every 10 seconds

// Close widget functionality
closeWidgetButton.addEventListener('click', () => {
  socialProofWidget.style.animation = 'slideOut 0.5s forwards';
});

// Show the first message immediately
showSocialProofMessage();