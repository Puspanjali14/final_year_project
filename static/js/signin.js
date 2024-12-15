document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message); // Redirect user to the dashboard or home page
        } else if (response.status === 404) {
            alert('User not registered! Please sign up.');
        } else {
            alert(result.message); // Handle other errors, e.g., incorrect password
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
