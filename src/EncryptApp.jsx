import { EncriptadorProvider } from './encriptador/context/EncriptadorProvider';
import { EncriptadorPage } from './encriptador/pages/EncriptadorPage';

export const EncryptApp = () => {
  return (
    <EncriptadorProvider>
      <EncriptadorPage />
    </EncriptadorProvider>
  );
};
