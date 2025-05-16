import React, { useState } from 'react'
import { Clock, ChevronRight } from 'lucide-react'

const periods = [
  {
    id: "prehistoire",
    title: "Préhistoire et Antiquité",
    years: "40000 av. J.-C. - 400 apr. J.-C.",
    summary: "Des premiers habitants aux influences romaines",
    content: "Les premières traces d'occupation humaine en Suisse remontent à environ 40000 ans avant J.-C. Durant l'âge du bronze et l'âge du fer, plusieurs cultures se sont développées, notamment la culture de Hallstatt et La Tène, associées aux Celtes. À partir de 58 av. J.-C., les Romains conquirent progressivement le territoire, y établissant des villes comme Augusta Raurica (Augst) et Aventicum (Avenches). L'influence romaine a profondément marqué la région, apportant routes, commerce et urbanisation.",
    image: "https://images.unsplash.com/photo-1597413545419-4013d5d2914c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "moyen-age",
    title: "Moyen Âge",
    years: "400 - 1500",
    summary: "De la domination germanique à la naissance de la Confédération",
    content: "Après la chute de l'Empire romain, le territoire suisse fut occupé par différentes tribus germaniques, notamment les Alamans et les Burgondes. Au VIIIe siècle, la région passa sous domination franque. C'est au Moyen Âge tardif que naquit la Confédération suisse, avec le pacte de 1291 entre Uri, Schwytz et Unterwald. Cette alliance, formée pour résister aux Habsbourg, s'agrandit progressivement. Les victoires militaires contre les Habsbourg et les Bourguignons renforcèrent l'indépendance de la Confédération, qui comptait 13 cantons à la fin du XVe siècle.",
    image: "https://images.unsplash.com/photo-1473090826765-d54ac2fdc1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ancien-regime",
    title: "Ancien Régime",
    years: "1500 - 1798",
    summary: "Réforme, mercenariat et développement économique",
    content: "Le XVIe siècle fut marqué par la Réforme protestante, initiée à Zurich par Ulrich Zwingli et à Genève par Jean Calvin. Cette période vit aussi l'essor du mercenariat suisse, source importante de revenus. Malgré les tensions religieuses, la Confédération maintint son unité. La Paix de Westphalie (1648) reconnut officiellement l'indépendance de la Suisse. Durant cette période, l'économie se développa avec l'horlogerie, le textile et la banque, tandis que le système politique restait dominé par les élites urbaines et rurales.",
    image: "https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "moderne",
    title: "Époque Moderne",
    years: "1798 - 1914",
    summary: "De la République helvétique à l'État fédéral",
    content: "L'invasion française de 1798 mit fin à l'Ancien Régime et imposa la République helvétique centralisée. Après la période napoléonienne, le Congrès de Vienne (1815) rétablit la Confédération et garantit sa neutralité perpétuelle. Les tensions entre cantons conservateurs et libéraux culminèrent avec la guerre du Sonderbund (1847), suivie par l'adoption de la Constitution fédérale de 1848, qui transforma la Suisse en État fédéral moderne. La seconde moitié du XIXe siècle fut marquée par l'industrialisation, le développement du tourisme alpin et des innovations comme le percement du tunnel du Gothard (1882).",
    image: "https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "contemporaine",
    title: "Époque Contemporaine",
    years: "1914 - présent",
    summary: "Neutralité, prospérité et défis modernes",
    content: "La Suisse maintint sa neutralité pendant les deux guerres mondiales, tout en subissant leurs conséquences économiques et sociales. L'après-guerre fut marqué par une prospérité économique exceptionnelle et le développement du secteur bancaire international. Sur le plan politique, la démocratie directe se renforça, et le droit de vote fut accordé aux femmes en 1971. Les dernières décennies ont vu la Suisse faire face aux défis de la mondialisation, des relations avec l'Union européenne (accords bilatéraux), de l'immigration et des questions environnementales, tout en préservant son modèle de démocratie consensuelle et fédéraliste.",
    image: "https://images.unsplash.com/photo-1516550893885-985c994c8609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
]

const HistoricalPeriods: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(periods[0].id)

  const activePeriodData = periods.find(period => period.id === activePeriod)

  return (
    <section id="periodes" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Clock className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Les Grandes Périodes de l'Histoire Suisse</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-alpine-light rounded-lg p-4">
            {periods.map((period) => (
              <button
                key={period.id}
                className={`w-full text-left p-4 mb-2 rounded-md transition-colors flex items-center justify-between ${
                  activePeriod === period.id 
                    ? 'bg-swiss-red text-white' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActivePeriod(period.id)}
              >
                <div>
                  <h3 className="font-bold">{period.title}</h3>
                  <p className="text-sm opacity-80">{period.years}</p>
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${
                  activePeriod === period.id ? 'rotate-90' : ''
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {activePeriodData && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={activePeriodData.image} 
                  alt={activePeriodData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-alpine-blue mb-2">
                  {activePeriodData.title} <span className="text-sm font-normal text-gray-500 ml-2">{activePeriodData.years}</span>
                </h3>
                <p className="text-lg font-medium mb-4 text-swiss-red">{activePeriodData.summary}</p>
                <p className="text-gray-700 leading-relaxed">{activePeriodData.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HistoricalPeriods
