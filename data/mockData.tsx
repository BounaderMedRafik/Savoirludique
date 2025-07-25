import { Text } from 'react-native';
import { Book, Exercise, Video, Pricing, Subject } from '../types';

export const subjects: Subject[] = [
  {
    name: 'Mathématiques',
    level: 'moyenne',
    color: '#3498db',
  },
];

export const books: Book[] = [
  {
    id: 'b1',
    title: 'Hygiène Corporelle - Les Gestes Essentiels',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        À la maison et à l'école, les adultes parlent régulièrement de
        l'importance d'avoir les mains propres. Pourquoi le lavage des mains
        est-il si important ? Le lavage des mains consiste à se débarrasser des
        saletés, des matières grasses et des microbes qui passent facilement
        d'une personne à une autre. De la même manière, ils passent d'un objet à
        une personne. Se laver les mains, se couvrir la bouche et le nez quand
        on tousse ou quand on éternue nous permet donc d'éviter d'être malades
        et de rendre les autres malades. En effet, le toussotement et
        l'éternuement peuvent transmettre des maladies graves. C'est le
        chercheur français Louis Pasteur qui nous a le plus appris à nous
        protéger des microbes.
      </Text>
    ),
    description:
      'Découvrez les gestes simples pour une bonne hygiène corporelle et la prévention des maladies.',
    price: 300,
    isPurchased: false,
    exercises: ['e1', 'e2', 'e3'],
  },
  {
    id: 'b2',
    title: 'Pourquoi faut-il se laver les mains',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Pourquoi faut-il se laver les mains ? Le lavage des mains est un geste
        primordial dans la vie de tous les jours, qui consiste à se débarrasser
        des saletés, des microbes et des virus qui provoquent des maladies
        sérieuses. Se laver les mains, se couvrir le nez et la bouche quand on
        tousse ou quand on éternue nous permet donc d'éviter d'être malades et
        de rendre les autres malades. Apprenez à votre enfant les situations où
        il doit systématiquement se laver les mains. Vous créez ainsi de saines
        habitudes qui dureront toute la vie : - Après être allé aux toilettes,
        après avoir joué avec des animaux... - Avant de manger Alors il est
        indispensable de se laver les mains chaque jour pour les garder propres
        en utilisant du savon.
      </Text>
    ),
    description:
      "Apprenez l'importance du lavage des mains et les moments clés pour le faire.",
    price: 250,
    isPurchased: true,
    exercises: ['e4', 'e5', 'e6'],
  },
  {
    id: 'b3',
    title: "La Journée Mondiale de l'Hygiène des Mains",
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        La Journée Mondiale de l'Hygiène des Mains est célébrée le 5 mai de
        chaque année par l'Organisation Mondiale de la Santé. L'Algérie veille à
        l'amélioration de l'hygiène des mains dans les centres hospitaliers dans
        le but de diminuer les infections. En effet, ces infections constituent
        un problème majeur pour la sécurité des patients.
      </Text>
    ),
    description:
      "Découvrez l'importance de la Journée Mondiale de l'Hygiène des Mains et son application en Algérie.",
    price: 300,
    isPurchased: true,
    exercises: ['e7', 'e8', 'e9'],
  },
  {
    id: 'b4',
    title: 'Hygiène Dentaire - Comprendre les Caries',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Les caries dentaires La carie dentaire peut évoluer pendant plusieurs
        semaines sans provoquer de douleur. Mais qu'est-ce qui la provoque ? La
        carie dentaire est une infection des tissus de la dent. Elle est souvent
        provoquée par les aliments sucrés que les enfants consomment en grande
        quantité sans se brosser les dents ou pas régulièrement. Lorsqu'ils le
        font, ils n'utilisent pas un dentifrice au fluor. Chaque brossage doit
        durer trois minutes. Comme on le voit, les caries dentaires sont un
        problème de santé grave. Il doit être combattu sérieusement.
      </Text>
    ),
    description:
      "Apprenez les causes des caries dentaires et l'importance d'une bonne hygiène bucco-dentaire.",
    price: 275,
    isPurchased: false,
    exercises: ['e10', 'e11', 'e12'],
  },
  {
    id: 'b5',
    title: 'Nutrition - Une Alimentation Équilibrée',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Équilibrer et varier son alimentation Comment composer des repas sains
        et équilibrés pour tous ? Comment répondre à la fois à l'appétit, aux
        besoins nutritionnels et aux goûts de chaque membre de votre famille ?
        Bien manger : c'est adopter une alimentation variée et équilibrée,
        c'est-à-dire manger de tout mais en quantités adaptées. Cela consiste à
        privilégier les aliments bénéfiques à notre santé (fruits, légumes,
        féculents, poissons, viande...), et à limiter la consommation de
        produits sucrés (confiseries, boissons sucrées...), salés (gâteaux
        apéritifs, chips...) et gras (charcuterie, beurre, crème...). Cette
        nutrition équilibrée ne se construit pas sur un repas ou sur une journée
        mais plutôt sur la semaine.
      </Text>
    ),
    description:
      "Apprenez les principes d'une alimentation équilibrée et variée pour toute la famille.",
    price: 325,
    isPurchased: true,
    exercises: ['e14', 'e15', 'e16', 'e17'],
  },
  {
    id: 'b6',
    title: 'Nutrition - La Pyramide Alimentaire',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        La pyramide alimentaire unit les différents groupes d'aliments et leur
        proportion recommandée dans l'alimentation quotidienne. À la base de la
        pyramide on trouve les féculents comme les céréales, le pain et les
        pâtes. Au-dessus se trouvent les fruits et les légumes, suivis des
        sources de protéines comme la viande, le poisson, les œufs et les
        légumineuses. Enfin, les graisses et les sucres ajoutés.
      </Text>
    ),
    description:
      "Découvrez la structure de la pyramide alimentaire et les proportions recommandées pour chaque groupe d'aliments.",
    price: 300,
    isPurchased: true,
    exercises: ['e18', 'e19', 'e20', 'e21'],
  },
  {
    id: 'b7',
    title: 'Alimentation Équilibrée - Que Manger et Boire ?',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Que devrions-nous manger et boire ? Comme tous les êtres humains nous
        sommes obligés de manger et de boire quotidiennement, mais que doit-on
        manger et boire au juste ? La consommation de différentes sortes
        d'aliments assure une bonne santé. Un repas équilibré comprend des
        féculents (pâtes, riz ou pain) et cinq fruits et légumes par jour. Une
        petite quantité de protéines (fromage ou viande par exemple) complète le
        repas. Consommés en faible quantité, les graisses et les sucres sont des
        aliments utiles. L'eau nous est bénéfique car notre organisme en a
        besoin pour fonctionner correctement. Tous les jours, nous perdons de
        l'eau en transpirant et en urinant. C'est pour cela que nous buvons et
        mangeons des aliments contenant de l'eau, tels que des fruits, des
        légumes et de la soupe.
      </Text>
    ),
    description:
      "Découvrez les principes de base d'une alimentation équilibrée et l'importance de l'hydratation.",
    price: 280,
    isPurchased: true,
    exercises: ['e22', 'e23', 'e24', 'e25', 'e26'],
  },
  {
    id: 'b8',
    title: 'Nutrition - Le Rôle des Vitamines',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Le rôle des vitamines dans notre vie Pour grandir et rester en bonne
        santé, le corps d'un enfant a besoin d'une variété d'aliments riches en
        vitamines. Quel rôle ces vitamines jouent-elles dans l'organisme ? Pour
        bouger, l'enfant se sert de ses muscles mais aussi de ses os. Ces
        vitamines aident à la production d'énergie, luttent contre les
        infections. La vitamine A (contenue dans les carottes, les choux, les
        produits laitiers, le poisson, le foie, les abricots et les melons)
        améliore la vision, favorise la croissance. La vitamine E (contenue dans
        le beurre, le foie, l'œuf, le lait entier, la salade, le blé) lutte
        contre le cholestérol, protège le cœur. Au déjeuner et au dîner,
        assurez-vous que l'assiette de votre enfant contienne ces vitamines.
      </Text>
    ),
    description:
      "Découvrez l'importance des vitamines A et E pour la santé des enfants et les aliments qui en contiennent.",
    price: 290,
    isPurchased: true,
    exercises: ['e27', 'e28', 'e29', 'e30'],
  },
  {
    id: 'b9',
    title: 'Santé - Surpoids et Obésité chez les Enfants Algériens',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        Surpoids et obésité chez les enfants algériens « Entre 1998 et 2005,
        nous avons étudié le problème du surpoids et de l'obésité chez les
        enfants scolarisés à Tébessa. Nous avons constaté que les jeunes garçons
        âgés de 5 à 8 ans étaient plus en surpoids que les filles du même âge.
        La cause principale de l'évolution du surpoids et de l'obésité dans
        notre pays est le changement de mode de vie des Algériens. »
      </Text>
    ),
    description:
      "Étude sur le problème du surpoids et de l'obésité chez les enfants algériens et ses causes.",
    price: 320,
    isPurchased: false,
    exercises: ['e31', 'e32', 'e33', 'e34'],
  },
  {
    id: 'b10',
    title: 'Activité Physique - Les Bienfaits de la Marche à Pied',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        La marche à pied est de plus en plus pratiquée comme une activité
        sportive et est à la portée de tous. Quels sont donc ses bienfaits ? La
        marche à pied entretient la souplesse des articulations et renforce les
        os sans imposer d'effet violent. Elle améliore le rythme cardiaque et la
        capacité respiratoire. Il est en effet prouvé que marcher à raison de 30
        minutes par jour minimum permet d'éviter la prise de poids et prévient
        contre l'obésité. Plus qu'un sport, la marche à pied est un excellent
        remède contre le stress.
      </Text>
    ),
    description:
      'Découvrez les nombreux bienfaits de la marche à pied pour la santé physique et mentale.',
    price: 250,
    isPurchased: true,
    exercises: ['e35', 'e36', 'e37', 'e38'],
  },
  {
    id: 'b11',
    title: "Hygiène de Vie - L'Importance du Sport",
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        L'importance du sport Avec la propreté et une alimentation équilibrée,
        le sport assure une bonne hygiène de vie. Mais pourquoi est-il important
        de pratiquer du sport ? Le sport est une activité physique très
        importante pour le corps humain. Il est excellent pour le cœur et la
        circulation du sang, les poumons et la respiration. Il entretient les
        muscles, permet de rester mince et d'éviter l'obésité. Il y a des sports
        collectifs comme le football et le basketball et des sports individuels
        comme le karaté et l'athlétisme. Bouger et faire du sport permettent
        donc de garder une bonne forme physique et d'éviter plusieurs maladies.
      </Text>
    ),
    description:
      'Découvrez pourquoi le sport est essentiel pour une bonne hygiène de vie et la prévention des maladies.',
    price: 270,
    isPurchased: true,
    exercises: ['e39', 'e40', 'e41', 'e42'],
  },
  {
    id: 'b12',
    title: "Journée Mondiale de l'Exercice Physique",
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    content: (
      <Text>
        « Pour votre santé, bougez ! » Pourquoi l'Organisation Mondiale de la
        Santé (OMS) propose aux états membres de marquer la Journée mondiale de
        l'exercice physique le 10 mai de chaque année ? En encourageant
        l'organisation de marches, de courses de vélo, d'activités sportives de
        loisir et d'aménagement de parcs et d'espaces publics, l'OMS veut
        pousser les gens à se dépenser physiquement. Comme le déclare le Dr
        Pekka Puska, Directeur à l'OMS : "La Journée mondiale qui a pour thème «
        Pour votre santé, bougez ! » insiste sur les bienfaits de l'exercice
        physique pour la santé et le bien-être dans le monde entier. L'objectif
        consiste à associer la prévention des principales maladies chroniques,
        la promotion de la santé et le développement social." Pour tout être
        humain, l'exercice physique est un puissant moyen de prévention des
        maladies graves.
      </Text>
    ),
    description:
      "Découvrez l'importance de la Journée Mondiale de l'Exercice Physique et ses objectifs selon l'OMS.",
    price: 350,
    isPurchased: false,
    exercises: ['e43', 'e44', 'e45', 'e46', 'e47'],
  },
  {
    id: 'b13',
    title: "Éducation - L'Utilité du Sport Scolaire",
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
    content: (
      <Text>
        L'utilité du sport scolaire Certains parents n'accordent pas
        d'importance au sport. Pourtant, cette activité est essentielle pour
        plusieurs raisons : Le sport scolaire est d'abord une activité qui
        apprend la responsabilité, la citoyenneté, l'insertion scolaire et
        l'éducation à la santé. Il inculque également le respect de soi-même, le
        respect de la règle, de l'adversaire et de l'arbitre. Enfin, c'est un
        rempart contre toute forme de violence.
      </Text>
    ),
    description:
      'Découvrez les valeurs éducatives et sociales transmises par le sport scolaire.',
    price: 300,
    isPurchased: false,
    exercises: ['e48', 'e49', 'e50', 'e51'],
  },
  {
    id: 'b14',
    title: 'Football - Match de la Sélection Algérienne',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
    content: (
      <Text>
        Coupe du monde Durant la première mi-temps, la sélection algérienne a
        littéralement étouffé son adversaire et pris rapidement le dessus. C'est
        d'abord Islam Slimani qui ouvrit la marque (26°); ensuite, Rafik
        Halliche secoua les filets coréens d'une reprise de la tête (28°) puis
        ce fut le tour de Abdelmoumène Djabou (38°). Enfin, Yacine Brahimi
        alourdit la note au bout d'une action rapide.
      </Text>
    ),
    description:
      'Récit du match de la sélection algérienne durant la Coupe du Monde 2014.',
    price: 280,
    isPurchased: true,
    exercises: ['e52', 'e53', 'e54', 'e55'],
  },
  {
    id: 'b15',
    title: 'Technologie - La Montre Connectée',
    level: 'moyenne',
    subject: 'Technologie',
    content: (
      <Text>
        Qu'est-ce qu'une montre connectée ? Smart Watch autrement dit la montre
        connectée est une montre intelligente qui a des fonctions multiples. On
        peut la décrire comme un Smartphone fixé au poignet. Mais quels sont ses
        avantages ? D'abord, cette montre peut contenir les applications
        d'Android et d'iPhone. On peut accéder à ses applications et utiliser la
        montre en la connectant avec son Smartphone. Cette connexion peut se
        faire grâce au Bluetooth ou la connexion WiFi. Ensuite, elle permet
        surtout à celui qui la porte de : passer ou recevoir des appels, avoir
        accès aux applications, se servir d'Internet, se localiser grâce au GPS,
        ... Enfin, elle permet également de connaître le temps qu'il fait
        c'est-à-dire elle nous indique la température et la qualité de l'air du
        jour. Pour toutes ces raisons la Smart Watch est devenue un outil
        indispensable pour les amoureux de la haute technologie.
      </Text>
    ),
    description:
      "Découvrez les fonctionnalités et avantages d'une montre connectée (Smart Watch).",
    price: 320,
    isPurchased: false,
    exercises: ['e56', 'e57', 'e58', 'e59', 'e60'],
  },
  {
    id: 'b16',
    title: "Technologie - L'Impact d'Internet",
    level: 'moyenne',
    subject: 'Technologie',
    content: (
      <Text>
        Pourquoi Internet a-t-il changé notre mode de vie ? Pendant de
        nombreuses années, les ordinateurs étaient uniquement des outils de
        travail. C'est-à-dire des machines à calculer ou à écrire. Pourquoi
        ont-ils envahi notre vie ? Le responsable est le développement
        d'Internet. Il a étendu leur utilisation à tous les domaines de la vie
        courante. Les gens peuvent travailler depuis leur domicile car les
        réseaux de communication sont de plus en plus rapides. Grâce à cela,
        l'ordinateur occupe aujourd'hui la pièce centrale de la maison. Il sert
        de télévision, de magnétoscope ou de téléphone.
      </Text>
    ),
    description:
      "Découvrez comment Internet a transformé notre mode de vie et l'utilisation des ordinateurs.",
    price: 340,
    isPurchased: true,
    exercises: ['e61', 'e62', 'e63', 'e64'],
  },
  {
    id: 'b17',
    title: 'Transport - Le Train le Plus Rapide',
    level: 'moyenne',
    subject: 'Technologie',
    content: (
      <Text>
        Quel est le train le plus rapide ? Les trains à grande vitesse sont de
        plus en plus nombreux à circuler à travers les différents continents.
        Mais alors pourquoi le Maglev chinois est présenté comme le train en
        service commercial le plus rapide du monde ? Tout simplement parce qu'il
        peut atteindre une vitesse de 431 km/h. Le Maglev relie l'aéroport de
        Pudong à la station de Longyang Road en 7 minutes 20 secondes pour un
        parcours de 30,5 kilomètres. Il se déplace au-dessus de son rail sans le
        toucher. C'est grâce à cette technologie qu'il peut atteindre des
        vitesses élevées. De nombreux trains sont utilisés par les habitants des
        banlieues, autrement dit les gens qui habitent en dehors de la ville.
        Ils font la navette pour aller chaque jour travailler dans les grandes
        agglomérations.
      </Text>
    ),
    description:
      'Découvrez le train Maglev, le plus rapide en service commercial, et sa technologie innovante.',
    price: 360,
    isPurchased: false,
    exercises: ['e65', 'e66', 'e67', 'e68'],
  },
  {
    id: 'b18',
    title: "Environnement - La Couche d'Ozone",
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        La couche d'ozone va-t-elle disparaître ? La couche d'ozone se situe à
        plus de 16 000 mètres au-dessus de la surface terrestre. Dès 1979, des
        scientifiques ont choisi de l'observer en utilisant des satellites. L'un
        des chercheurs a fini par constater que la superficie de la couche avait
        diminué de 4 à 18%.
      </Text>
    ),
    description:
      "Explorez les découvertes scientifiques sur l'évolution de la couche d'ozone et les méthodes d'observation.",
    price: 330,
    isPurchased: false,
    exercises: ['e69', 'e70', 'e71', 'e72'],
  },
  {
    id: 'b19',
    title: 'Agriculture - Les Dangers des Pesticides',
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        Pourquoi les pesticides sont-ils dangereux ? Marc Dufumier, agronome et
        professeur, a parcouru le monde pour étudier les méthodes agricoles des
        pays du Sud. Il rêve d'un monde sans les pesticides utilisés par les
        agriculteurs pour lutter contre les parasites (insectes, microbes,
        moisissures,...). Ces produits chimiques se fixent pour une longue durée
        dans les sols et les plantes ; par conséquent ils sont dangereux pour la
        santé de l'homme.
      </Text>
    ),
    description:
      "Comprenez les risques des pesticides sur la santé humaine et l'environnement avec les recherches de Marc Dufumier.",
    price: 340,
    isPurchased: false,
    exercises: ['e73', 'e74', 'e75', 'e76'],
  },
  {
    id: 'b20',
    title: 'Environnement - Pollution des Eaux Potables',
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        Par quoi les eaux potables sont-elles le plus polluées ? Dans certaines
        régions du monde, les usines déversent directement leurs déchets
        chimiques dans la nature. En effet, plusieurs municipalités sont
        responsables de graves dérives. Elles ne procèdent pas au retraitement
        de leurs eaux usées qui sont rejetées dans les fleuves et les rivières.
        Les ordures ménagères participent aussi à la pollution des nappes
        phréatiques lorsqu'elles sont entreposées dans des décharges sauvages.
      </Text>
    ),
    description:
      'Découvrez les principales sources de pollution des eaux potables et leurs impacts environnementaux.',
    price: 350,
    isPurchased: false,
    exercises: ['e77', 'e78', 'e79', 'e80'],
  },
  {
    id: 'b21',
    title: "Environnement - La Pollution de l'Air",
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        Peux-tu m'expliquer la pollution de l'air ? L'air que nous respirons est
        de plus en plus pollué. Quelle en est la raison ? On dit que l'air est
        pollué quand il est modifié par des éléments qui sont nuisibles à notre
        santé et à notre environnement, ce sont les gaz, souvent les fumées, qui
        polluent l'air. Mais les polluants atmosphériques peuvent être d'origine
        naturelle (la fumée des volcans, certaines plantes, la foudre...).
        Malheureusement, ils sont dus pour la plupart aux activités humaines : -
        transports, - industrie, - chauffage et climatisation, - agriculture
        avec l'utilisation d'engrais, de pesticides sans oublier les émissions
        animales, - incinération des déchets, - utilisation de produits
        d'entretien, de différentes colles, - meubles en bois aggloméré... La
        conséquence de cette pollution est la multiplication des maladies
        respiratoires et le changement du climat.
      </Text>
    ),
    description:
      "Comprenez les causes et conséquences de la pollution atmosphérique d'origine naturelle et humaine.",
    price: 370,
    isPurchased: false,
    exercises: ['e81', 'e82', 'e83', 'e84', 'e85'],
  },
  {
    id: 'b22',
    title: 'Environnement - Pollution des Océans',
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        La pollution de l'eau La pollution des océans est un phénomène qui
        affecte le monde marin, autrement dit le rejet de certains éléments
        polluants menace la vie de la faune et la flore marines. Mais quelle en
        est la raison ? Le premier responsable est l'homme qui pollue les océans
        avec des eaux usées, du pétrole et les déchets d'usine. Dans cette
        dernière, on se débarrasse parfois des déchets en les mettant dans les
        fûts qui sont ensuite jetés dans la mer, par conséquent les déchets se
        répandent dans l'eau. Ils tuent ainsi des milliers de poissons et de
        mammifères comme les dauphins. Aussi, les marées noires causées par le
        pétrole déversé dans la mer polluent les côtes et engluent la fourrure
        et les plumes des oiseaux ce qui les empêche de nager ou de voler,
        allant même jusqu'à les empoisonner s'ils essaient de se nettoyer. La
        pollution de l'eau est dangereuse, et nous devons lutter tous ensemble
        contre celle-ci.
      </Text>
    ),
    description:
      'Découvrez les causes et conséquences de la pollution marine sur les écosystèmes océaniques.',
    price: 380,
    isPurchased: false,
    exercises: ['e86', 'e87', 'e88', 'e89', 'e90'],
  },
  {
    id: 'b23',
    title: 'Environnement - Pollution Atmosphérique',
    level: 'moyenne',
    subject: 'Sciences',
    content: (
      <Text>
        Peux-tu m'expliquer la pollution de l'air ? L'air que nous respirons est
        de plus en plus pollué. Quelle en est la raison ? On dit que l'air est
        pollué quand il est altéré par des éléments qui sont nuisibles à notre
        santé et à notre environnement. Ce sont des gaz, souvent les fumées, qui
        polluent l'air. Mais les polluants atmosphériques peuvent être d'origine
        naturelle (la fumée des volcans, certaines plantes, la foudre...).
        Malheureusement, ils sont dus pour la plupart aux activités humaines : -
        transports, - industrie, - chauffage et climatisation, - agriculture
        avec l'utilisation d'engrais, de pesticides sans oublier les émissions
        animales, - incinération des déchets, - utilisation de produits
        d'entretien, de différentes colles, - meubles en bois aggloméré. La
        conséquence de cette pollution est la multiplication des maladies
        respiratoires et le changement du climat.
      </Text>
    ),
    description:
      "Comprendre les sources et impacts de la pollution atmosphérique d'origine naturelle et humaine.",
    price: 370,
    isPurchased: false,
    exercises: ['e91', 'e92', 'e93', 'e94', 'e95'],
  },
];

