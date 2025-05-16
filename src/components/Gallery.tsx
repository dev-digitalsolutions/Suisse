import React, { useState } from 'react'
import { Image, X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Matterhorn, Zermatt",
    caption: "Le Cervin (Matterhorn), symbole de la Suisse et l'une des montagnes les plus reconnaissables au monde."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Château de Chillon",
    caption: "Le château de Chillon sur le lac Léman, l'un des monuments historiques les plus visités de Suisse."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Lac de Lucerne",
    caption: "Le lac des Quatre-Cantons (Vierwaldstättersee) entouré de montagnes, berceau de la Confédération suisse."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573167443175-873123c2ce81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Vieille ville de Berne",
    caption: "La vieille ville de Berne, capitale fédérale, classée au patrimoine mondial de l'UNESCO."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516550893885-985c994c8609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Jet d'eau de Genève",
    caption: "Le Jet d'eau de Genève, emblème de la ville internationale, s'élève à 140 mètres de hauteur."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Glacier d'Aletsch",
    caption: "Le glacier d'Aletsch, le plus grand glacier des Alpes, inscrit au patrimoine mondial de l'UNESCO."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Chapelle du pont de Lucerne",
    caption: "Le Kapellbrücke (pont de la Chapelle) à Lucerne, le plus ancien pont couvert en bois d'Europe."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Vignobles de Lavaux",
    caption: "Les vignobles en terrasses de Lavaux sur les rives du lac Léman, classés au patrimoine mondial de l'UNESCO."
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Abbaye de Saint-Gall",
    caption: "L'abbaye de Saint-Gall, dont la bibliothèque médiévale est l'une des plus importantes au monde."
  }
]

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const currentImage = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null

  return (
    <section id="galerie" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Image className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Galerie de la Suisse</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="card overflow-hidden cursor-pointer group"
            onClick={() => openModal(image.id)}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3">
              <p className="text-gray-700 text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
              onClick={closeModal}
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            
            <div className="h-96 md:h-[500px]">
              <img 
                src={currentImage.src} 
                alt={currentImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-alpine-blue mb-2">{currentImage.alt}</h3>
              <p className="text-gray-700">{currentImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
