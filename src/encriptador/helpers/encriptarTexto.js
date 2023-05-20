import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const onEncriptarTexto = (e, valor) => {
  document.querySelector('.area-resultado').focus();
  if (valor.length === 0) {
    Swal.fire(
      'Ningún mensaje fue encontrado',
      'Ingresa el texto que desees encriptar o desencriptar.',
      'error'
    );
    return '';
  }
  return valor
    .replace(/e/gim, 'enter')
    .replace(/i/gim, 'imes')
    .replace(/a/gim, 'ai')
    .replace(/o/gim, 'ober')
    .replace(/u/gim, 'ufat');
};
