export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/page/principal.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Asegura que ocupe toda la altura de la pantalla
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Aumenta la opacidad para mayor legibilidad */}
      <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
          Bienvenido a MigrAI
        </h1>
        <p className="text-2xl md:text-3xl text-white mt-4 leading-relaxed">
          Migramos tu empresa a la era de la Inteligencia Artificial
        </p>
      </div>
    </section>
  );
}
