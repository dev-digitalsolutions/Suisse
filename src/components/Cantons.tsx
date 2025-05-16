import React, { useState } from 'react'
import { Map, Info } from 'lucide-react'

const cantons = [
  { 
    id: "zh", 
    name: "Zurich", 
    founded: "1351", 
    capital: "Zurich",
    population: "1,539,275",
    languages: "Allemand",
    description: "Canton le plus peuplé de Suisse, Zurich est un centre économique et culturel majeur. Sa capitale, du même nom, abrite de nombreuses banques, entreprises internationales et institutions culturelles."
  },
  { 
    id: "be", 
    name: "Berne", 
    founded: "1353", 
    capital: "Berne",
    population: "1,039,474",
    languages: "Allemand, Français",
    description: "Deuxième plus grand canton par sa superficie, Berne accueille la capitale fédérale. C'est un canton bilingue avec une partie germanophone et une partie francophone (Jura bernois)."
  },
  { 
    id: "lu", 
    name: "Lucerne", 
    founded: "1332", 
    capital: "Lucerne",
    population: "413,120",
    languages: "Allemand",
    description: "Situé au centre de la Suisse, Lucerne est connu pour son lac pittoresque, le pont de la Chapelle (Kapellbrücke) et son festival de musique classique. C'est une destination touristique majeure."
  },
  { 
    id: "ur", 
    name: "Uri", 
    founded: "1291", 
    capital: "Altdorf",
    population: "36,433",
    languages: "Allemand",
    description: "Canton fondateur de la Confédération, Uri est situé au cœur des Alpes suisses. Il est traversé par l'axe du Gothard, voie de communication essentielle entre le nord et le sud de l'Europe."
  },
  { 
    id: "sz", 
    name: "Schwytz", 
    founded: "1291", 
    capital: "Schwytz",
    population: "159,165",
    languages: "Allemand",
    description: "Canton fondateur qui a donné son nom à la Suisse (Schweiz). Il est connu pour le monastère d'Einsiedeln, important lieu de pèlerinage, et ses paysages préalpins."
  },
  { 
    id: "ow", 
    name: "Obwald", 
    founded: "1291", 
    capital: "Sarnen",
    population: "37,841",
    languages: "Allemand",
    description: "Partie du canton fondateur d'Unterwald, Obwald est un canton rural et montagneux. Il abrite le lac de Sarnen et une partie du lac des Quatre-Cantons."
  },
  { 
    id: "nw", 
    name: "Nidwald", 
    founded: "1291", 
    capital: "Stans",
    population: "43,087",
    languages: "Allemand",
    description: "Avec Obwald, il formait à l'origine le canton d'Unterwald. Nidwald est situé sur les rives du lac des Quatre-Cantons et est dominé par le Stanserhorn."
  },
  { 
    id: "gl", 
    name: "Glaris", 
    founded: "1352", 
    capital: "Glaris",
    population: "40,590",
    languages: "Allemand",
    description: "Canton montagneux connu pour sa démocratie directe exercée lors de la Landsgemeinde, assemblée populaire où les citoyens votent à main levée. Il est aussi réputé pour son fromage schabziger."
  },
  { 
    id: "zg", 
    name: "Zoug", 
    founded: "1352", 
    capital: "Zoug",
    population: "127,642",
    languages: "Allemand",
    description: "Petit canton prospère, Zoug est connu pour sa fiscalité avantageuse qui attire de nombreuses entreprises internationales. Il combine un centre financier moderne avec des paysages lacustres pittoresques."
  },
  { 
    id: "fr", 
    name: "Fribourg", 
    founded: "1481", 
    capital: "Fribourg",
    population: "318,714",
    languages: "Français, Allemand",
    description: "Canton bilingue situé à la frontière linguistique entre la Suisse romande et alémanique. Sa capitale, Fribourg, abrite une université fondée en 1889 et une vieille ville médiévale bien préservée."
  },
  { 
    id: "so", 
    name: "Soleure", 
    founded: "1481", 
    capital: "Soleure",
    population: "275,247",
    languages: "Allemand",
    description: "Situé au pied du Jura, Soleure est connu pour sa capitale baroque, considérée comme la plus belle ville baroque de Suisse, avec sa cathédrale St-Ours."
  },
  { 
    id: "bs", 
    name: "Bâle-Ville", 
    founded: "1501", 
    capital: "Bâle",
    population: "195,844",
    languages: "Allemand",
    description: "Plus petit canton suisse en superficie, Bâle-Ville est un important centre culturel et industriel. Bâle accueille de nombreuses entreprises pharmaceutiques, une foire d'art contemporain (Art Basel) et un carnaval renommé."
  },
  { 
    id: "bl", 
    name: "Bâle-Campagne", 
    founded: "1501/1833", 
    capital: "Liestal",
    population: "289,468",
    languages: "Allemand",
    description: "Séparé de Bâle-Ville en 1833, ce canton combine zones rurales et suburbaines. Il abrite plusieurs sites romains, dont Augusta Raurica, et des industries de haute technologie."
  },
  { 
    id: "sh", 
    name: "Schaffhouse", 
    founded: "1501", 
    capital: "Schaffhouse",
    population: "82,348",
    languages: "Allemand",
    description: "Enclavé dans l'Allemagne, Schaffhouse est connu pour les chutes du Rhin, les plus grandes chutes d'eau d'Europe. Sa capitale possède une vieille ville Renaissance bien préservée."
  },
  { 
    id: "ar", 
    name: "Appenzell Rhodes-Extérieures", 
    founded: "1513", 
    capital: "Herisau",
    population: "55,234",
    languages: "Allemand",
    description: "Canton rural connu pour ses paysages vallonnés, ses fermes dispersées et ses traditions folkloriques. Il s'est séparé des Rhodes-Intérieures en 1597 pour des raisons confessionnelles (protestant vs. catholique)."
  },
  { 
    id: "ai", 
    name: "Appenzell Rhodes-Intérieures", 
    founded: "1513", 
    capital: "Appenzell",
    population: "16,145",
    languages: "Allemand",
    description: "Plus petit canton de Suisse par sa population, il maintient de fortes traditions, dont la Landsgemeinde. Région touristique, il est connu pour ses costumes traditionnels et son fromage Appenzeller."
  },
  { 
    id: "sg", 
    name: "Saint-Gall", 
    founded: "1803", 
    capital: "Saint-Gall",
    population: "510,734",
    languages: "Allemand",
    description: "Canton du nord-est de la Suisse, Saint-Gall est connu pour son abbaye bénédictine fondée au VIIe siècle, dont la bibliothèque est inscrite au patrimoine mondial de l'UNESCO. C'est aussi un centre textile historique."
  },
  { 
    id: "gr", 
    name: "Grisons", 
    founded: "1803", 
    capital: "Coire",
    population: "199,021",
    languages: "Allemand, Italien, Romanche",
    description: "Plus grand canton suisse, les Grisons sont connus pour leurs stations de ski (St. Moritz, Davos) et le Parc National Suisse. C'est le seul canton trilingue, où le romanche, quatrième langue nationale, est encore parlé."
  },
  { 
    id: "ag", 
    name: "Argovie", 
    founded: "1803", 
    capital: "Aarau",
    population: "685,424",
    languages: "Allemand",
    description: "Situé au nord de la Suisse, l'Argovie est traversé par plusieurs rivières (Aar, Reuss, Limmat). Il abrite de nombreux châteaux médiévaux et les thermes de Baden, connus depuis l'époque romaine."
  },
  { 
    id: "tg", 
    name: "Thurgovie", 
    founded: "1803", 
    capital: "Frauenfeld",
    population: "279,547",
    languages: "Allemand",
    description: "Canton du nord-est bordant le lac de Constance, la Thurgovie est une région agricole connue pour ses vergers et ses cultures fruitières. C'est le principal producteur de pommes en Suisse."
  },
  { 
    id: "ti", 
    name: "Tessin", 
    founded: "1803", 
    capital: "Bellinzone",
    population: "351,491",
    languages: "Italien",
    description: "Seul canton entièrement italophone, le Tessin combine influences méditerranéennes et alpines. Il est connu pour ses lacs (Lugano, Majeur), ses vallées pittoresques et son architecture lombarde."
  },
  { 
    id: "vd", 
    name: "Vaud", 
    founded: "1803", 
    capital: "Lausanne",
    population: "805,098",
    languages: "Français",
    description: "Deuxième canton le plus peuplé, Vaud s'étend du Jura au Léman et aux Alpes. Il abrite Lausanne, siège du CIO, des vignobles en terrasses (Lavaux, patrimoine UNESCO) et de prestigieuses écoles (EPFL)."
  },
  { 
    id: "vs", 
    name: "Valais", 
    founded: "1815", 
    capital: "Sion",
    population: "345,525",
    languages: "Français, Allemand",
    description: "Canton alpin bilingue, le Valais est connu pour ses sommets (dont le Cervin), ses stations de ski (Zermatt, Verbier), ses vignobles et le barrage de la Grande Dixence, l'un des plus hauts du monde."
  },
  { 
    id: "ne", 
    name: "Neuchâtel", 
    founded: "1815", 
    capital: "Neuchâtel",
    population: "176,850",
    languages: "Français",
    description: "Situé dans le Jura, Neuchâtel est connu pour son horlogerie de précision, son lac et ses vignobles. C'était une principauté prussienne avant de devenir un canton suisse."
  },
  { 
    id: "ge", 
    name: "Genève", 
    founded: "1815", 
    capital: "Genève",
    population: "499,480",
    languages: "Français",
    description: "Canton le plus occidental, Genève est un centre diplomatique international, siège de nombreuses organisations (ONU, CICR, OMC). C'était un centre de la Réforme protestante sous Jean Calvin."
  },
  { 
    id: "ju", 
    name: "Jura", 
    founded: "1979", 
    capital: "Delémont",
    population: "73,584",
    languages: "Français",
    description: "Plus récent canton suisse, créé en 1979 après s'être séparé de Berne. Région francophone et catholique, le Jura est connu pour son horlogerie, son élevage de chevaux Franches-Montagnes et ses paysages karstiques."
  }
]

