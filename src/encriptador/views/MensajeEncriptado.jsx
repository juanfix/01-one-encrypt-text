import './MensajeEncriptado.css';

export const MensajeEncriptado = () => {
  return (
    <div className="area-encriptada px-3">
      <div className="mensaje-encriptado">
        <img
          className="img-fluid"
          src="./assets/img/search.svg"
          alt="Imagen de búsqueda"
        />
        <h3>Ningún mensaje fue encontrado</h3>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
      </div>
    </div>
  );
};
