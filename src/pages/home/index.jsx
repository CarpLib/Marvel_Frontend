import "./home.scss";

// Images

import SpiderBandeau from "../../assets/img/spider_bandeau.png";
import IronManBandeau from "../../assets/img/ironMan_bandeau.jpg";
import HulkBandeau from "../../assets/img/hulk_bandeau.jpg";
import CaptainBandeau from "../../assets/img/america_bandeau.png";

import Column from "../../components/Column";
import { useState } from "react";

export default function Index() {
  const [expandedColumn, setExpandedColumn] = useState(null);
  const bandeaux = [SpiderBandeau, IronManBandeau, HulkBandeau, CaptainBandeau];
  const columnsContent = [
    {
      title: "Univers",
      content: [
        <p key={1}>
          <strong className="bold-txt">L'univers Marvel</strong> est un vaste
          monde de fiction qui englobe une multitude de super-héros, de
          super-vilains, d'aliens, de dieux, de magiciens, de monstres et bien
          plus encore. Cet univers est principalement présenté à travers des
          bandes dessinées, des films, des séries télévisées et des jeux vidéo.
        </p>,
        <p key={2}>
          Créé par Marvel Comics, l'univers Marvel a commencé avec la
          <strong className="bold-txt">
            publication de bandes dessinées dans les années 1940
          </strong>
          , notamment avec l'introduction du super-héros Captain America pendant
          la Seconde Guerre mondiale. Cependant, c'est dans les années 1960,
          sous la direction de Stan Lee, Jack Kirby et Steve Ditko, que
          l'univers Marvel a vraiment commencé à prendre forme avec
          l'introduction de personnages iconiques tels que Spider-Man, les
          X-Men, Iron Man, Thor, Hulk, les Quatre Fantastiques et bien d'autres.
        </p>,
        <p key={3}>
          L'univers Marvel est connu pour sa complexité et sa continuité, avec
          des histoires qui s'entrecroisent souvent entre différents personnages
          et séries. De nombreux événements majeurs ont eu lieu dans cet
          univers, comme la saga du gant de l'infini, la guerre civile des
          super-héros, l'invasion secrète des Skrulls, et bien d'autres.
        </p>,
        <p key={4}>
          Dans <strong className="bold-txt">les années 2000</strong>, l'univers
          Marvel s'est étendu au-delà des bandes dessinées pour inclure un
          univers cinématographique interconnecté, connu sous le nom de{" "}
          <strong className="bold-txt">Marvel Cinematic Universe (MCU)</strong>.
          Le MCU a débuté avec le film "Iron Man" en 2008 et comprend une série
          de films et de séries télévisées qui racontent une histoire continue,
          avec des personnages et des événements qui se chevauchent.
        </p>,
        <p key={5}>
          L'univers Marvel est caractérisé par son mélange de science-fiction,
          de fantastique, de magie et de réalisme, avec des personnages souvent
          confrontés à des problèmes réels et des dilemmes moraux en plus de
          leurs aventures de super-héros. L'univers est également connu pour son
          humour, son utilisation de l'ironie et son penchant pour briser le
          quatrième mur, en particulier avec des personnages comme Deadpool.
        </p>,
        <p key={5}>
          En résumé, l'univers Marvel est un monde riche et diversifié, avec une
          histoire qui s'étend sur plusieurs décennies et un large éventail de
          personnages et d'histoires. Que ce soit à travers des{" "}
          <strong className="bold-txt">
            bandes dessinées, des films, des séries télévisées ou des jeux vidéo
          </strong>{" "}
          , il continue d'attirer des millions de fans à travers le monde.
        </p>,
      ],
    },
    {
      title: "Personnages",
      content: [
        <p key={1}>
          <strong className="bold-txt">Spider-Man (Peter Parker)</strong> :
          Mordu par une araignée radioactive, l'étudiant Peter Parker développe
          des capacités d'araignée. Après la mort de son oncle Ben, Peter
          comprend qu'avec de grands pouvoirs viennent de grandes
          responsabilités, et devient Spider-Man.
        </p>,
        <p key={2}>
          <strong className="bold-txt">Iron Man (Tony Stark)</strong> : Génie,
          milliardaire, playboy et philanthrope, Tony Stark est gravement blessé
          lors d'une attaque et crée une armure de haute technologie pour sauver
          sa propre vie. Il devient alors Iron Man, utilisant son armure pour
          protéger le monde.
        </p>,
        <p key={3}>
          <strong className="bold-txt">Captain America (Steve Rogers)</strong> :
          Faible et chétif, Steve Rogers est transformé en super-soldat par le
          sérum du super soldat pendant la Seconde Guerre mondiale. Avec son
          bouclier indestructible, il devient Captain America et lutte pour la
          justice.
        </p>,
        <p key={4}>
          <strong className="bold-txt">Thor</strong> : Dieu du tonnerre
          d'Asgard, Thor possède le marteau enchanté Mjolnir, qui lui confère le
          pouvoir de contrôler les tempêtes et de voler. Il est un membre clé
          des Avengers.
        </p>,
        <p key={5}>
          <strong className="bold-txt">Hulk (Bruce Banner)</strong> : Le
          scientifique Bruce Banner est exposé à des radiations gamma et se
          transforme en monstre vert géant lorsqu'il est en colère. Il est
          membre des Avengers et l'un des héros les plus puissants de la Terre.
        </p>,
        <p key={6}>
          <strong className="bold-txt">Black Widow (Natasha Romanoff)</strong> :
          Ancienne espionne du KGB, Natasha Romanoff, alias Black Widow, est
          devenue une agente du S.H.I.E.L.D. et une membre des Avengers,
          utilisant ses compétences exceptionnelles en combat et en espionnage
          pour protéger le monde.
        </p>,
        <p key={7}>
          <strong className="bold-txt">Wolverine (Logan)</strong> : Membre des
          X-Men, Wolverine possède des griffes rétractables, des sens aiguisés
          et un facteur de guérison rapide qui lui permet de récupérer de
          n'importe quelle blessure. Son squelette est renforcé avec
          l'adamantium, un métal indestructible.
        </p>,
      ],
    },
    {
      title: "Comics",
      content: [
        <p key={1}>
          <strong className="bold-txt">The Amazing Spider-Man</strong> : Lancé
          en 1963, c'est le comic book principal qui met en scène Spider-Man. Il
          a introduit des personnages tels que Mary Jane Watson, Venom et le
          Bouffon Vert.
        </p>,
        <p key={2}>
          <strong className="bold-txt">The Uncanny X-Men</strong> : Cette série
          a débuté en 1963 et met en scène l'équipe de mutants connue sous le
          nom de X-Men. Elle a introduit des personnages tels que Wolverine,
          Storm, Colossus et Nightcrawler.
        </p>,
        <p key={3}>
          <strong className="bold-txt">The Avengers</strong> : Depuis 1963,
          cette série met en scène l'équipe de super-héros appelée les Avengers.
          Elle a introduit des personnages et des équipes emblématiques comme
          Vision, Scarlet Witch, et les West Coast Avengers.
        </p>,
        <p key={4}>
          <strong className="bold-txt">The Fantastic Four</strong> : Lancé en
          1961, ce comic a introduit le monde à la première équipe de
          super-héros de Marvel, les Fantastic Four. Il a également introduit
          des personnages et des concepts importants comme Doctor Doom, Silver
          Surfer, Black Panther et les Inhumans.
        </p>,
        <p key={5}>
          <strong className="bold-txt">Iron Man (Tales of Suspense)</strong> :
          Iron Man a fait ses débuts dans Tales of Suspense #39 en 1963 avant
          d'obtenir sa propre série. Le personnage a joué un rôle central dans
          des événements majeurs de l'univers Marvel, comme la Guerre Civile.
        </p>,
        <p key={6}>
          <strong className="bold-txt">
            Captain America (Captain America Comics)
          </strong>{" "}
          : Créé pendant la Seconde Guerre mondiale, Captain America a d'abord
          combattu les nazis dans sa série originale avant d'être réintroduit
          dans l'univers Marvel moderne.
        </p>,
        <p key={7}>
          <strong className="bold-txt">Thor (Journey into Mystery)</strong> :
          Thor a fait ses débuts dans Journey into Mystery #83 en 1962. Le
          personnage a été un pilier de l'univers Marvel depuis lors, avec des
          histoires allant de la mythologie nordique à la science-fiction
          cosmique.
        </p>,
        <p key={8}>
          <strong className="bold-txt">
            Black Widow (In the Name of the Rose)
          </strong>{" "}
          : Bien que Black Widow ait été introduite dans les pages de Tales of
          Suspense, ce run de Marjorie Liu en 2010 a permis d'explorer plus en
          profondeur le personnage et son passé.
        </p>,
      ],
    },
    {
      title: "Anecdotes",
      content: [
        <p key={1}>
          <strong className="bold-txt">Le nom "Marvel"</strong> : Avant de
          s'appeler Marvel, la société s'appelait Timely Comics puis Atlas
          Comics. Le nom "Marvel Comics" a été utilisé pour la première fois en
          1939, mais n'est devenu le nom officiel de la société qu'en 1961.
        </p>,
        <p key={2}>
          <strong className="bold-txt">L'origine de Spider-Man</strong> :
          Lorsque Stan Lee a proposé l'idée de Spider-Man pour la première fois,
          son éditeur a rejeté le concept parce qu'il pensait que les gens
          détesteraient le personnage. Les araignées étaient généralement
          détestées et il pensait que cela s'appliquerait aussi à un super-héros
          basé sur une araignée. Heureusement pour nous, Stan Lee a continué
          avec son idée et Spider-Man est devenu l'un des super-héros les plus
          aimés de tous les temps.
        </p>,
        <p key={3}>
          <strong className="bold-txt">Black Widow</strong> devait être un{" "}
          <strong className="bold-txt">personnage masculin</strong> : À
          l'origine, le personnage de Black Widow était censé être un homme. Son
          nom était le Comte Nefaria. Cependant, Marvel a décidé d'introduire
          une Black Widow féminine, Natasha Romanoff, qui est depuis devenue
          l'un des personnages les plus emblématiques de l'univers Marvel.
        </p>,
        <p key={4}>
          <strong className="bold-txt">
            Le "non" de Jack Kirby à Spider-Man
          </strong>{" "}
          : Lorsque Stan Lee a proposé l'idée de Spider-Man, il a demandé à Jack
          Kirby de dessiner le personnage. Cependant, Stan Lee n'a pas aimé
          l'interprétation de Kirby, qui a fait de Spider-Man un personnage fort
          et héroïque dès le départ. Stan Lee voulait que Spider-Man soit plus
          relatable, un adolescent maladroit qui acquiert des super-pouvoirs.
          Finalement, c'est Steve Ditko qui a donné à Spider-Man son apparence
          emblématique.
        </p>,
        <p key={5}>
          <strong className="bold-txt">Le premier super-héros de Marvel</strong>{" "}
          : Le premier super-héros de Marvel était Namor the Sub-Mariner, qui a
          fait ses débuts dans Marvel Comics #1 en 1939. Namor est un hybride
          mi-humain, mi-atlante qui possède des pouvoirs aquatiques comme la
          capacité de respirer sous l'eau et de nager à des vitesses
          surhumaines.
        </p>,
        <p key={6}>
          <strong className="bold-txt">
            L'inspiration pour le Surfer d'Argent
          </strong>{" "}
          : Le Surfer d'Argent, un des personnages les plus philosophiques de
          l'univers Marvel, a été créé par Jack Kirby lorsqu'il a dessiné une
          planche pour "Fantastic Four" où il a introduit les personnages de
          Galactus et du Surfer d'Argent sans en parler à Stan Lee. Stan Lee a
          aimé le personnage et a décidé de le garder, ajoutant ses propres
          idées pour faire du Surfer d'Argent un personnage plus profond et plus
          complexe.
        </p>,
        <p key={7}>
          <strong className="bold-txt">Iron Man et la Guerre Froide</strong> :
          Iron Man a été créé pendant la Guerre Froide et sa création a été
          directement influencée par cette période. Stan Lee a voulu créer un
          personnage qui incarnait l'industrie de l'armement et qui serait
          pourtant aimé des lecteurs. Il a réussi, faisant d'Iron Man l'un des
          personnages les plus populaires de Marvel.
        </p>,
      ],
    },
  ];

  const handleColumnClick = (id) => {
    setExpandedColumn(id);
  };
  return (
    <div
      className="home"
      onClick={(event) => {
        setExpandedColumn(null);
      }}
    >
      <div className="columns-container">
        {columnsContent.map((content, index) => (
          <Column
            key={index}
            isExpanded={expandedColumn === index}
            title={content.title}
            content={content.content}
            backgroundImage={bandeaux[index]}
            onClick={(event) => {
              event.stopPropagation();
              handleColumnClick(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
