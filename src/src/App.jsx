import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const courses = [
    {
      title: "Algèbre",
      category: "Mathématiques fondamentales",
      level: "Lycée • Supérieur",
      desc: "Espaces vectoriels, matrices, déterminants, applications linéaires et diagonalisation.",
      icon: "📘",
    },
    {
      title: "Analyse",
      category: "Mathématiques fondamentales",
      level: "Lycée • Supérieur",
      desc: "Limites, continuité, dérivées, intégrales, suites et séries numériques.",
      icon: "📐",
    },
    {
      title: "Probabilités",
      category: "Probabilités et statistiques",
      level: "Bac • CPGE • Université",
      desc: "Variables aléatoires, lois usuelles, espérance, variance et probabilités conditionnelles.",
      icon: "🎲",
    },
    {
      title: "Analyse des données",
      category: "Probabilités et statistiques",
      level: "Université",
      desc: "Nettoyage des données, visualisation, ACP, corrélation, régression et classification.",
      icon: "📊",
    },
    {
      title: "Statistiques inférentielles",
      category: "Probabilités et statistiques",
      level: "Université",
      desc: "Estimation, intervalles de confiance, tests d'hypothèses, p-value et prise de décision.",
      icon: "📈",
    },
    {
      title: "Calcul stochastique",
      category: "Mathématiques avancées",
      level: "Avancé",
      desc: "Mouvement brownien, martingales, intégrale d'Itô et modèles stochastiques.",
      icon: "🧮",
    },
    {
      title: "Chaînes de Markov",
      category: "Mathématiques avancées",
      level: "Avancé",
      desc: "Matrices de transition, états récurrents, états transitoires et distribution stationnaire.",
      icon: "🔁",
    },
    {
      title: "Théorie des jeux",
      category: "Mathématiques avancées",
      level: "Avancé",
      desc: "Stratégies, jeux à somme nulle, équilibre de Nash et applications économiques.",
      icon: "♟️",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const text = `${course.title} ${course.category} ${course.level} ${course.desc}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #0f172a;
          color: white;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(37, 99, 235, 0.35), transparent 35%),
            radial-gradient(circle at top right, rgba(124, 58, 237, 0.25), transparent 30%),
            #0f172a;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 7%;
          background: rgba(2, 6, 23, 0.92);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logoIcon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          font-size: 26px;
        }

        .logo h1 {
          font-size: 22px;
          font-weight: 900;
        }

        .logo p {
          margin-top: 3px;
          font-size: 13px;
          color: #94a3b8;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 24px;
          color: #cbd5e1;
          font-weight: 600;
        }

        .navLinks a:hover {
          color: white;
        }

        .menuButton {
          display: none;
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 22px;
          cursor: pointer;
        }

        .hero {
          width: 86%;
          max-width: 1200px;
          margin: auto;
          padding: 80px 0 50px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          margin-bottom: 22px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(96, 165, 250, 0.35);
          color: #bfdbfe;
          font-weight: 700;
        }

        .heroText h2 {
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .heroText h2 span {
          color: #38bdf8;
        }

        .heroText p {
          margin-top: 24px;
          max-width: 650px;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
        }

        .heroButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-block;
          padding: 14px 24px;
          border-radius: 16px;
          font-weight: 800;
        }

        .primaryBtn {
          background: #2563eb;
          color: white;
        }

        .primaryBtn:hover {
          background: #1d4ed8;
        }

        .secondaryBtn {
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: white;
        }

        .secondaryBtn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .heroCard {
          padding: 28px;
          border-radius: 28px;
          background: rgba(2, 6, 23, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
        }

        .cardTop {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
        }

        .cardTop span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #38bdf8;
        }

        .cardTop span:nth-child(1) { background: #ef4444; }
        .cardTop span:nth-child(2) { background: #f59e0b; }
        .cardTop span:nth-child(3) { background: #22c55e; }

        .heroCard h3 {
          color: #93c5fd;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .heroCard h4 {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .heroCard ul {
          list-style: none;
          display: grid;
          gap: 12px;
          color: #e2e8f0;
        }

        .stats {
          width: 86%;
          max-width: 1200px;
          margin: 20px auto 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stats div {
          text-align: center;
          padding: 24px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stats strong {
          display: block;
          color: #67e8f9;
          font-size: 32px;
          margin-bottom: 8px;
        }

        .stats span {
          color: #cbd5e1;
        }

        .coursesSection,
        .orientation,
        .contact {
          width: 86%;
          max-width: 1200px;
          margin: auto;
          padding: 70px 0;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: end;
          margin-bottom: 34px;
        }

        .sectionHeader p,
        .orientation > div:first-child > p {
          color: #60a5fa;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .sectionHeader h2,
        .orientation h2,
        .contact h2 {
          font-size: 42px;
          font-weight: 900;
        }

        .sectionHeader input {
          width: 320px;
          max-width: 100%;
          padding: 15px 18px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.08);
          color: white;
          outline: none;
          font-size: 16px;
        }

        .sectionHeader input::placeholder {
          color: #94a3b8;
        }

        .coursesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 22px;
        }

        .courseCard {
          padding: 24px;
          border-radius: 24px;
          background: rgba(2, 6, 23, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.25s ease;
        }

        .courseCard:hover {
          transform: translateY(-6px);
          background: rgba(15, 23, 42, 0.95);
        }

        .courseIcon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(59, 130, 246, 0.18);
          font-size: 30px;
          margin-bottom: 18px;
        }

        .category {
          color: #60a5fa;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .courseCard h3 {
          margin-top: 8px;
          font-size: 24px;
        }

        .courseCard span {
          display: block;
          margin-top: 8px;
          color: #67e8f9;
          font-size: 14px;
          font-weight: 700;
        }

        .courseCard p:last-of-type {
          margin-top: 14px;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .courseCard button {
          margin-top: 18px;
          background: transparent;
          color: #93c5fd;
          border: none;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .orientation {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .orientation > div:first-child {
          padding: 34px;
          border-radius: 28px;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .orientation > div:first-child > p:last-child {
          margin-top: 18px;
          color: #cbd5e1;
          line-height: 1.8;
        }

        .schoolGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .schoolGrid div {
          padding: 28px;
          text-align: center;
          border-radius: 22px;
          background: rgba(2, 6, 23, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 24px;
          font-weight: 900;
        }

        .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
          background: white;
          color: #0f172a;
          border-radius: 32px;
          padding: 42px;
          margin-bottom: 60px;
        }

        .contactText p {
          margin-top: 16px;
          color: #475569;
          font-weight: 600;
        }

        .contactForm {
          display: grid;
          gap: 14px;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          padding: 15px 18px;
          border-radius: 16px;
          border: 1px solid #cbd5e1;
          font-size: 16px;
          outline: none;
        }

        .contactForm textarea {
          min-height: 130px;
          resize: vertical;
        }

        .contactForm button {
          padding: 15px;
          border: none;
          border-radius: 16px;
          background: #0f172a;
          color: white;
          font-weight: 900;
          font-size: 16px;
          cursor: pointer;
        }

        footer {
          padding: 28px;
          text-align: center;
          color: #94a3b8;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pricing {
          width: 86%;
          max-width: 1200px;
          margin: auto;
          padding: 70px 0;
        }

        .pricingHeader {
          text-align: center;
          margin-bottom: 36px;
        }

        .pricingHeader p {
          color: #60a5fa;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .pricingHeader h2 {
          font-size: 42px;
          font-weight: 900;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .priceCard {
          padding: 28px;
          border-radius: 28px;
          background: rgba(2, 6, 23, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .priceCard.popular {
          border-color: #38bdf8;
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.18);
        }

        .priceCard h3 {
          font-size: 26px;
          margin-bottom: 12px;
        }

        .price {
          font-size: 38px;
          font-weight: 900;
          color: #67e8f9;
          margin: 16px 0;
        }

        .priceCard ul {
          list-style: none;
          display: grid;
          gap: 12px;
          color: #cbd5e1;
          margin: 20px 0;
        }

        .payButton {
          display: block;
          width: 100%;
          text-align: center;
          padding: 14px 18px;
          border-radius: 16px;
          background: #2563eb;
          color: white;
          font-weight: 900;
          border: none;
          cursor: pointer;
        }

        .payButton:hover {
          background: #1d4ed8;
        }

        .paymentNote {
          margin-top: 22px;
          text-align: center;
          color: #94a3b8;
          line-height: 1.7;
        }

        @media (max-width: 850px) {
          .menuButton {
            display: block;
          }

          .navLinks {
            position: absolute;
            top: 84px;
            left: 0;
            right: 0;
            display: none;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 7%;
            background: #020617;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .navLinks.open {
            display: flex;
          }

          .hero,
          .orientation,
          .contact {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .sectionHeader {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 520px) {
          .navbar,
          .hero,
          .stats,
          .coursesSection,
          .orientation,
          .contact {
            width: 92%;
          }

          .navbar {
            width: 100%;
            padding: 14px 4%;
          }

          .logo h1 {
            font-size: 18px;
          }

          .logo p {
            font-size: 11px;
          }

          .heroText h2 {
            font-size: 42px;
          }

          .stats,
          .schoolGrid {
            grid-template-columns: 1fr;
          }

          .contact {
            padding: 26px;
          }
        }
      `}</style>

      <div className="app">
        <header className="navbar">
          <a href="#accueil" className="logo">
            <div className="logoIcon">🎓</div>
            <div>
              <h1>Epsilone Education</h1>
              <p>Cours • Exercices • Orientation</p>
            </div>
          </a>

          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "navLinks open" : "navLinks"}>
            <a href="#accueil">Accueil</a>
            <a href="#cours">Cours</a>
            <a href="#orientation">Orientation</a>
            <a href="#paiement">Paiement</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section id="accueil" className="hero">
            <div className="heroText">
              <span className="badge">Plateforme éducative moderne au Maroc</span>
              <h2>
                Apprendre les maths <br />
                <span>simplement et efficacement.</span>
              </h2>
              <p>
                Un site éducatif pour les cours d'algèbre, analyse, probabilités,
                statistiques, calcul stochastique, chaînes de Markov et théorie des jeux.
              </p>
              <div className="heroButtons">
                <a className="primaryBtn" href="#cours">Voir les cours</a>
                <a className="secondaryBtn" href="#contact">Me contacter</a>
              </div>
            </div>

            <div className="heroCard">
              <div className="cardTop">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>Cours du jour</h3>
              <h4>Probabilités & statistiques</h4>
              <ul>
                <li>✅ Résumé clair</li>
                <li>✅ Exercices corrigés</li>
                <li>✅ Explication français + darija</li>
                <li>✅ Niveau lycée et supérieur</li>
              </ul>
            </div>
          </section>

          <section className="stats">
            <div><strong>8</strong><span>Cours principaux</span></div>
            <div><strong>120+</strong><span>Leçons</span></div>
            <div><strong>80+</strong><span>Exercices</span></div>
            <div><strong>24/7</strong><span>Accès en ligne</span></div>
          </section>

          <section id="cours" className="coursesSection">
            <div className="sectionHeader">
              <div>
                <p>Nos contenus</p>
                <h2>Cours disponibles</h2>
              </div>
              <input
                type="text"
                placeholder="Chercher un cours..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="coursesGrid">
              {filteredCourses.map((course) => (
                <article className="courseCard" key={course.title}>
                  <div className="courseIcon">{course.icon}</div>
                  <p className="category">{course.category}</p>
                  <h3>{course.title}</h3>
                  <span>{course.level}</span>
                  <p>{course.desc}</p>
                  <button type="button">Découvrir →</button>
                </article>
              ))}
            </div>
          </section>

          <section id="orientation" className="orientation">
            <div>
              <p>Orientation après bac</p>
              <h2>ENSA, ENSAM, FST, EST, BTS, CPGE</h2>
              <p>
                Ajoute ici des explications sur les écoles supérieures au Maroc, les conditions
                d'accès, les concours, les débouchés et les conseils pour choisir.
              </p>
            </div>

            <div className="schoolGrid">
              {["ENSA", "ENSAM", "FST", "EST", "BTS", "CPGE"].map((school) => (
                <div key={school}>{school}</div>
              ))}
            </div>
          </section>

          <section id="paiement" className="pricing">
            <div className="pricingHeader">
              <p>Abonnements</p>
              <h2>Choisis ton pack</h2>
            </div>

            <div className="pricingGrid">
              <div className="priceCard">
                <h3>Pack Gratuit</h3>
                <p className="price">0 DH</p>
                <ul>
                  <li>✅ Accès aux résumés</li>
                  <li>✅ Quelques exercices</li>
                  <li>✅ Orientation générale</li>
                </ul>
                <a className="payButton" href="#contact">Commencer gratuit</a>
              </div>

              <div className="priceCard popular">
                <h3>Pack Étudiant</h3>
                <p className="price">49 DH</p>
                <ul>
                  <li>✅ Tous les cours</li>
                  <li>✅ Exercices corrigés</li>
                  <li>✅ PDF + vidéos</li>
                  <li>✅ Support WhatsApp</li>
                </ul>
                <a className="payButton" href="https://wa.me/212766362660?text=Salam,%20je%20veux%20payer%20le%20Pack%20Étudiant" target="_blank" rel="noreferrer">
                  Payer par WhatsApp
                </a>
              </div>

              <div className="priceCard">
                <h3>Pack Premium</h3>
                <p className="price">99 DH</p>
                <ul>
                  <li>✅ Tous les avantages</li>
                  <li>✅ Suivi personnalisé</li>
                  <li>✅ Corrections détaillées</li>
                  <li>✅ Préparation concours</li>
                </ul>
                <a className="payButton" href="https://wa.me/212766362660?text=Salam,%20je%20veux%20payer%20le%20Pack%20Premium" target="_blank" rel="noreferrer">
                  Payer par WhatsApp
                </a>
              </div>
            </div>

            <p className="paymentNote">
              Pour un vrai paiement automatique par carte bancaire, il faudra connecter Stripe, PayPal, CMI ou Payzone avec un backend sécurisé.
            </p>
          </section>

          <section id="contact" className="contact">
            <div className="contactText">
              <h2>Contact</h2>
              <p>Tu peux changer ces informations avant de publier ton site.</p>
              <p>📧 epsiloneepsilone5@gmail.com</p>
              <p>📞 0766362660</p>
              <p>📸 educationeducation.194</p>
            </div>

            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nom complet" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </section>
        </main>

        <footer>© 2026 Epsilone Education. Tous droits réservés.</footer>
      </div>
    </>
  );
}
