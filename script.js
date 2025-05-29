const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

// Sign Up: Save user info to localStorage
document.getElementById('signup-button').addEventListener('click', () => {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (name && email && password) {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');
    container.classList.remove("active");
  } else {
    alert('Please fill all fields!');
  }
});
