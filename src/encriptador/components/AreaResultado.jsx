import { useContext, useEffect, useState } from 'react';

import { MensajeDesencriptado, MensajeEncriptado } from '../views';
import { EncriptadorContext } from '../context';

import './AreaResultado.css';

export const AreaResultado = () => {
  const { encriptador } = useContext(EncriptadorContext);
  const { accionEjecutada, textoResultado } = encriptador;

  useEffect(() => {}, [accionEjecutada]);

  return (
    <section className="area-resultado">
      {!accionEjecutada || textoResultado === '' ? (
        <MensajeEncriptado />
      ) : (
        <MensajeDesencriptado />
      )}
    </section>
  );
};
