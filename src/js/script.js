// Sélectionne toutes les miniatures
const thumbnails = document.querySelectorAll('ul img');
// Sélectionne le dialog
const lightbox = document.getElementById('lightbox');
// Sélectionne l'image dans le dialog
const lightboxImage = lightbox.querySelector('img');

// Ajoute un écouteur d'événement sur chaque miniature
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {
    const fullImgUrl = e.target.getAttribute('data-full-img'); // Récupère l'URL de l'image complète
    lightboxImage.src = fullImgUrl; // Met à jour l'image de la lightbox
    lightbox.showModal(); // Affiche la lightbox
  });
});

// Ferme la lightbox si on clique en dehors de l'image
lightbox.addEventListener('click', (e) => {
  if (!lightboxImage.contains(e.target)) {
    lightbox.close(); // Ferme le dialog
  }
});
