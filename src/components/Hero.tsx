import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline')
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          L'Histoire de la Suisse
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Un voyage à travers les siècles d'une nation unique au cœur de l'Europe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToTimeline}
            className="btn btn-primary"
          >
            Découvrir l'Histoire
          </button>
          <a 
            href="#galerie" 
            className="btn btn-outline"
          >
            Explorer la Galerie
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToTimeline}
            className="text-white"
            aria-label="Défiler vers le bas"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
