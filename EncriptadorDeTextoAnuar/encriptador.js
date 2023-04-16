function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      // Ignora los caracteres no alfabéticos
      if (char.match(/[a-z]/i)) {
        // Obtén el código ASCII del caracter
        let code = text.charCodeAt(i);
        // Aplica el desplazamiento
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
  
  // Ejemplo de uso
  let mensaje = "Hola, este es un mensaje secreto";
  let clave = 3;
  let mensajeEncriptado = encrypt(mensaje, clave);
  console.log(mensajeEncriptado); // "Krod, hvwh hv xq phvvdjh vhfuhw"
  
  