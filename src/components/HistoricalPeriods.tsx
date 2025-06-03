import React from 'react'
import { Clock, Scroll, Crown, Building, Users } from 'lucide-react'

const periods = [
  {
    id: 1,
    title: "Préhistoire et Antiquité",
    period: "40000 av. J.-C. - 400 apr. J.-C.",
    subtitle: "Des premiers habitants aux influences romaines",
    description: "Les premières traces d'occupation humaine en Suisse remontent à environ 40000 ans avant J.-C. Durant l'âge du bronze et l'âge du fer, plusieurs cultures se sont développées, notamment la culture de Hallstatt et La Tène, associées aux Celtes. À partir de 58 av. J.-C., les Romains conquièrent progressivement le territoire, y établissant des villes comme Augusta Raurica (Augst) et Aventicum (Avenches). L'influence romaine a profondément marqué la région, apportant routes, commerce et urbanisation.",
    image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Clock
  },
  {
    id: 2,
    title: "Moyen Âge",
    period: "400 - 1500",
    subtitle: "Formation des premières alliances",
    description: "Après la chute de l'Empire romain, la région passe sous domination franque puis fait partie du Saint-Empire romain germanique. C'est durant cette période que naissent les premières alliances entre communautés alpines. En 1291, Uri, Schwyz et Unterwald signent le Pacte fédéral, acte fondateur de la Confédération suisse. Les siècles suivants voient l'expansion progressive de cette alliance, avec l'adhésion de nouveaux cantons et la consolidation de l'indépendance face aux Habsbourg.",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Scroll
  },
  {
    id: 3,
    title: "Renaissance et Réforme",
    period: "1500 - 1648",
    subtitle: "Transformations religieuses et politiques",
    description: "La Renaissance apporte de profonds changements en Suisse. La Réforme protestante, menée par Huldrych Zwingli à Zurich et Jean Calvin à Genève, divise le pays entre cantons catholiques et protestants. Cette période voit également l'expansion territoriale de la Confédération et sa reconnaissance internationale. Les guerres de religion marquent cette époque, culminant avec la Paix de Westphalie en 1648 qui reconnaît officiellement l'indépendance suisse du Saint-Empire.",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Crown
  },
  {
    id: 4,
    title: "État fédéral moderne",
    period: "1848 - présent",
    subtitle: "Naissance de la Suisse contemporaine",
    description: "Après la guerre du Sonderbund en 1847, la Suisse adopte sa première Constitution fédérale en 1848, transformant la confédération d'États en un État fédéral moderne. Cette période marque le début de la Suisse contemporaine avec l'établissement d'institutions démocratiques stables, le développement économique rapide et l'affirmation de la neutralité. L'industrialisation, l'expansion du réseau ferroviaire et l'émergence du secteur bancaire caractérisent cette transformation.",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Building
  },
  {
    id: 5,
    title: "Suisse contemporaine",
    period: "1945 - aujourd'hui",
    subtitle: "Prospérité et engagement international",
    description: "Après la Seconde Guerre mondiale, la Suisse connaît une période de prospérité exceptionnelle. Le pays développe son rôle d'intermédiaire international, accueillant de nombreuses organisations internationales. L'adhésion à l'ONU en 2002 marque une nouvelle étape dans l'engagement international suisse, tout en préservant sa neutralité traditionnelle. L'innovation technologique, la qualité de vie et la stabilité politique font de la Suisse moderne un modèle reconnu mondialement.",
    image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Users
  }
]

const HistoricalPeriods: React.FC = () => {
  return (
    <section id="periodes" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Scroll className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Périodes Historiques</h2>
      </div>

      <div className="space-y-12">
        {periods.map((period, index) => {
          const IconComponent = period.icon
          return (
            <div key={period.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="card overflow-hidden">
                  <img 
                    src={period.image} 
                    alt={period.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <IconComponent className="h-6 w-6 text-swiss-red" />
                  <span className="text-sm font-medium text-swiss-red uppercase tracking-wide">
                    {period.period}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-alpine-blue">
                  {period.title}
                </h3>
                
                <h4 className="text-lg font-medium text-gray-600">
                  {period.subtitle}
                </h4>
                
                <p className="text-gray-700 leading-relaxed">
                  {period.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HistoricalPeriods
