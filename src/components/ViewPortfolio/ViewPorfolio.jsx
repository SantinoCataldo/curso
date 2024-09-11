import React, { useState } from 'react';
import Modal from 'react-modal';
import './ViewPorfolio.scss';

const projects = [
  { id: 1, title: 'Proyecto 1', category: 'Ventanas', imageUrl: 'https://aberturasalumac.com.ar/images/large-features-1-470x334.jpg', description: 'Descripción del proyecto 1.' },
  { id: 2, title: 'Proyecto 2', category: 'Piel de Vidrio', imageUrl: 'https://www.offnung-arg.com/documentos/14/162_fabrica-de-aberturas-de-aluminio-2.jpg', description: 'Descripción del proyecto 2.' },
  { id: 3, title: 'Proyecto 3', category: 'Barandas', imageUrl: 'https://www.offnung-arg.com/documentos/14/100_fabrica-aberturas-aluminio.jpg', description: 'Descripción del proyecto 3.' },
  { id: 4, title: 'Proyecto 4', category: 'Frente Integral', imageUrl: 'https://tecnoperfiles.com.ar/images/joomlart/features/item-1.jpg', description: 'Descripción del proyecto 4.' },
  { id: 5, title: 'Proyecto 5', category: 'Mamparas de Baños', imageUrl: 'https://santiagoaberturas.com/img/cms/aluminio-cerramiento.jpg', description: 'Descripción del proyecto 5.' },
  { id: 6, title: 'Proyecto 6', category: 'Puertas', imageUrl: 'https://abermac.com.ar/wp-content/uploads/2021/03/20210308_172349-scaled.jpg', description: 'Descripción del proyecto 6.' },
  { id: 7, title: 'Proyecto 7', category: 'Mamparas de Baños', imageUrl: 'https://santiagoaberturas.com/img/cms/alumino-a30.jpg', description: 'Descripción del proyecto 7.' },
  { id: 8, title: 'Proyecto 8', category: 'Puertas', imageUrl: 'https://www.novoaberturas.com.ar/global/img/ventanas.jpg', description: 'Descripción del proyecto 8.' },
];

const orderedCategories = [
  'Todos',
  'Ventanas',
  'Piel de Vidrio',
  'Barandas',
  'Frente Integral',
  'Mamparas de Baños',
  'Puertas'
];

const ViewPorfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const availableCategories = Array.from(new Set(projects.map(project => project.category))).concat('Todos');

  const sortedCategories = orderedCategories.filter(category => availableCategories.includes(category));

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <h2>Portafolio</h2>
      <div className="portfolio__filters">
        {sortedCategories.map(category => (
          <button
            key={category}
            className={`portfolio__filter_button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio__items">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className="portfolio__item" onClick={() => openModal(project)}>
              <img src={project.imageUrl} alt={project.title} className="portfolio__item__image" />
              <div className="portfolio__item__title">{project.title}</div>
            </div>
          ))
        ) : (
          <p>No hay proyectos en esta categoría.</p>
        )}
      </div>

      {currentProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="portfolio__modal"
          overlayClassName="portfolio__modal__overlay"
        >
          <h2>{currentProject.title}</h2>
          <img src={currentProject.imageUrl} alt={currentProject.title} className="portfolio__modal__image" />
          <p>{currentProject.description}</p>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      )}
    </section>
  );
};

export default ViewPorfolio;
