window.addEventListener('load', () => {
  const caroussel = document.getElementById("caroussel")

  caroussel.scrollLeft = (caroussel.scrollWidth - caroussel.clientWidth)/2
})

// Fonction pour rendre un élément actif
function rendactif() {
    const links = document.querySelectorAll('.selecteur div');
    
    links.forEach(link => {
      link.addEventListener('click', function() {
        // Supprime "active" de tous les liens
        links.forEach(l => l.classList.remove('active'));
        
        // Ajoute "active" au lien cliqué
        this.classList.add('active');
      });
    });
  }
  
  // Exécuter la fonction quand le document est chargé
  document.addEventListener('DOMContentLoaded', function() {
    rendactif();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Vérification immédiate au chargement de la page
    if (window.scrollY > 80) {
        header.classList.add('header-scrolled');
        
    }
});