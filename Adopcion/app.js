// Datos de ejemplo de animales (mejorada: edad y raza incluidos)
const animales = [
  {
    nombre: "Luna",
    corta: "Perra mestiza, juguetona y cariñosa.",
    edad: 2,
    raza: "Mestiza",
    descripcion: "Luna es una perra mestiza de 2 años, vacunada y esterilizada. Es muy sociable, cariñosa y juguetona. Se lleva bien con niños y otros animales.",
    imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Max",
    corta: "Gato persa, tranquilo.",
    edad: 3,
    raza: "Persa",
    descripcion: "Max es un gato persa de 3 años, muy tranquilo y dócil, ideal para departamento. Está vacunado y desparasitado.",
    imagen: "gato_persa.png"
  },
  {
    nombre: "Bella",
    corta: "Coneja blanca, muy dócil.",
    edad: 1,
    raza: "Blanca",
    descripcion: "Bella es una conejita blanca de 1 año, perfecta para compañía. Es muy dócil y le encanta que la acaricien.",
    imagen: "conejo.png"
  },
  {
    nombre: "Rocky",
    corta: "Perro grande, activo.",
    edad: 4,
    raza: "Labrador",
    descripcion: "Rocky es un labrador de 4 años, ideal para familias activas. Es obediente y juguetón, perfecto para casas grandes.",
    imagen: "labrador.jfif"
  },
  {
    nombre: "Mia",
    corta: "Gata siamesa, cariñosa.",
    edad: 2,
    raza: "Siamesa",
    descripcion: "Mia es una gata siamesa de 2 años, cariñosa y curiosa. Está esterilizada y lista para un nuevo hogar.",
    imagen: "gata_siamesa.png"
  },
  { 
    nombre: "Simón",
    corta: "Periquito australiano.",
    edad: 0.7, // 8 meses
    raza: "Australiano",
    descripcion: "Simón es un periquito australiano de 8 meses, de colores vivos. Necesita un hogar donde pueda volar y cantar.",
    imagen: "periquito.jfif"
  },
  {
    nombre: "Toby",
    corta: "Perro pequeño, ideal para piso.",
    edad: 1,
    raza: "Pekinés",
    descripcion: "Toby es un pekinés de 1 año, muy simpático y cariñoso. Busca una familia que lo quiera mucho.",
    imagen: "pekines.jpg"
  }
];

// Ejemplo de campañas actuales
const campanas = [
  {
    titulo: "Adopta, no compres - España",
    descripcion: "Campaña nacional para incentivar la adopción de animales en refugios. Descubre cómo puedes participar y ayudar.",
    enlace: "https://www.fundacion-affinity.org/adopcion"
  },
  {
    titulo: "Save A Pet - USA",
    descripcion: "Organización que promueve la adopción responsable en todo Estados Unidos. Eventos semanales en varias ciudades.",
    enlace: "https://www.saveapetil.org/"
  },
  {
    titulo: "Adopta un amigo - México",
    descripcion: "Campaña en CDMX para encontrar hogar a perros y gatos rescatados. Consulta las jornadas de adopción.",
    enlace: "https://adoptamx.org/"
  },
  {
    titulo: "Find a Forever Friend - Australia",
    descripcion: "Iniciativa australiana para conectar animales sin hogar con familias amorosas. Participa en eventos cerca de ti.",
    enlace: "https://www.petrescue.com.au/"
  }
];

// Renderiza la galería de animales
function renderAnimales() {
  const galeria = document.getElementById('galeria');
  galeria.innerHTML = "";
  animales.forEach((animal, i) => {
    const card = document.createElement('div');
    card.className = "animal-card";
    card.innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombre}" />
      <div class="animal-nombre">${animal.nombre}</div>
      <div class="animal-corta">${animal.corta}</div>
      <div class="animal-extra">Edad: ${animal.edad} año${animal.edad === 1 ? "" : "s"} | Raza: ${animal.raza}</div>
    `;
    card.onclick = () => mostrarModalAnimal(i);
    galeria.appendChild(card);
  });
}

// Renderiza la lista de campañas
function renderCampanas() {
  const lista = document.getElementById('campanas-list');
  lista.innerHTML = "";
  campanas.forEach(c => {
    const card = document.createElement('div');
    card.className = "campana-card";
    card.innerHTML = `
      <div class="campana-titulo">${c.titulo}</div>
      <div class="campana-desc">${c.descripcion}</div>
      <a href="${c.enlace}" target="_blank" class="campana-enlace">Más información</a>
    `;
    lista.appendChild(card);
  });
}

// Modal animal
const modalAnimal = document.getElementById('modal-animal');
const closeAnimal = document.getElementById('close-animal');
let animalActual = null;

function mostrarModalAnimal(idx) {
  const animal = animales[idx];
  animalActual = animal;
  document.getElementById('modal-animal-img').src = animal.imagen;
  document.getElementById('modal-animal-nombre').textContent = animal.nombre;
  // Mejor descripción con edad y raza
  document.getElementById('modal-animal-desc').innerHTML = `
    <strong>Edad:</strong> ${animal.edad} año${animal.edad === 1 ? "" : "s"}<br>
    <strong>Raza:</strong> ${animal.raza}<br>
    <span>${animal.descripcion}</span>
  `;
  modalAnimal.style.display = "flex";
}

closeAnimal.onclick = () => {
  modalAnimal.style.display = "none";
};

// Modal adopción
const modalAdopcion = document.getElementById('modal-adopcion');
const closeAdopcion = document.getElementById('close-adopcion');

document.getElementById('adoptar-btn').onclick = () => {
  modalAnimal.style.display = "none";
  document.getElementById('modal-adopcion-msg').textContent =
    `¡Felicidades! Usted adoptó a ${animalActual.nombre}.`;
  modalAdopcion.style.display = "flex";
};

// Botón "Ir a Campañas" funcional
document.getElementById('btn-ir-campanas').onclick = (e) => {
  e.preventDefault();
  modalAdopcion.style.display = "none";
  document.getElementById('animales-section').style.display = "none";
  document.getElementById('campanas-section').style.display = "block";
  renderCampanas();
};

closeAdopcion.onclick = () => {
  modalAdopcion.style.display = "none";
};

// Navegación
document.getElementById('inicio-link').onclick = (e) => {
  e.preventDefault();
  document.getElementById('animales-section').style.display = "block";
  document.getElementById('campanas-section').style.display = "none";
};
document.getElementById('campanas-link').onclick = (e) => {
  e.preventDefault();
  document.getElementById('animales-section').style.display = "none";
  document.getElementById('campanas-section').style.display = "block";
  renderCampanas();
};

// Cierra modal si haces click fuera del contenido
window.onclick = function(event) {
  if (event.target == modalAnimal) modalAnimal.style.display = "none";
  if (event.target == modalAdopcion) modalAdopcion.style.display = "none";
};

// Inicializa
renderAnimales();