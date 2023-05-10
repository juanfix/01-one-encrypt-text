import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const onDesencriptarTexto = (e, valor) => {
  document.querySelector('.texto').focus();
  if (valor.length === 0) {
    Swal.fire(
      'Ningún mensaje fue encontrado',
      'Ingresa el texto que desees encriptar o desencriptar.',
      'error'
    );
    return '';
  }
  return valor
    .replace(/enter/gim, 'e')
    .replace(/imes/gim, 'i')
    .replace(/ai/gim, 'a')
    .replace(/ober/gim, 'o')
    .replace(/ufat/gim, 'u');
};
