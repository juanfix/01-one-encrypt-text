export const Footer = () => {
  return (
    <footer className="bg-transparent text-center text-lg-start">
      <div className="text-center text-muted p-3">
        <p>
          © 2023 Copyright ONE-Alura. Desarrollado por Juan José Ceballos Navia.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/juan-jose-ceballos-navia"
          className="me-1"
        >
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/juanfix"
          className="ms-1"
        >
          <i className="fa-brands fa-square-github fa-xl"></i>
        </a>
      </div>
    </footer>
  );
};