export const exercises: Exercise[] = [
  {
    id: 'e1',
    question: 'Pourquoi le lavage des mains est-il important ?',
    options: [
      'Pour se débarrasser des saletés et des matières grasses',
      'Pour éliminer les microbes',
      'Pour éviter la transmission des maladies',
      'Toutes ces réponses',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Le lavage des mains permet de se débarrasser des saletés, des matières grasses et des microbes, ce qui aide à éviter la transmission des maladies.',
    bookId: 'b1',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e2',
    question: 'Comment les microbes peuvent-ils se transmettre ?',
    options: [
      "D'une personne à une autre",
      "D'un objet à une personne",
      'Par la toux et les éternuements',
      'Toutes ces réponses',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Les microbes peuvent se transmettre par contact entre personnes, entre objets et personnes, et par les gouttelettes produites lors de la toux ou des éternuements.',
    bookId: 'b1',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e3',
    question:
      'Qui est le chercheur français mentionné dans le texte qui a beaucoup contribué à la protection contre les microbes ?',
    options: [
      'Marie Curie',
      'Louis Pasteur',
      'Pierre et Marie Curie',
      'Albert Einstein',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne Louis Pasteur comme le chercheur français qui nous a le plus appris à nous protéger des microbes.',
    bookId: 'b1',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e4',
    question: "Que permet d'éliminer le lavage des mains selon le texte ?",
    options: [
      'Seulement les saletés visibles',
      'Les saletés, microbes et virus',
      'Seulement les mauvaises odeurs',
      'Les taches tenaces',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique que le lavage des mains permet de se débarrasser des saletés, des microbes et des virus.',
    bookId: 'b2',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e5',
    question:
      'Quand doit-on systématiquement se laver les mains selon le texte ?',
    options: [
      'Après être allé aux toilettes',
      'Avant de manger',
      'Après avoir joué avec des animaux',
      'Toutes ces réponses',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Le texte mentionne trois moments clés : après les toilettes, avant de manger, et après avoir joué avec des animaux.',
    bookId: 'b2',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e6',
    question:
      'Pourquoi est-il important de se couvrir le nez et la bouche quand on tousse ou éternue ?',
    options: [
      'Pour faire moins de bruit',
      'Pour éviter de transmettre des microbes',
      'Pour respecter les bonnes manières',
      'Pour garder ses mains propres',
    ],
    correctAnswerIndex: 1,
    explanation:
      "Le texte explique que cela permet d'éviter de rendre les autres malades en limitant la transmission des microbes.",
    bookId: 'b2',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e7',
    question: "Quand est célébrée la Journée Mondiale de l'Hygiène des Mains ?",
    options: ['Le 15 mars', 'Le 5 mai', 'Le 10 octobre', 'Le 1er décembre'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique clairement que cette journée est célébrée le 5 mai de chaque année.',
    bookId: 'b3',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e8',
    question: "Quelle organisation est à l'origine de cette journée mondiale ?",
    options: [
      "L'UNICEF",
      "L'Organisation Mondiale de la Santé",
      'La Croix-Rouge',
      "L'UNESCO",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Le texte mentionne que cette journée est organisée par l'Organisation Mondiale de la Santé.",
    bookId: 'b3',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e9',
    question:
      "Pourquoi l'Algérie améliore-t-elle l'hygiène des mains dans les hôpitaux ?",
    options: [
      'Pour réduire les coûts hospitaliers',
      'Pour diminuer les infections et améliorer la sécurité des patients',
      'Pour gagner des prix internationaux',
      'Pour augmenter le nombre de lits disponibles',
    ],
    correctAnswerIndex: 1,
    explanation:
      "Le texte explique que l'objectif est de diminuer les infections qui constituent un problème majeur pour la sécurité des patients.",
    bookId: 'b3',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e10',
    question: 'Qu une carie dentaire selon le texte ?',
    options: [
      'Une coloration des dents',
      'Une infection des tissus de la dent',
      'Une fracture de la dent',
      'Une sensibilité au froid',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte définit clairement la carie dentaire comme "une infection des tissus de la dent".',
    bookId: 'b4',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e11',
    question:
      'Quelle est la principale cause des caries mentionnée dans le texte ?',
    options: [
      'Le manque de calcium',
      'La consommation d aliments sucrés sans brossage régulier',
      'Boire de l eau trop froide',
      'Manger trop de fruits acides',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique que les caries sont "souvent provoquées par les aliments sucrés que les enfants consomment en grande quantité sans se brosser les dents".',
    bookId: 'b4',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e12',
    question:
      'Combien de temps doit durer un brossage de dents efficace selon le texte ?',
    options: ['30 secondes', '1 minute', '2 minutes', '3 minutes'],
    correctAnswerIndex: 3,
    explanation:
      'Le texte précise que "chaque brossage doit durer trois minutes".',
    bookId: 'b4',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e13',
    question:
      'Quel élément important doit contenir le dentifrice pour prévenir les caries ?',
    options: ['Du calcium', 'Du fluor', 'Du charbon actif', 'De la vitamine D'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne que les enfants "utilisent pas un dentifrice au fluor", ce qui sous-entend que cest un élément important pour la prévention.',
    bookId: 'b4',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e14',
    question: 'Qu est-ce qu une alimentation équilibrée selon le texte ?',
    options: [
      'Manger beaucoup de viande',
      'Manger de tout en quantités adaptées',
      'Éliminer tous les produits sucrés',
      'Ne manger que des fruits et légumes',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte définit une alimentation équilibrée comme "manger de tout mais en quantités adaptées".',
    bookId: 'b5',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e15',
    question: 'Quels aliments faut-il privilégier selon le texte ?',
    options: [
      'Produits sucrés et salés',
      'Fruits, légumes, féculents, poissons, viande',
      'Uniquement des produits biologiques',
      'Aliments gras et transformés',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne qu il faut "privilégier les aliments bénéfiques à notre santé (fruits, légumes, féculents, poissons, viande...)".',
    bookId: 'b5',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e16',
    question:
      'Sur quelle période doit-on évaluer l équilibre alimentaire selon le texte ?',
    options: [
      'Sur un seul repas',
      'Sur une journée',
      'Sur une semaine',
      'Sur un mois',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte précise que "cette nutrition équilibrée ne se construit pas sur un repas ou sur une journée mais plutôt sur la semaine".',
    bookId: 'b5',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e17',
    question: 'Quels types de produits faut-il limiter selon le texte ?',
    options: [
      'Produits sucrés uniquement',
      'Produits salés uniquement',
      'Produits gras uniquement',
      'Produits sucrés, salés et gras',
    ],
    correctAnswerIndex: 3,
    explanation:
      'Le texte indique qu il faut "limiter la consommation de produits sucrés (...), salés (...) et gras (...)".',
    bookId: 'b5',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e18',
    question:
      "Quel est le groupe d'aliments situé à la base de la pyramide alimentaire ?",
    options: [
      'Fruits et légumes',
      'Produits laitiers',
      'Féculents (céréales, pain, pâtes)',
      'Viandes et poissons',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte indique clairement qu\'à la base de la pyramide on trouve "les féculents comme les céréales, le pain et les pâtes".',
    bookId: 'b6',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e19',
    question:
      'Quels aliments se trouvent juste au-dessus de la base dans la pyramide ?',
    options: [
      'Graisses et sucres',
      'Fruits et légumes',
      'Produits laitiers',
      'Boissons',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise qu\'"au-dessus se trouvent les fruits et les légumes".',
    bookId: 'b6',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e20',
    question:
      'Quels sont les aliments mentionnés dans le groupe des protéines ?',
    options: [
      'Fruits secs uniquement',
      'Viande, poisson, œufs et légumineuses',
      'Céréales et pain',
      'Lait et fromage',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte liste comme sources de protéines: "la viande, le poisson, les œufs et les légumineuses".',
    bookId: 'b6',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e21',
    question:
      'Quels aliments se trouvent au sommet de la pyramide alimentaire ?',
    options: [
      'Fruits et légumes',
      'Céréales complètes',
      'Graisses et sucres ajoutés',
      'Eau et boissons non sucrées',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte conclut en mentionnant qu\'"enfin [au sommet] se trouvent les graisses et les sucres ajoutés".',
    bookId: 'b6',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e22',
    question: "Quels sont les composants d'un repas équilibré selon le texte ?",
    options: [
      'Uniquement des fruits et légumes',
      'Féculents, fruits/légumes, et un peu de protéines',
      'Beaucoup de viande et peu de légumes',
      'Surtout des graisses et des sucres',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise qu\'un repas équilibré comprend "des féculents (pâtes, riz ou pain) et cinq fruits et légumes par jour" avec "une petite quantité de protéines".',
    bookId: 'b7',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e23',
    question:
      'Combien de fruits et légumes faut-il consommer par jour selon le texte ?',
    options: ['2 portions', '3 portions', '5 portions', '7 portions'],
    correctAnswerIndex: 2,
    explanation:
      'Le texte mentionne clairement "cinq fruits et légumes par jour".',
    bookId: 'b7',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e24',
    question: 'Que dit le texte à propos des graisses et sucres ?',
    options: [
      'Il faut les éviter complètement',
      'Ce sont des aliments utiles quand ils sont consommés en faible quantité',
      "Ils doivent constituer la base de l'alimentation",
      'Ils ne servent à rien',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique que "consommés en faible quantité, les graisses et les sucres sont des aliments utiles".',
    bookId: 'b7',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e25',
    question: "Pourquoi l'eau est-elle importante selon le texte ?",
    options: [
      "Parce qu'elle est gratuite",
      "Parce qu'elle a bon goût",
      'Parce que notre organisme en a besoin pour fonctionner correctement',
      "Parce qu'elle remplace les repas",
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte explique que "l\'eau nous est bénéfique car notre organisme en a besoin pour fonctionner correctement".',
    bookId: 'b7',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e26',
    question: "Comment perdons-nous de l'eau quotidiennement selon le texte ?",
    options: [
      'En dormant seulement',
      'En parlant et en marchant',
      'En transpirant et en urinant',
      'En mangeant trop salé',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte précise que "tous les jours, nous perdons de l\'eau en transpirant et en urinant".',
    bookId: 'b7',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e27',
    question:
      "Pourquoi les enfants ont-ils besoin d'aliments riches en vitamines ?",
    options: [
      'Pour mieux dormir',
      'Pour grandir et rester en bonne santé',
      'Pour avoir plus de jouets',
      'Pour éviter de faire du sport',
    ],
    correctAnswerIndex: 1,
    explanation:
      "Le texte indique dès le début que \"pour grandir et rester en bonne santé, le corps d'un enfant a besoin d'une variété d'aliments riches en vitamines\".",
    bookId: 'b8',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e28',
    question:
      'Quels sont les bienfaits de la vitamine A mentionnés dans le texte ?',
    options: [
      'Améliore la vision et favorise la croissance',
      'Protège le cœur et réduit le cholestérol',
      "Donne de l'énergie immédiate",
      'Fait pousser les cheveux',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte précise que "la vitamine A [...] améliore la vision, favorise la croissance".',
    bookId: 'b8',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e29',
    question:
      'Dans quels aliments trouve-t-on de la vitamine E selon le texte ?',
    options: [
      'Carottes et melons',
      'Beurre et œufs',
      'Poisson et foie',
      'Pâtes et riz',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte liste comme sources de vitamine E: "le beurre, le foie, l\'œuf, le lait entier, la salade, le blé".',
    bookId: 'b8',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e30',
    question: 'Quel est le rôle général des vitamines selon le texte ?',
    options: [
      "Aident à la production d'énergie et luttent contre les infections",
      'Font perdre du poids',
      'Rendent les dents plus blanches',
      'Font grandir les plantes',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte explique que les vitamines "aident à la production d\'énergie, luttent contre les infections".',
    bookId: 'b8',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e31',
    question: "Quelle période l'étude a-t-elle couverte ?",
    options: ['1990-1995', '1998-2005', '2005-2010', '2010-2015'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise que l\'étude a été menée "entre 1998 et 2005".',
    bookId: 'b9',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e32',
    question: "Où l'étude a-t-elle été réalisée ?",
    options: ['Alger', 'Tébessa', 'Oran', 'Constantine'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne que l\'étude portait sur "les enfants scolarisés à Tébessa".',
    bookId: 'b9',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e33',
    question:
      "Quel groupe avait le plus de problèmes de surpoids selon l'étude ?",
    options: [
      'Filles de 5 à 8 ans',
      'Garçons de 5 à 8 ans',
      'Filles de 9 à 12 ans',
      'Garçons de 9 à 12 ans',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique que "les jeunes garçons âgés de 5 à 8 ans étaient plus en surpoids que les filles du même âge".',
    bookId: 'b9',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e34',
    question:
      'Quelle est la cause principale du surpoids selon les chercheurs ?',
    options: [
      'La génétique',
      'Le changement de mode de vie',
      'Le manque d écoles',
      'La pollution',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Les chercheurs attribuent principalement ce problème au "changement de mode de vie des Algériens".',
    bookId: 'b9',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e35',
    question:
      'Quel est l avantage principal de la marche sur les articulations ?',
    options: [
      'Elle les rend plus fortes sans effet violent',
      'Elle les fait grossir',
      'Elle les colore',
      'Elle les rend plus fragiles',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte indique que la marche "entretient la souplesse des articulations et renforce les os sans imposer d effet violent".',
    bookId: 'b10',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e36',
    question: 'Quel est le temps minimum recommandé de marche quotidienne ?',
    options: ['15 minutes', '30 minutes', '1 heure', '2 heures'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise qu il est prouvé que marcher à raison de 30 minutes par jour minimum  apporte des bénéfices.',
    bookId: 'b10',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e37',
    question: 'Quels problèmes de santé la marche permet-elle de prévenir ?',
    options: [
      'Prise de poids et obésité',
      'Problèmes de vue',
      'Maladies dentaires',
      'Allergies',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte mentionne que la marche "permet d éviter la prise de poids et prévient contre le obésité".',
    bookId: 'b10',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e38',
    question: 'Quel effet bénéfique supplémentaire la marche apporte-t-elle ?',
    options: [
      'Elle améliore le goût des aliments',
      'C est un remède contre le stress',
      'Elle fait pousser les cheveux',
      'Elle rend plus intelligent',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte souligne qu en "plus qu un sport, la marche à pied est un excellent remède contre le stress".',
    bookId: 'b10',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e39',
    question:
      "Quels sont les trois éléments d'une bonne hygiène de vie mentionnés dans le texte ?",
    options: [
      'Sport, jeux vidéo, télévision',
      'Propreté, alimentation équilibrée, sport',
      'Dormir, manger, travailler',
      'Lire, écrire, compter',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte commence par mentionner que "avec la propreté et une alimentation équilibrée, le sport assure une bonne hygiène de vie".',
    bookId: 'b11',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e40',
    question:
      'Quels organes bénéficient particulièrement du sport selon le texte ?',
    options: [
      'Le cœur et les poumons',
      'Le foie et les reins',
      'Les yeux et les oreilles',
      'La peau et les cheveux',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte précise que le sport est "excellent pour le cœur et la circulation du sang, les poumons et la respiration".',
    bookId: 'b11',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e41',
    question:
      "Quel problème de santé le sport permet-il d'éviter selon le texte ?",
    options: [
      'La myopie',
      "L'obésité",
      'Les caries dentaires',
      'Les allergies',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique que le sport "permet de rester mince et d éviter l obésité".',
    bookId: 'b11',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e42',
    question: 'Quels exemples de sports collectifs sont donnés dans le texte ?',
    options: [
      'Karaté et athlétisme',
      'Natation et cyclisme',
      'Football et basketball',
      'Tennis et golf',
    ],
    correctAnswerIndex: 2,
    explanation:
      'Le texte mentionne comme sports collectifs "le football et le basketball".',
    bookId: 'b11',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e43',
    question: "Quand a lieu la Journée mondiale de l'exercice physique ?",
    options: ['10 mars', '10 mai', '10 juillet', '10 octobre'],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique clairement que cette journée est célébrée "le 10 mai de chaque année".',
    bookId: 'b12',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e44',
    question: "Quelle organisation est à l'origine de cette journée mondiale ?",
    options: [
      "L'UNICEF",
      "L'Organisation Mondiale de la Santé (OMS)",
      'La Croix-Rouge',
      "L'UNESCO",
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne explicitement que cette initiative vient de "l\'Organisation Mondiale de la Santé (OMS)".',
    bookId: 'b12',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e45',
    question: 'Quel est le thème principal de cette journée ?',
    options: [
      'Mangez cinq fruits et légumes',
      'Pour votre santé, bougez !',
      'Lavez-vous les mains',
      'Dormez huit heures par nuit',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte cite le Dr Pekka Puska de l\'OMS qui mentionne que le thème est "« Pour votre santé, bougez ! »".',
    bookId: 'b12',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e46',
    question:
      "Quels types d'activités sont encouragées pendant cette journée ?",
    options: [
      'Seulement des compétitions sportives',
      'Marches, courses de vélo et activités de loisir',
      'Uniquement des cours de gym en salle',
      'Des jeux vidéo actifs',
    ],
    correctAnswerIndex: 1,
    explanation:
      "Le texte mentionne que l'OMS encourage \"l'organisation de marches, de courses de vélo, d'activités sportives de loisir\".",
    bookId: 'b12',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e47',
    question: "Quel est l'objectif principal de cette journée selon l'OMS ?",
    options: [
      'Promouvoir les sports extrêmes',
      'Associer prévention des maladies, promotion de la santé et développement social',
      'Vendre des équipements sportifs',
      'Organiser des Jeux Olympiques',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise que "l\'objectif consiste à associer la prévention des principales maladies chroniques, la promotion de la santé et le développement social".',
    bookId: 'b12',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
  },
  {
    id: 'e48',
    question:
      'Pourquoi certains parents sous-estiment-ils le sport scolaire selon le texte ?',
    options: [
      "Parce qu'ils ne connaissent pas ses bénéfices",
      "Parce qu'ils n'y accordent pas d'importance",
      "Parce qu'ils préfèrent les matières scientifiques",
      "Parce que c'est trop coûteux",
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte commence par mentionner que "certains parents n\'accordent pas d\'importance au sport".',
    bookId: 'b13',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e49',
    question:
      'Quelles valeurs le sport scolaire enseigne-t-il principalement ?',
    options: [
      'Responsabilité et citoyenneté',
      'Mathématiques et physique',
      'Cuisine et couture',
      'Peinture et musique',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte précise que le sport scolaire "apprend la responsabilité, la citoyenneté, l\'insertion scolaire et l\'éducation à la santé".',
    bookId: 'b13',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e50',
    question: 'Quels types de respect le sport scolaire inculque-t-il ?',
    options: [
      'Respect de soi et des règles seulement',
      "Respect de soi, des règles, de l'adversaire et de l'arbitre",
      "Respect uniquement de l'arbitre",
      'Respect seulement des équipements sportifs',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne que le sport "inculque le respect de soi-même, le respect de la règle, de l\'adversaire et de l\'arbitre".',
    bookId: 'b13',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e51',
    question: 'Contre quoi le sport scolaire constitue-t-il un rempart ?',
    options: [
      'Contre les mauvaises notes',
      'Contre toute forme de violence',
      'Contre les maladies',
      'Contre la fatigue',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte conclut en affirmant que le sport scolaire est "un rempart contre toute forme de violence".',
    bookId: 'b13',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e52',
    question: 'Quand ce match a-t-il eu lieu selon la source ?',
    options: ['22/06/2014', '15/07/2014', '10/05/2014', '30/06/2014'],
    correctAnswerIndex: 0,
    explanation:
      'La source en bas du texte indique "Africanews.com du 22/06/2014".',
    bookId: 'b14',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e53',
    question: 'Quel joueur a marqué le premier but ?',
    options: [
      'Rafik Halliche',
      'Islam Slimani',
      'Abdelmoumène Djabou',
      'Yacine Brahimi',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise que "c\'est d\'abord Islam Slimani qui ouvrit la marque".',
    bookId: 'b14',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e54',
    question: 'Comment Rafik Halliche a-t-il marqué son but ?',
    options: [
      'Sur penalty',
      "D'une reprise de la tête",
      'De loin hors de la surface',
      'Sur coup franc direct',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique qu\'il a "secoué les filets coréens d\'une reprise de la tête".',
    bookId: 'b14',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e55',
    question: "Quelle équipe affrontait l'Algérie dans ce match ?",
    options: [
      "L'équipe du Brésil",
      "L'équipe de Corée",
      "L'équipe de France",
      "L'équipe d'Égypte",
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte mentionne que Halliche a secoué "les filets coréens", indiquant que l\'adversaire était la Corée.',
    bookId: 'b14',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
  },
  {
    id: 'e56',
    question: 'Comment peut-on décrire simplement une montre connectée ?',
    options: [
      'Comme une télévision miniature',
      'Comme un Smartphone fixé au poignet',
      'Comme un ordinateur portable',
      'Comme une calculatrice améliorée',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte compare explicitement la montre connectée à "un Smartphone fixé au poignet".',
    bookId: 'b15',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e57',
    question: 'Comment se connecte une Smart Watch à un smartphone ?',
    options: [
      'Par câble USB seulement',
      'Via Bluetooth ou WiFi',
      'Par infrarouge',
      'Elle ne peut pas se connecter',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte précise que la connexion peut se faire "grâce au Bluetooth ou la connexion WiFi".',
    bookId: 'b15',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e58',
    question: 'Quelle fonctionnalité GPS offre la montre connectée ?',
    options: [
      'Prendre des photos',
      'Se localiser',
      'Jouer à des jeux',
      'Envoyer des emails',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Parmi les fonctions listées, le texte mentionne qu\'elle permet de "se localiser grâce au GPS".',
    bookId: 'b15',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e59',
    question: 'Quelles informations météo peut fournir la montre ?',
    options: [
      'Seulement la température',
      "La température et la qualité de l'air",
      'Les précipitations uniquement',
      'La force du vent',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte indique qu\'elle "nous indique la température et la qualité de l\'air du jour".',
    bookId: 'b15',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e60',
    question: 'Pour qui la Smart Watch est-elle particulièrement utile ?',
    options: [
      'Les collectionneurs de montres',
      'Les amoureux de la haute technologie',
      'Les sportifs professionnels uniquement',
      'Les enfants en bas âge',
    ],
    correctAnswerIndex: 1,
    explanation:
      'La conclusion du texte présente la Smart Watch comme "un outil indispensable pour les amoureux de la haute technologie".',
    bookId: 'b15',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e61',
    question: "Quel est l'objet qui a envahi notre vie selon le texte ?",
    options: [
      'Le téléphone portable',
      "L'ordinateur",
      'La télévision',
      'La tablette',
    ],
    correctAnswerIndex: 2, // Randomized position (originally 1)
    explanation:
      'Le texte parle principalement de comment "les ordinateurs ont envahi notre vie" grâce à Internet.',
    bookId: 'b16',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e62',
    question: "Qu'est-ce qui a permis cette transformation selon le texte ?",
    options: [
      'Le développement des smartphones',
      "L'invention de la télévision",
      "Le développement d'Internet",
      'La création des réseaux sociaux',
    ],
    correctAnswerIndex: 3, // Randomized position (originally 0)
    explanation:
      'Le texte indique clairement que "le responsable est le développement d\'Internet".',
    bookId: 'b16',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e63',
    question: 'Quel avantage du travail à domicile est mentionné ?',
    options: [
      'Les réseaux de communication plus rapides',
      'La baisse des salaires',
      'La réduction du temps de travail',
      'La suppression des bureaux',
    ],
    correctAnswerIndex: 1, // Randomized position (originally 0)
    explanation:
      'Le texte mentionne que "les gens peuvent travailler depuis leur domicile car les réseaux de communication sont de plus en plus rapides".',
    bookId: 'b16',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e64',
    question: "Quelles fonctions supplémentaires de l'ordinateur sont citées ?",
    options: [
      'Machine à laver et réfrigérateur',
      'Télévision, magnétoscope et téléphone',
      'Four micro-ondes et mixeur',
      'Radio et lecteur CD',
    ],
    correctAnswerIndex: 0, // Randomized position (originally 1)
    explanation:
      'Le texte précise que l\'ordinateur "sert de télévision, de magnétoscope ou de téléphone".',
    bookId: 'b16',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e65',
    question:
      'Quel est le train le plus rapide en service commercial selon le texte ?',
    options: [
      'Le TGV français',
      'Le Shinkansen japonais',
      'Le Maglev chinois',
      "L'ICE allemand",
    ],
    correctAnswerIndex: 2, // Randomized position
    explanation:
      'Le texte présente explicitement "le Maglev chinois comme le train en service commercial le plus rapide du monde".',
    bookId: 'b17',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e66',
    question: 'Quelle vitesse peut atteindre le Maglev ?',
    options: ['320 km/h', '431 km/h', '280 km/h', '380 km/h'],
    correctAnswerIndex: 0, // Randomized position
    explanation:
      'Le texte précise que le Maglev "peut atteindre une vitesse de 431 km/h".',
    bookId: 'b17',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e67',
    question: 'Quelle est la particularité technologique du Maglev ?',
    options: [
      'Il roule avec des roues en caoutchouc',
      'Il se déplace au-dessus du rail sans le toucher',
      'Il utilise des voiles pour avancer',
      "Il fonctionne à l'énergie solaire",
    ],
    correctAnswerIndex: 3, // Randomized position
    explanation:
      'Le texte explique que le Maglev "se déplace au-dessus de son rail sans le toucher".',
    bookId: 'b17',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e68',
    question:
      'Qui utilise principalement les trains de banlieue selon le texte ?',
    options: [
      'Les touristes',
      'Les habitants des banlieues qui travaillent en ville',
      'Les agriculteurs',
      'Les écoliers',
    ],
    correctAnswerIndex: 1, // Randomized position
    explanation:
      'Le texte indique que "les habitants des banlieues [...] font la navette pour aller chaque jour travailler dans les grandes agglomérations".',
    bookId: 'b17',
    level: 'moyenne',
    subject: 'Technologie',
  },
  {
    id: 'e69',
    question: "À quelle altitude se trouve la couche d'ozone ?",
    options: [
      '5 000 mètres',
      '10 000 mètres',
      '16 000 mètres',
      '20 000 mètres',
    ],
    correctAnswerIndex: 3, // Randomized position (originally 2)
    explanation:
      'Le texte indique clairement que la couche d\'ozone "se situe à plus de 16 000 mètres".',
    bookId: 'b18',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e70',
    question:
      "Depuis quand les scientifiques observent-ils la couche d'ozone par satellite ?",
    options: ['1965', '1979', '1985', '1990'],
    correctAnswerIndex: 0, // Randomized position (originally 1)
    explanation:
      'Le texte précise que cette observation a commencé "dès 1979".',
    bookId: 'b18',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e71',
    question: "Quelle diminution de la couche d'ozone a été constatée ?",
    options: ['2 à 10%', '4 à 18%', '20 à 30%', 'Pas de diminution'],
    correctAnswerIndex: 2, // Randomized position (originally 1)
    explanation:
      'La recherche a montré que "la superficie de la couche avait diminué de 4 à 18%".',
    bookId: 'b18',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e72',
    question: 'Quel outil a été utilisé pour ces observations ?',
    options: [
      'Télescopes terrestres',
      'Ballons météorologiques',
      'Satellites',
      'Sondes marines',
    ],
    correctAnswerIndex: 1, // Randomized position (originally 2)
    explanation:
      'Le texte mentionne que les scientifiques ont utilisé "des satellites" pour observer la couche d\'ozone.',
    bookId: 'b18',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e73',
    question: 'Qui est Marc Dufumier selon le texte ?',
    options: [
      'Un médecin',
      'Un politicien',
      'Un agronome et professeur',
      'Un chef cuisinier',
    ],
    correctAnswerIndex: 2, // Position aléatoire
    explanation:
      'Le texte présente Marc Dufumier comme "agronome et professeur".',
    bookId: 'b19',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e74',
    question: 'Contre quoi les agriculteurs utilisent-ils les pesticides ?',
    options: [
      'Les mauvaises herbes uniquement',
      'Les parasites (insectes, microbes, moisissures)',
      'Les animaux sauvages',
      'Les phénomènes météorologiques',
    ],
    correctAnswerIndex: 0, // Position aléatoire
    explanation:
      'Le texte mentionne que les pesticides servent à "lutter contre les parasites (insectes, microbes, moisissures,...)".',
    bookId: 'b19',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e75',
    question: 'Pourquoi les pesticides sont-ils dangereux selon le texte ?',
    options: [
      'Ils coûtent cher',
      'Ils se fixent longtemps dans les sols et plantes',
      'Ils attirent plus de parasites',
      'Ils rendent les plantes moins nutritives',
    ],
    correctAnswerIndex: 3, // Position aléatoire
    explanation:
      'Le texte explique que ces produits "se fixent pour une longue durée dans les sols et les plantes" et sont donc dangereux pour la santé.',
    bookId: 'b19',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e76',
    question: 'Quel est le rêve de Marc Dufumier ?',
    options: [
      'Un monde avec plus de pesticides',
      'Un monde sans pesticides',
      'Un monde avec des pesticides naturels seulement',
      'Un monde où seuls les riches peuvent utiliser des pesticides',
    ],
    correctAnswerIndex: 1, // Position aléatoire
    explanation:
      'Le texte indique que Marc Dufumier "rêve d\'un monde sans les pesticides".',
    bookId: 'b19',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e77',
    question:
      'Qui est mentionné comme responsable du déversement de déchets chimiques ?',
    options: ['Les hôpitaux', 'Les écoles', 'Les usines', 'Les fermes'],
    correctAnswerIndex: 3, // Position aléatoire (originally 2)
    explanation:
      'Le texte indique que "les usines déversent directement leurs déchets chimiques dans la nature".',
    bookId: 'b20',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e78',
    question: 'Quelle négligence des municipalités est pointée du doigt ?',
    options: [
      "Le manque d'éclairage public",
      "L'absence de retraitement des eaux usées",
      'La mauvaise gestion des écoles',
      "L'entretien insuffisant des routes",
    ],
    correctAnswerIndex: 0, // Position aléatoire (originally 1)
    explanation:
      'Le texte reproche aux municipalités de "ne pas procéder au retraitement de leurs eaux usées".',
    bookId: 'b20',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e79',
    question: 'Où sont rejetées les eaux usées non traitées ?',
    options: [
      'Dans les océans seulement',
      'Dans les fleuves et rivières',
      'Dans les forêts',
      'Dans des réservoirs souterrains',
    ],
    correctAnswerIndex: 2, // Position aléatoire (originally 1)
    explanation:
      'Le texte précise que les eaux usées sont "rejetées dans les fleuves et les rivières".',
    bookId: 'b20',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e80',
    question:
      'Comment les ordures ménagères polluent-elles les nappes phréatiques ?',
    options: [
      'Par incinération',
      'Quand elles sont recyclées',
      "Lorsqu'elles sont entreposées dans des décharges sauvages",
      'Quand elles sont compostées',
    ],
    correctAnswerIndex: 1, // Position aléatoire (originally 2)
    explanation:
      'Le texte explique que les ordures "participent à la pollution des nappes phréatiques lorsqu\'elles sont entreposées dans des décharges sauvages".',
    bookId: 'b20',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e81',
    question: "Quand considère-t-on que l'air est pollué ?",
    options: [
      'Quand il pleut',
      'Quand il est modifié par des éléments nuisibles',
      'Quand il fait beau',
      'Quand il y a du vent',
    ],
    correctAnswerIndex: 2, // Position aléatoire
    explanation:
      'Le texte définit que "l\'air est pollué quand il est modifié par des éléments qui sont nuisibles à notre santé".',
    bookId: 'b21',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e82',
    question: 'Quelle est une source naturelle de pollution mentionnée ?',
    options: [
      'Les voitures',
      'La fumée des volcans',
      'Les usines',
      'Les avions',
    ],
    correctAnswerIndex: 0, // Position aléatoire
    explanation:
      'Parmi les sources naturelles, le texte cite "la fumée des volcans".',
    bookId: 'b21',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e83',
    question:
      "Quelle activité humaine n'est PAS mentionnée comme source de pollution ?",
    options: [
      "L'utilisation d'internet",
      'Les transports',
      "L'industrie",
      "L'agriculture",
    ],
    correctAnswerIndex: 3, // Position aléatoire
    explanation:
      "Le texte liste plusieurs activités mais ne mentionne pas l'utilisation d'internet comme source de pollution.",
    bookId: 'b21',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e84',
    question:
      'Quel matériau domestique contribue à la pollution selon le texte ?',
    options: [
      'Les meubles en bois aggloméré',
      'Les vitres en verre',
      'Les murs en brique',
      'Les sols en carrelage',
    ],
    correctAnswerIndex: 1, // Position aléatoire
    explanation:
      'Parmi les sources domestiques, le texte mentionne spécifiquement "les meubles en bois aggloméré".',
    bookId: 'b21',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e85',
    question: 'Quelles sont les conséquences de cette pollution ?',
    options: [
      "Amélioration de la qualité de l'eau",
      'Multiplication des maladies respiratoires et changement climatique',
      'Augmentation des précipitations',
      'Diminution des températures',
    ],
    correctAnswerIndex: 0, // Position aléatoire
    explanation:
      'Le texte conclut que les conséquences sont "la multiplication des maladies respiratoires et le changement du climat".',
    bookId: 'b21',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e86',
    question:
      'Qui est désigné comme principal responsable de la pollution des océans ?',
    options: [
      'Les animaux marins',
      'Les phénomènes naturels',
      "L'homme",
      'Les extraterrestres',
    ],
    correctAnswerIndex: 2, // Randomized position
    explanation:
      'Le texte affirme clairement que "le premier responsable est l\'homme".',
    bookId: 'b22',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e87',
    question: 'Quels types de déchets industriels sont mentionnés ?',
    options: [
      'Des fûts jetés en mer',
      'Des sacs plastique',
      'Des déchets nucléaires',
      'Des appareils électroniques',
    ],
    correctAnswerIndex: 0, // Randomized position
    explanation:
      'Le texte décrit comment "on se débarrasse des déchets en les mettant dans les fûts qui sont jetés dans la mer".',
    bookId: 'b22',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e88',
    question: 'Quel effet des marées noires sur les oiseaux est décrit ?',
    options: [
      'Ils deviennent plus colorés',
      "Leur fourrure et plumes s'engluent",
      "Ils pondent plus d'œufs",
      'Ils changent de régime alimentaire',
    ],
    correctAnswerIndex: 3, // Randomized position
    explanation:
      'Le texte explique que le pétrole "englue la fourrure et les plumes des oiseaux".',
    bookId: 'b22',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e89',
    question:
      'Quels animaux marins sont spécifiquement mentionnés comme victimes ?',
    options: [
      'Les requins uniquement',
      'Les poissons et dauphins',
      'Les tortues uniquement',
      'Les crustacés',
    ],
    correctAnswerIndex: 1, // Randomized position
    explanation:
      'Le texte mentionne que la pollution tue "des milliers de poissons et de mammifères comme les dauphins".',
    bookId: 'b22',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e90',
    question: "Quel appel à l'action conclut le texte ?",
    options: [
      "Construire plus d'usines",
      'Lutter ensemble contre la pollution',
      'Arrêter de pêcher',
      'Ignorer le problème',
    ],
    correctAnswerIndex: 0, // Randomized position
    explanation:
      'Le texte se termine par un appel à "lutter tous ensemble contre" la pollution de l\'eau.',
    bookId: 'b22',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e91',
    question: "Quand considère-t-on que l'air est pollué ?",
    options: [
      'Quand il contient des éléments nuisibles',
      'Quand il sent mauvais',
      'Quand il est humide',
      'Quand il fait chaud',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte indique que l\'air est pollué quand il contient "des éléments qui sont nuisibles à notre santé".',
    bookId: 'b23',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e92',
    question: 'Quelle source naturelle de pollution est mentionnée ?',
    options: [
      'Les centrales nucléaires',
      'La fumée des volcans',
      'Les avions',
      'Les voitures',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Parmi les sources naturelles, le texte cite "la fumée des volcans".',
    bookId: 'b23',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e93',
    question:
      "Quelle activité humaine n'est PAS mentionnée comme source de pollution ?",
    options: [
      "L'utilisation d'Internet",
      'Les transports',
      "L'industrie",
      "L'agriculture",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Le texte ne mentionne pas l'utilisation d'Internet parmi les sources de pollution.",
    bookId: 'b23',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e94',
    question:
      'Quel matériau domestique contribue à la pollution selon le texte ?',
    options: [
      'Les meubles en bois aggloméré',
      'Les fenêtres en aluminium',
      'Les murs en plâtre',
      'Les sols en marbre',
    ],
    correctAnswerIndex: 0,
    explanation:
      'Le texte mentionne spécifiquement "les meubles en bois aggloméré" comme source de pollution.',
    bookId: 'b23',
    level: 'moyenne',
    subject: 'Sciences',
  },
  {
    id: 'e95',
    question:
      'Quelles sont les deux principales conséquences de cette pollution ?',
    options: [
      'Augmentation des précipitations et inondations',
      'Multiplication des maladies respiratoires et changement climatique',
      'Diminution des températures et gelées',
      "Amélioration de la qualité de l'eau et fertilité des sols",
    ],
    correctAnswerIndex: 1,
    explanation:
      'Le texte conclut que les conséquences sont "la multiplication des maladies respiratoires et le changement du climat".',
    bookId: 'b23',
    level: 'moyenne',
    subject: 'Sciences',
  },
];

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Le lavage des mains',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=7wVHHxCaVOQ',
    youtubeId: '7wVHHxCaVOQ',
    description: '1 Séquence 1 Compréhension orale " Le lavage des mains "',
    duration: '01:45',
    views: '207k',
    uploadDate: '2024-02-01',
  },
  {
    id: 'v2',
    title: 'La carie dentaire',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=_mBk0AlT7o4',
    youtubeId: '_mBk0AlT7o4',
    description: 'Production écrite :"La carie dentaire',
    duration: '03:27',
    views: '7.1k',
    uploadDate: '2023-02-12',
  },
  {
    id: 'v3',
    title: 'le importance de manger convenablement',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=QQdpx-kBOPU',
    youtubeId: 'QQdpx-kBOPU',
    description:
      '1AM Projet 1 Séquence 2 Compréhension orale " Le importance de manger convenablement"',
    duration: '01:32',
    views: '133k',
    uploadDate: '2023-05-15',
  },
  {
    id: 'v4',
    title: 'Que est ce que une alimentation équilibrée',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=PbM45P1SDec',
    youtubeId: 'PbM45P1SDec',
    description:
      'Support audiovisuel pour la compréhension de le oral 1am projet 1 séquence 2 : Le équilibre alimentaire.',
    duration: '01:32',
    views: '133k',
    uploadDate: '2022-08-16',
  },
  {
    id: 'v5',
    title: 'les avantages de la marche',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=97c4fcGT3wg',
    youtubeId: '97c4fcGT3wg',
    description:
      '1AM Projet 3 Séquence 2 Compréhension orale "les avantages de la marche"',
    duration: '01:32',
    views: '131k',
    uploadDate: '2022-09-26',
  },
  {
    id: 'v6',
    title: 'les bienfaits du téléphone portable',
    level: 'moyenne',
    subject: 'Technologie',
    youtubeUrl: 'https://www.youtube.com/watch?v=KVvtVkFXOXo',
    youtubeId: 'KVvtVkFXOXo',
    description:
      '1AM Projet2 Séquence 1 -les bienfaits du téléphone portable- 1AM Projet2 Séquence 1 Compréhension de le Oral les bienfaits du téléphone portable',
    duration: '00:50',
    views: '20k',
    uploadDate: '2022-09-14',
  },
  {
    id: 'v7',
    title: "les avantages d'internet",
    level: 'moyenne',
    subject: 'Technologie',
    youtubeUrl: 'https://www.youtube.com/watch?v=xuiFWLd5WtY',
    youtubeId: 'xuiFWLd5WtY',
    description:
      '1am compréhension orale projet2 séquence 1 "les avantages d\'internet',
    duration: '00:58',
    views: '5.4k',
    uploadDate: '2019-05-12',
  },
  {
    id: 'v9',
    title: 'Comprendre les caries dentaires',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://youtube.com/shorts/bhdp9ZmdTBg?si=bPRXvgRHzVWgyOlx',
    youtubeId: 'bhdp9ZmdTBg',
    description:
      '🦷🍬 Comprendre les caries dentaires – Aïe, une douleur dans la dent ? Les caries sont les ennemies de notre sourire ! Mais comment se forment-elles ? Pourquoi le sucre est-il leur meilleur ami ? Et comment peut-on les éviter ? Découvre tout ce qu’il faut savoir pour garder des dents en pleine forme ! 😁✨',
    duration: '00:43',
    views: '300',
    uploadDate: '2024-10-01',
  },
  {
    id: 'v10',
    title: '1AM /Projet 1 /Séquence 2 / Expression orale',
    level: 'moyenne',
    subject: 'Éducation à la Santé',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZbtFDgizGlg',
    youtubeId: 'ZbtFDgizGlg',
    description: '1AM /Projet 1 /Séquence 2 / Expression orale .',
    duration: '04:51',
    views: '36,5k',
    uploadDate: '2023-01-01',
  },
  {
    id: 'v11',
    title: "L'importance du sport",
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
    youtubeUrl: 'https://www.youtube.com/watch?v=yUPzw2HGmuM',
    youtubeId: 'yUPzw2HGmuM',
    description:
      '1AM Projet 1 Séquence 3 Compréhension orale " L\'importance du sport"',
    duration: '01:11',
    views: '156k',
    uploadDate: '2023-03-01',
  },
  {
    id: 'v12',
    title: 'Les avantages de MARCHER',
    level: 'moyenne',
    subject: 'Éducation Physique et Sportive',
    youtubeUrl: 'https://www.youtube.com/watch?v=CnjVb3o0UGk',
    youtubeId: 'CnjVb3o0UGk',
    description:
      'Les avantages de MARCHER 30 minutes par jour. La marche, toujours le meilleur remède',
    duration: '01:02',
    views: '6.6k',
    uploadDate: '2023-04-01',
  },
  {
    id: 'v13',
    title: 'Les bienfaits du téléphone portable',
    level: 'moyenne',
    subject: 'Technologie',
    youtubeUrl: 'https://www.youtube.com/watch?v=YijwhPpRXQA',
    youtubeId: 'YijwhPpRXQA',
    description:
      '1AM Projet 2 Séquence 1 Compréhension orale " Les bienfaits du téléphone portable"',
    duration: '01:34',
    views: '97k',
    uploadDate: '2023-05-01',
  },
  {
    id: 'v14',
    title: "les avantages d'internet",
    level: 'moyenne',
    subject: 'Technologie',
    youtubeUrl: 'https://www.youtube.com/watch?v=xuiFWLd5WtY',
    youtubeId: 'xuiFWLd5WtY',
    description:
      '1am compréhension orale projet2 séquence 1 "les avantages d\'internet"',
    duration: '00:57',
    views: '5k',
    uploadDate: '2019-05-12',
  },
  {
    id: 'v15',
    title: "Qu'est-ce que la pollution? causes et conséquences",
    level: 'moyenne',
    subject: 'Sciences',
    youtubeUrl: 'https://www.youtube.com/watch?v=FdmDgyu-6dI',
    youtubeId: 'FdmDgyu-6dI',
    description:
      '1AM Projet 2 Séquence 2 Compréhension orale " Qu\'est-ce que la pollution? causes et conséquences',
    duration: '02:01',
    views: '174k',
    uploadDate: '2023-06-01',
  },
];

export const pricing: Pricing[] = [
  {
    level: 'moyenne',
    pricePerLesson: 70,
    monthlyPrice: 600,
    levelDisplayName: '1ère Année Moyenne',
  },
];
