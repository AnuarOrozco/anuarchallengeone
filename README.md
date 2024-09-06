# Text Encryptor 🔐

## Project Overview

This project is a **simple text encryptor** built with **HTML, CSS, and JavaScript**. It allows users to input text, which is then encrypted using a Caesar cipher (a basic encryption technique). You can customize the encryption key (shift) as needed.

The encrypted text is displayed directly on the screen after the user clicks the "Encrypt" button.

## Features

- **Text input**: Users can input any text to be encrypted.
- **Caesar Cipher Encryption**: The text is encrypted by shifting each letter by a specific number of positions in the alphabet (key).
- **Instant Display**: Once encrypted, the result is immediately shown on the web page.

## How It Works

The encryption logic uses the Caesar cipher, which shifts each letter by a predefined number of positions in the alphabet. Non-alphabetic characters are ignored.

For example, if the shift (key) is 3:
- A becomes D
- B becomes E
- Z becomes C, and so on.

### Example

Original message: `Hola, este es un mensaje secreto`  
Encrypted message with a shift of 3: `Krod, hvwh hv xq phvvdjh vhfuhw`

### Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Basic styling for the layout and button interactions.
- **JavaScript**: Logic for text encryption using the Caesar cipher.

## File Structure

- `index.html`: The main HTML file that includes the input field, button, and encrypted text display area.
- `styles.css`: Contains the CSS to style the web page.
- `encriptador.js`: Contains the JavaScript logic for the encryption process.

## Code Example

Here’s how the encryption logic works in JavaScript:

```javascript
function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}
