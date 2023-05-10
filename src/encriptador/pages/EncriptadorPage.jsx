import { AreaResultado, AreaTexto } from '../components';
import { onEncriptarTexto, onDesencriptarTexto } from '../helpers';
import { Footer } from '../../ui/components';

import './EncriptadorPage.css';

export const EncriptadorPage = () => {
  return (
    <>
      <main className="container-fluid my-3">
        <div className="row">
          <div
            id="principal-col-texto"
            className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9"
          >
            <AreaTexto
              onEncriptarTexto={onEncriptarTexto}
              onDesencriptarTexto={onDesencriptarTexto}
            />
          </div>
          <div
            id="principal-col-resultado"
            className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"
          >
            <AreaResultado />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
