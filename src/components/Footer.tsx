export default function Footer() {
  return (
    <footer className="bg-[#161E20] text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <p>© 2024 MigrAI. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Política de Privacidad</a>
          <a href="/terms-of-service" className="hover:text-gray-400">Términos de Servicio</a>
          <a href="/contact" className="hover:text-gray-400">Contacto</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <img src="/assets/icons/facebook.svg" alt="Facebook" className="h-6"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <img src="/assets/icons/twitter.svg" alt="Twitter" className="h-6"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="h-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
