import { useState } from 'react';
import { EncriptadorContext } from './EncriptadorContext';

const encriptadorDefault = {
  texto: '',
  textoResultado: '',
  accionEjecutada: false,
};

export const EncriptadorProvider = ({ children }) => {
  const [encriptador, setEncriptador] = useState(encriptadorDefault);
  return (
    <EncriptadorContext.Provider value={{ encriptador, setEncriptador }}>
      {children}
    </EncriptadorContext.Provider>
  );
};
