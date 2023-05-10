import { useContext, useEffect } from 'react';
import { EncriptadorContext } from '../context';
import { onCopiarTexto } from '../helpers';

import './MensajeDesencriptado.css';

export const MensajeDesencriptado = () => {
  const { encriptador } = useContext(EncriptadorContext);
  const { textoResultado } = encriptador;

  useEffect(() => {}, [textoResultado]);

  return (
    <div className="area-desencriptada p-3 h-100">
      <div className="texto-desencriptado">
        <p>{textoResultado}</p>
      </div>
      <div className="texto-copiado mb-0">
        <i className="fa-solid fa-circle-check text-muted"></i>
        <span className="text-muted">&nbsp; Texto copiado.</span>
      </div>
      <button
        className="btn btn-light btn-lg btn-block w-100 my-3 mb-0"
        onClick={(e) => onCopiarTexto(e, textoResultado)}
      >
        Copiar
      </button>
    </div>
  );
};
