import React from 'react'
import { Users } from 'lucide-react'

const figures = [
  {
    name: "Guillaume Tell",
    period: "XIVe siècle (légendaire)",
    contribution: "Héros légendaire de l'indépendance suisse",
    image: "https://images.unsplash.com/photo-1594708053019-5336680bbc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Figure emblématique de la résistance contre les Habsbourg, connu pour avoir refusé de s'incliner devant le chapeau du bailli autrichien et pour avoir dû tirer une flèche sur une pomme placée sur la tête de son fils."
  },
  {
    name: "Ulrich Zwingli",
    period: "1484-1531",
    contribution: "Réformateur protestant",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Prêtre et humaniste, il initia la Réforme protestante à Zurich dès 1519. Ses idées réformatrices ont profondément influencé la théologie et la politique suisses. Il mourut lors de la bataille de Kappel en 1531."
  },
  {
    name: "Jean Calvin",
    period: "1509-1564",
    contribution: "Théologien et réformateur",
    image: "https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Théologien français qui transforma Genève en 'Rome protestante'. Son influence s'étendit bien au-delà des frontières suisses, façonnant le protestantisme réformé dans toute l'Europe et l'Amérique du Nord."
  },
  {
    name: "Henri Dunant",
    period: "1828-1910",
    contribution: "Fondateur de la Croix-Rouge",
    image: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Homme d'affaires genevois qui, témoin de la bataille de Solférino (1859), initia la création de la Croix-Rouge et contribua à l'élaboration de la première Convention de Genève. Premier lauréat du prix Nobel de la paix en 1901."
  },
  {
    name: "Alfred Escher",
    period: "1819-1882",
    contribution: "Homme politique et entrepreneur",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Figure majeure du XIXe siècle suisse, il contribua à la modernisation du pays en fondant le Crédit Suisse, l'École polytechnique fédérale de Zurich et en développant le réseau ferroviaire, notamment le tunnel du Gothard."
  },
  {
    name: "Le Corbusier",
    period: "1887-1965",
    contribution: "Architecte et urbaniste",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Né Charles-Édouard Jeanneret-Gris à La Chaux-de-Fonds, il devint l'un des architectes les plus influents du XXe siècle, pionnier du mouvement moderne et du style international en architecture."
  },
  {
    name: "Carl Gustav Jung",
    period: "1875-1961",
    contribution: "Psychiatre et psychanalyste",
    image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Fondateur de la psychologie analytique, il développa des concepts comme l'inconscient collectif, les archétypes et l'individuation. Son travail a profondément influencé la psychologie, la psychiatrie et les études culturelles."
  },
  {
    name: "Ruth Dreifuss",
    period: "1940-",
    contribution: "Première femme présidente de la Confédération",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Membre du Parti socialiste, elle fut conseillère fédérale de 1993 à 2002 et devint la première femme présidente de la Confédération en 1999. Elle a œuvré notamment dans les domaines de la santé et des affaires sociales."
  }
]

const HistoricalFigures: React.FC = () => {
  return (
    <section id="figures" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Users className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Personnages Historiques Marquants</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {figures.map((figure, index) => (
          <div key={index} className="card group">
            <div className="h-48 overflow-hidden">
              <img 
                src={figure.image} 
                alt={figure.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-serif font-bold text-alpine-blue">{figure.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{figure.period}</p>
              <p className="text-swiss-red font-medium mb-2">{figure.contribution}</p>
              <p className="text-gray-700 text-sm">{figure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HistoricalFigures
