import React, { useState, useEffect } from "react";

export default function HotelVitrine() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effet pour rendre la barre de navigation transparente au top, et blanche au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "Chambres", id: "chambres" },
    { name: "Toliara", id: "toliara" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#FAFAFA] scroll-smooth">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl tracking-[0.2em] font-light uppercase ${isScrolled ? "text-gray-900" : "text-white"}`}>
            Hôtel <span className="font-bold">Vezo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-800 text-sm uppercase tracking-widest font-bold"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- ACCUEIL (HERO) --- */}
      <section id="accueil" className="relative h-screen flex items-center justify-center">
        {/* Remplacer cette image par une belle photo de l'hôtel ou de la mer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay sombre pour faire ressortir le texte */}
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white uppercase tracking-[0.15em] mb-6 drop-shadow-lg">
            Le repos sous <br /> le soleil du sud
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 tracking-wide">
            Une oasis de tranquillité au cœur de Toliara.
          </p>
          <button 
            onClick={() => scrollToSection("chambres")}
            className="bg-white text-gray-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors"
          >
            Découvrir l'hôtel
          </button>
        </div>
      </section>

      {/* --- CHAMBRES --- */}
      <section id="chambres" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-gray-900 mb-4">Nos Chambres</h2>
          <div className="w-12 h-px bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Chambre 1 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 bg-gray-200 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop" 
                alt="Chambre Standard" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light uppercase tracking-widest text-gray-900 mb-2">Chambre Standard</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-4 text-sm">
              Un espace épuré et lumineux, climatisé, idéal pour se ressourcer après une journée d'exploration sous le soleil de la région Atsimo-Andrefana.
            </p>
            <p className="font-bold text-amber-700 tracking-widest">À partir de 80 000 Ar / nuit</p>
          </div>

          {/* Chambre 2 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 bg-gray-200 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                alt="Suite Océan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light uppercase tracking-widest text-gray-900 mb-2">Suite Océan</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-4 text-sm">
              Luxe et minimalisme. Profitez d'un espace généreux avec lit King Size, baignoire et une décoration subtile inspirée de l'artisanat local.
            </p>
            <p className="font-bold text-amber-700 tracking-widest">À partir de 150 000 Ar / nuit</p>
          </div>
        </div>
      </section>

      {/* --- TOLIARA (PRÉSENTATION DE LA VILLE) --- */}
      <section id="toliara" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-6">La Cité du Soleil</h2>
            <div className="w-12 h-px bg-amber-500 mb-8"></div>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
              <p>
                Capitale du sud malgache, Toliara (Tuléar) est une ville vibrante baignée de lumière. Face aux eaux claires du Canal de Mozambique, elle offre une atmosphère unique où le temps semble s'être arrêté.
              </p>
              <p>
                Point de départ idéal pour explorer les plages immaculées d'Ifaty et de Mangily, ou pour s'aventurer dans l'arrière-pays à la découverte des baobabs séculaires et de la flore endémique épineuse.
              </p>
              <p>
                Laissez-vous séduire par l'accueil chaleureux de ses habitants, sa gastronomie riche en fruits de mer et le rythme paisible qui caractérise cette région fascinante.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop" 
              alt="Plage de Toliara" 
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-gray-900 mb-4">Nous Contacter</h2>
        <div className="w-12 h-px bg-amber-600 mx-auto mb-12"></div>
        
        <p className="text-gray-500 font-light mb-12 max-w-xl mx-auto">
          Pour toute demande de réservation ou d'information, n'hésitez pas à nous contacter directement. Nous vous répondrons dans les plus brefs délais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-2">Adresse</h4>
            <p className="text-gray-500 font-light text-sm">Centre-ville, Toliara 601<br/>Madagascar</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-2">Téléphone</h4>
            <p className="text-gray-500 font-light text-sm">+261 34 00 000 00</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-2">Email</h4>
            <p className="text-gray-500 font-light text-sm">contact@hotel-vezo.mg</p>
          </div>
        </div>

        {/* Bouton WhatsApp direct au lieu d'un webhook */}
        <a 
          href="https://wa.me/261340000000?text=Bonjour,%20je%20souhaite%20avoir%20des%20informations%20pour%20une%20réservation."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-colors"
        >
          Réserver via WhatsApp
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-100 py-10 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Hôtel Vezo Toliara. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}