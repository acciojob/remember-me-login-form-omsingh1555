//your JS code here. If required.
// Get DOM elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Check if credentials exist in localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
  }
});

// Handle form submission
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Show/hide existing user button based on stored credentials
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
  } else {
    existingBtn.style.display = 'none';
  }
});

// Handle existing user login
existingBtn.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
