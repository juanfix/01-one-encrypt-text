import { useContext } from 'react';
import { EncriptadorContext } from '../context';

import './AreaTexto.css';

export const AreaTexto = ({ onEncriptarTexto, onDesencriptarTexto }) => {
  const { encriptador, setEncriptador } = useContext(EncriptadorContext);

  const onInputChange = ({ target }) => {
    const patron = /^[A-Za-z]+$/i;

    setEncriptador({
      ...encriptador,
      [target.name]: target.value.toLowerCase().replace(/[^a-z ]/, ''),
    });
  };

  return (
    <section className="area-texto">
      <div className="header">
        <img src="./assets/img/logo.svg" alt="Logo de Alura" />
      </div>
      <div className="input-texto">
        <textarea
          className="texto"
          name="texto"
          cols="30"
          rows="10"
          placeholder="Ingrese el texto aquí"
          value={encriptador.texto}
          onChange={onInputChange}
        ></textarea>
      </div>
      <div className="condicion mt-5">
        <i className="fa-solid fa-circle-exclamation text-muted"></i>
        <span className="text-muted">
          &nbsp; Sólo letras minúsculas y sin acentos.
        </span>
      </div>
      <div className="botones row">
        <div className="encriptar col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <button
            type="button"
            className="btn btn-primary btn-lg w-100 my-3"
            onClick={(e) => {
              setEncriptador({
                texto: '',
                textoResultado: onEncriptarTexto(e, encriptador.texto),
                accionEjecutada: true,
              });
            }}
          >
            Encriptar
          </button>
        </div>
        <div className="desencriptar col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <button
            type="button"
            className="btn btn-light btn-lg w-100 my-3"
            onClick={(e) => {
              setEncriptador({
                texto: '',
                textoResultado: onDesencriptarTexto(e, encriptador.texto),
                accionEjecutada: true,
              });
            }}
          >
            Desencriptar
          </button>
        </div>
      </div>
    </section>
  );
};
