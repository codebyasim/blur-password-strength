// Get references to DOM elements by their IDs
const password = document.getElementById('password')           // Password input field
const background = document.getElementById('background')       // Blurred background element
const strengthText = document.getElementById('strengthText')   // Text that displays password strength
const togglePassword = document.getElementById('togglePassword') // Button to show/hide password

// Event listener: Triggered whenever the user types in the password field
password.addEventListener('input', (e) => {
    // Get the current value of the password field
    const input = e.target.value
    const length = input.length

    // Calculate blur amount: the longer the password, the less blur
    const blurValue = Math.max(0, 20 - length * 2) // Ensure the blur doesn't go below 0
    background.style.filter = `blur(${blurValue}px)` // Apply blur to the background

    // Determine and display password strength based on length
    if (length === 0) {
        // No input, so no message
        strengthText.textContent = ''
    } else if (length < 4) {
        // Very weak password
        strengthText.textContent = 'Very Weak 🔴'
        strengthText.className = 'text-xs mt-1 text-red-500'
    } else if (length < 8) {
        // Weak password
        strengthText.textContent = 'Weak 🟠'
        strengthText.className = 'text-xs mt-1 text-yellow-500'
    } else {
        // Strong password
        strengthText.textContent = 'Strong 🟢'
        strengthText.className = 'text-xs mt-1 text-green-600'
    }
})

// Event listener: Toggle password visibility on button click
togglePassword.addEventListener('click', () => {
    // Check current type and switch between 'password' and 'text'
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type) // Update the type attribute

    // Update button text to reflect the new state
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide'
})

