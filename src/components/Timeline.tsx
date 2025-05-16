import React from 'react'
import { Calendar } from 'lucide-react'

const timelineEvents = [
  {
    year: "1291",
    title: "Pacte fédéral",
    description: "Signature du Pacte fédéral par les trois cantons primitifs (Uri, Schwytz et Unterwald), considéré comme l'acte fondateur de la Confédération suisse."
  },
  {
    year: "1315",
    title: "Bataille de Morgarten",
    description: "Première victoire des Confédérés contre les Habsbourg, renforçant l'indépendance de la jeune confédération."
  },
  {
    year: "1353",
    title: "Confédération des VIII cantons",
    description: "Avec l'entrée de Berne, la Confédération compte désormais huit cantons (avec Uri, Schwytz, Unterwald, Lucerne, Zurich, Glaris et Zoug)."
  },
  {
    year: "1481-1513",
    title: "Confédération des XIII cantons",
    description: "Expansion de la Confédération avec l'ajout de Fribourg, Soleure, Bâle, Schaffhouse et Appenzell."
  },
  {
    year: "1515",
    title: "Bataille de Marignan",
    description: "Défaite des Suisses face aux Français, marquant la fin de l'expansion territoriale et le début de la neutralité suisse."
  },
  {
    year: "1648",
    title: "Indépendance reconnue",
    description: "La Paix de Westphalie reconnaît officiellement l'indépendance de la Suisse vis-à-vis du Saint-Empire romain germanique."
  },
  {
    year: "1798-1803",
    title: "République helvétique",
    description: "Période d'occupation française et de centralisation forcée sous Napoléon Bonaparte."
  },
  {
    year: "1815",
    title: "Congrès de Vienne",
    description: "Reconnaissance internationale de la neutralité perpétuelle de la Suisse."
  },
  {
    year: "1848",
    title: "État fédéral moderne",
    description: "Adoption de la première Constitution fédérale, transformant la confédération d'États en un État fédéral moderne."
  },
  {
    year: "1971",
    title: "Droit de vote des femmes",
    description: "Introduction du droit de vote et d'éligibilité des femmes au niveau fédéral."
  },
  {
    year: "2002",
    title: "Entrée à l'ONU",
    description: "La Suisse devient membre à part entière de l'Organisation des Nations Unies."
  }
]

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Chronologie de l'Histoire Suisse</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="font-serif font-bold text-2xl text-swiss-red mb-1">{event.year}</div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
