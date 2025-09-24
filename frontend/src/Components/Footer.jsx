import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(63, 3, 175, 0.5)", color: "#fff" }} className="py-3">
      <div className="text-center">
        <p className="mt-2 mb-1">SoftVet - Software para Veterinarias</p>
        <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i> Tucumán, Argentina</p>
        <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i> info@vetsoft.com</p>
        <p className="mb-1"><i className="bi bi-whatsapp me-2"></i>
          <a
            href="https://wa.me/543816689634"
            target="_blank"
            className="text-white text-decoration-none"
          >
            +54 381 668-9634
          </a></p>

          <Link to= "/nosotros" className='text-white text-decoration-none'>Desarrolladores
          </Link>
          
        <p className="mb-0">© 2025 VetSoft. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
