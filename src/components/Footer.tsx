import React from 'react'
import { Flag, Mail, ExternalLink, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-alpine-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flag className="h-6 w-6 text-swiss-red" />
              <span className="font-serif text-xl font-bold">Histoire Suisse</span>
            </div>
            <p className="text-gray-300 mb-4">
              Un voyage à travers les siècles d'une nation unique au cœur de l'Europe.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-swiss-red" />
              <span className="text-sm">Créé avec passion pour l'histoire suisse</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Chronologie</a>
              </li>
              <li>
                <a href="#periodes" className="text-gray-300 hover:text-white transition-colors">Périodes Historiques</a>
              </li>
              <li>
                <a href="#figures" className="text-gray-300 hover:text-white transition-colors">Personnages Marquants</a>
              </li>
              <li>
                <a href="#cantons" className="text-gray-300 hover:text-white transition-colors">Les Cantons</a>
              </li>
              <li>
                <a href="#galerie" className="text-gray-300 hover:text-white transition-colors">Galerie</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ressources Externes</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.admin.ch/gov/fr/accueil/conseil-federal/histoire-du-conseil-federal.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Histoire officielle suisse</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.nationalmuseum.ch/f/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Musée National Suisse</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://hls-dhs-dss.ch/fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Dictionnaire historique de la Suisse</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <a 
                href="mailto:info@histoire-suisse.ch" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <Mail className="h-4 w-4" />
                <span>info@histoire-suisse.ch</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Histoire Suisse. Tous droits réservés.</p>
          <p className="mt-1">Les images proviennent d'Unsplash et sont utilisées à des fins éducatives.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