const Cantons: React.FC = () => {
  const [selectedCanton, setSelectedCanton] = useState<string | null>(null)
  
  const cantonData = selectedCanton 
    ? cantons.find(canton => canton.id === selectedCanton) 
    : null

  return (
    <section id="cantons" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Map className="h-8 w-8 text-swiss-red" />
        <h2 className="section-title">Les 26 Cantons Suisses</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-parchment p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cantons.map((canton) => (
              <button
                key={canton.id}
                className={`p-3 rounded-md text-center transition-colors ${
                  selectedCanton === canton.id 
                    ? 'bg-swiss-red text-white' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCanton(canton.id)}
              >
                <div className="font-serif font-bold">{canton.name}</div>
                <div className="text-xs opacity-80">Depuis {canton.founded}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          {cantonData ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif font-bold text-alpine-blue mb-2">
                {cantonData.name}
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Fondation</p>
                  <p className="font-medium">{cantonData.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Capitale</p>
                  <p className="font-medium">{cantonData.capital}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Population</p>
                  <p className="font-medium">{cantonData.population}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Langues</p>
                  <p className="font-medium">{cantonData.languages}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{cantonData.description}</p>
              </div>
            </div>
          ) : (
            <div className="bg-alpine-light rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-full">
              <Info className="h-12 w-12 text-alpine-blue mb-4" />
              <p className="text-center text-gray-700">
                Sélectionnez un canton pour voir ses informations détaillées
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cantons
