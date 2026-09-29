import React, { useState, useEffect } from "react";

export default function HotelVitrine() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Services", id: "services" },
    { name: "Réservation", id: "reservation" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4" : "bg-white border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="Logo Hôtel B52" 
              className="h-20 md:h-28 w-auto object-contain mix-blend-multiply" 
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm uppercase tracking-widest font-bold transition-colors hover:text-orange-500 ${
                  link.id === "reservation" 
                    ? "bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 shadow-md" 
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-orange-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Dropdown Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm uppercase tracking-widest font-bold w-full py-2 ${
                  link.id === "reservation" ? "text-orange-500" : "text-gray-600"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- ACCUEIL (HERO) --- */}
      <section id="accueil" className="relative h-screen flex items-center justify-center bg-orange-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-16">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600 mb-4">Tuléar Tsimiroro</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tight mb-6">
            Votre confort, <br /> <span className="text-orange-500">notre priorité</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 tracking-wide">
            Séjournez au bord de la mer dans le confort et la tranquillité absolue.
          </p>
          <button 
            onClick={() => scrollToSection("reservation")}
            className="bg-orange-500 text-white px-10 py-4 text-sm font-black uppercase tracking-[0.1em] rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            Réserver un séjour
          </button>
        </div>
      </section>

      {/* --- CHAMBRES --- */}
      <section id="chambres" className="py-24 md:py-32 max-w-7xl mx-auto px-6 bg-white">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-black uppercase tracking-widest text-gray-900 mb-4">Nos Hébergements</h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Chambre Double */}
          <div className="group cursor-pointer bg-orange-50 rounded-[2rem] p-6 transition-all hover:bg-orange-100 border border-orange-100/50">
            <div className="overflow-hidden mb-6 rounded-2xl bg-white aspect-[4/3] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop" 
                alt="Chambre Double" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wide text-gray-900 mb-3">Chambre Double</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-6 text-sm">
              Un espace aéré et chaleureux. Équipée d'une literie confortable, d'une ventilation optimale et d'une salle de bain avec eau chaude. Le petit-déjeuner vous est gracieusement offert.
            </p>
            <p className="font-black text-xl text-orange-600">40 000 Ar <span className="text-sm text-gray-500 font-bold uppercase">/ nuit</span></p>
          </div>

          {/* Chambre Familiale */}
          <div className="group cursor-pointer bg-orange-50 rounded-[2rem] p-6 transition-all hover:bg-orange-100 border border-orange-100/50">
            <div className="overflow-hidden mb-6 rounded-2xl bg-white aspect-[4/3] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                alt="Chambre Familiale" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wide text-gray-900 mb-3">Chambre Familiale</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-6 text-sm">
              Idéale pour les groupes ou les familles. Volume généreux, ventilation soignée, eau chaude et accès internet inclus. Un espace pensé pour le bien-être de tous, avec petit-déjeuner offert.
            </p>
            <p className="font-black text-xl text-orange-600">50 000 Ar <span className="text-sm text-gray-500 font-bold uppercase">/ nuit</span></p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest border border-gray-200 inline-block px-6 py-3 rounded-full">
            Option lit supplémentaire : 10 000 Ar / nuit
          </p>
        </div>
      </section>

      {/* --- SERVICES ET EMPLACEMENT --- */}
      <section id="services" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-wide mb-6">Un cadre privilégié</h2>
            <div className="w-16 h-1.5 bg-orange-500 mb-8 rounded-full"></div>
            
            <p className="text-gray-300 font-medium leading-relaxed text-base mb-8">
              Situé idéalement au bord de la mer, à proximité immédiate de la Mosquée Bohora Tsianaloka, l'Hôtel B52 allie la tranquillité d'un cadre maritime à des prestations pensées pour votre sérénité.
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-6">Prestations Incluses & Options</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Petit-déjeuner offert
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Connexion Internet haut débit
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Salles d'eau avec eau chaude
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Chambres aérées et ventilées
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Parking sécurisé
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Service de blanchisserie
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Station de lavage automobile
              </li>
            </ul>
          </div>
          <div>
            {/* Une image représentant la mer ou la façade de l'hôtel */}
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Bord de mer Toliara" 
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border-4 border-gray-800"
            />
          </div>
        </div>
      </section>

    {/* --- RÉSERVATION (FORMULAIRE AJAX) --- */}
      <section id="reservation" className="py-24 md:py-32 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-widest text-gray-900 mb-4">Demande de Réservation</h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 font-medium">
            Veuillez remplir le formulaire ci-dessous. Notre réception vous confirmera la disponibilité dans les plus brefs délais.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative">
          
          {/* L'état de l'envoi (Message de succès) */}
          <div id="successMessage" className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-[2rem] p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Votre demande est bien envoyée !</h3>
            <p className="text-gray-600 font-medium text-lg">Nous vous répondrons dans les plus brefs délais sur votre adresse e-mail.</p>
            <button 
              onClick={() => {
                document.getElementById('successMessage').classList.add('hidden');
                document.getElementById('reservationForm').reset();
              }}
              className="mt-8 text-sm font-bold text-orange-500 uppercase tracking-widest hover:text-orange-700 transition"
            >
              ← Faire une autre demande
            </button>
          </div>

          <form 
            id="reservationForm"
            onSubmit={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page et la redirection
              const form = e.target;
              const bouton = document.getElementById('submitBtn');
              const texteBouton = document.getElementById('btnText');
              const spinner = document.getElementById('btnSpinner');

              // Animation de chargement sur le bouton
              bouton.disabled = true;
              texteBouton.classList.add('hidden');
              spinner.classList.remove('hidden');

              // Envoi des données en arrière-plan via AJAX
              fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
              }).then(response => {
                if (response.ok) {
                  // Affiche le message de succès personnalisé
                  document.getElementById('successMessage').classList.remove('hidden');
                } else {
                  alert("Oops! Un problème est survenu lors de l'envoi.");
                }
                // Remet le bouton à son état normal
                bouton.disabled = false;
                texteBouton.classList.remove('hidden');
                spinner.classList.add('hidden');
              }).catch(error => {
                alert("Erreur de connexion. Veuillez réessayer.");
                bouton.disabled = false;
                texteBouton.classList.remove('hidden');
                spinner.classList.add('hidden');
              });
            }}
            action="https://formsubmit.co/moustafafazeleabas@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            
            <input type="hidden" name="_subject" value="Nouvelle demande de réservation - Hôtel B52" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Nom Complet *</label>
                <input 
                  type="text" 
                  name="Nom" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900"
                  placeholder="Nom et Prénom"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Adresse E-mail *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Téléphone / WhatsApp (Facultatif)</label>
              <input 
                type="tel" 
                name="Telephone" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900"
                placeholder="Ex: +261 34 00 000 00"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Date d'arrivée *</label>
                <input 
                  type="date" 
                  name="Date_Arrivee" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Date de départ *</label>
                <input 
                  type="date" 
                  name="Date_Depart" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Précisions (Type de chambre, lit supplémentaire...) *</label>
              <textarea 
                name="Message" 
                rows="4" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium text-gray-900 resize-none"
                placeholder="Détaillez votre demande ici..."
              ></textarea>
            </div>

            <button 
              id="submitBtn"
              type="submit"
              className="w-full bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span id="btnText">Envoyer la demande</span>
              <svg id="btnSpinner" className="hidden animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 pt-16 pb-8 border-t-8 border-orange-500 text-center">
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <div className="flex justify-center mb-8">
            <img src="/logo.jpg" alt="Logo Hôtel B52" className="h-20 w-auto object-contain bg-white rounded-xl p-2" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm font-medium mb-8">
            <span className="flex items-center gap-2">
               Tsimiroro, Bord de la mer (à côté de la Mosquée Bohora Tsianaloka), Toliara
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="flex items-center gap-2">
               +261 38 53 052 52
            </span>
          </div>

          <a 
            href="https://www.facebook.com/tulear.hoteltulear" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors border border-orange-500 hover:bg-orange-500 px-6 py-2 rounded-full"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
            </svg>
            Suivez-nous sur Facebook
          </a>
        </div>
        
        <div className="text-xs text-gray-600 font-bold uppercase tracking-widest border-t border-gray-800 pt-8">
          &copy; {new Date().getFullYear()} Hôtel B52 Tuléar. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}