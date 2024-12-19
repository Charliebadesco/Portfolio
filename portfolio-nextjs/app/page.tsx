import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-blue-300 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-purple-600 text-white py-4 shadow-lg animate-bounce">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-extrabold">Charlie Badesco Portfolio</h1>
          <nav>
            <ul className="flex gap-6 text-lg">
              <li>
                <a href="#about" className="hover:text-yellow-300 transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-300 transition">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Section Accueil */}
        <section id="home" className="text-center py-16">
          <h2 className="text-5xl font-extrabold mb-4 text-pink-700 drop-shadow-lg">
            🎉 Bienvenue !
          </h2>
          <p className="text-xl text-gray-700">
          Je suis une étudiante de 24 ans inscrite dans le programme Pré MScPro à Epitech Lyon. En parallèle, 
          je travaille sur plusieurs projets personnels qui me permettent de perfectionner mes compétences en programmation et en conception logicielle
          Je suis à la recherche d'une alternance pour Janvier 2025 dans le domaine de la programmation fullstack, de l'algorythmie et du developpement web.
          </p>
        </section>

        {/* Section À propos */}
        <section id="about" className="py-16 bg-yellow-100 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-center mb-4 text-purple-700">
            🌟 À propos de moi
          </h3>
          <p className="text-lg text-gray-800 text-center">
        💻 Parcours académique et projets
        <ul></ul>
        <li> Formation : Je suis actuellement en Pré MScPro à Epitech Lyon.
        Ce programme m’aide à me spécialiser en programmation et à acquérir des compétences avancées pour résoudre des problématiques techniques complexes.
        Domaines étudiés : Algorithmique, développement logiciel, gestion de projets, et bien plus.</li>
       
        Projet actuel :
        Je me concentre sur les concepts de programmation orientée objet (OOP) pour assurer un code propre, organisé et modulaire.
        Ces projets me permettent de mettre en pratique mes compétences en Java pour créer des applications interactives et visuellement intéressantes.

          </p>
        </section>

        {/* Section Projets */}
        <section
          id="projects"
          className="py-16 bg-gradient-to-br from-green-300 to-blue-400 text-white rounded-lg shadow-lg"
        >
          <h3 className="text-4xl font-bold text-center mb-8">🚀 Mes Projets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h4 className="text-2xl font-semibold mt-2 text-center">🎨 Projet 1</h4>
              <p className="text-center">Un automate Cellulaire en C++</p>
            </div>
            {/* Répète pour d'autres projets */}
          </div>
          <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h4 className="text-2xl font-semibold mt-2 text-center">🎨 Projet 2</h4>
              <p className="text-center">Un automate Cellulaire en Rust</p>
            </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-16 text-center bg-pink-200 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold mb-4 text-purple-600">📬 Contactez-moi</h3>
          <p className="text-lg">
            Envoyez-moi un message à{" "}
            <a
              href="mailto:charlotte.badesco@gmail.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              charlotte.badesco@gmail.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-4 mt-8">
        <p>&copy; 2024 🎨 Mon Portfolio_Charlie Badesco | Tous droits réservés.</p>
      </footer>
    </div>
  );
}
