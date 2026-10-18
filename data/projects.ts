export type PersonaSection = {
  componentName: "Persona";
  name: string;
  imageUrl: string;
  demographics: {
    age: number;
    gender: string;
    education?: string;
    family: string;
    occupation: string;
  };
  quote: string;
  goals: string[];
  frustrations: string[];
  story: string;
};

export type EmbeddedComponentName =
  "EuroDollarConverter" | "Circustrain" | "Sudoku";

export type ProjectComponent =
  PersonaSection | { componentName: EmbeddedComponentName };

export type ProjectSection = {
  title: string;
  description?: string;
  components?: ProjectComponent[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  images?: string[];
  iFrameUrl?: string;
  websiteUrl?: string;
  components?: ProjectComponent[];
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "eurodollarconverter",
    title: "Euro Dollar Converter",
    description: `In my first semester I learned my first programming language: C#.
      During this semester I learned about programming by making practical
      assignments, by making an application that converts euros to dollars.
      This is the project recreated in javascript.`,
    images: ["/assets/S1/eurodollarconverter.png"],
    components: [{ componentName: "EuroDollarConverter" }],
  },
  {
    id: "shop-register-system",
    title: "Shop Register System",
    description: `After making more of these little assignments I made my final
    project of my first semester. It is a shopping system that has a
    shopping cart and check out simulation. This project was made with windows forms and C#.`,
    images: ["/assets/S1/winkel2.png", "/assets/S1/betalen.png"],
  },
  {
    id: "studycluster",
    title: "Studycluster",
    description: `In the second half of the first semester I participated in a
  group project where I made a electronic learning environment for
  schools with 5 other classmates. In this assignment we made a
  class diagram for our .NET OOP application. This assignment also
  was the first time that I worked with a database.`,
    images: [
      "/assets/S1/eloscheduleitemform.png",
      "/assets/S1/classdiagram.png",
    ],
  },
  {
    id: "circustrain",
    title: "Circus Train",
    description: `A C# .NET application that sorts circus animals into train wagons in
      the most efficient way, without braking any of the given rules. My
      application designing skills improved a lot because of this exercise.
      For this project I also wrote unit- and integration tests. Below is a
      recreation of the project in javascript.`,
    images: [
      "/assets/S2/circustrein-screenshot.png",
      "/assets/S2/circustreinflowchart.png",
      "/assets/S2/circustrein-solution.png",
    ],
    components: [{ componentName: "Circustrain" }],
  },
  {
    id: "bolus-calculator",
    title: "Bolus Calculator",
    description: `In semester 2 I also did a group project for the company
      Philips, we made a distributed application with a typescript
      frontend and typescript backend, those layers communicate
      through express. During this project I also learned how to write
      unit tests.`,
    images: ["/assets/S2/jest.png"],
  },
  {
    id: "dream-journal",
    title: "Dream Journal",
    description: `In semester 2 I had my first encounter with wireframes and
      multi-layered application architecture. I made an app that can be used to
      keep track of your dreams and see your friends dreams.`,
    images: ["/assets/S2/dreamyournaluidesign.png"],
  },
  {
    id: "ninja-game",
    title: "Ninja Game",
    description: `
      In my third semester I made a web application with Python,
      Django, Node and VueJs. For this distributed web app I made one
      frontend application with Vuejs and two different Django
      backends. One for handling user authentication and the saving of
      used data, and the other one as my game server. This game server
      uses a websocket for fast back and forth communication between
      client and server. My software testing skills improved a lot
      during this project, I wrote unit, integration and end to end
      tests. I used Cypress to test my frontend. All of these tests
      where automatically run after pushing changes to my Github
      repository because of the CI/CD pipeline.
    `,
    images: ["/assets/S3/CICD.png"],
  },
  {
    id: "bimpi",
    title: "Bimpi",
    description: `This was my first project in colaboration with Austrian students. 
      We made a software project planning application. 
      With bimpi you could do anything from brainstorming to specifying requirements for software applications.`,
  },
  {
    id: "lees-dit-niet",
    title: "Lees Dit Niet",
    description: `Open op eigen risico.`,
    websiteUrl: "https://teunspithoven.github.io/lees-dit-niet/",
  },
  {
    id: "s6-group",
    title: "Appsemble",
    description: `Voor Appsemble hebben we als projectgroep de opdracht gekregen om appsemble als enterprise systeem te upgraden.
      We hebben gewerkt aan Kubernetes, Security en Migratie naar een nieuw cloud hosting platform.
      Ik was verantwoordelijk voor Security, daarvoor heb ik in de GitLab omgeving security policies geconfigureerd, die
        policies voeren automatisch verschillende scans uit. Zo hoef je dus niet per repository in de pipeline security scans
        in te stellen omdat het in het overkoepelende project is geconfigureerd.
      Daarnaast heb ik ook met een aantal tools de appsemble applicatie gescanned op kwetsbaarheden. Daar heb ik vervolgens issues
        voor gemaakt en ben ik aan de slag gegaan om ze op te lossen.
    `,
  },
  {
    id: "s6-individual",
    title: "Boerenboodschap",
    description: `
      Semester 6 draaide voornamelijk om non functional requirements.
      We zijn aan de slag gegaan met het ontwerpen en implementeren van enterprise software systemen die schaalbaar zijn
       en daardoor veel meer gebruikers tegelijk van service kan voorzien dan een applicatie die niet schaalbaar is.
      Dit heb ik gedaan door met docker, kubernetes en helm te werken en heb ik uiteindelijk mijn microservices automatisch laten schalen
       op Azure kubernetes service.
      Ook heb ik mijn handen vies gemaakt aan infrastructure as code met Pulumi.
    `,
    iFrameUrl: "https://boerenboodschap.teunspithoven.nl",
  },
  {
    id: "s7-group",
    title: "Sound Source Localisation",
    description: `
      In semester 7 heb ik de minor signals and embedded systems gevolgd. 
      Hier hebben we met vier man het sound source localization project overgenomen van een vorige groep. 
      Blijkbaar heeft de vorige groep een demo gegeven waarin het systeem werkte, 
      we waren daar verbaasd over nadat we zelf het project probeerden op te starten. 
      Na een hele tijd de spaghetti code van de vorige groep te ontcijferen hebben we heel wat onlogische ontwerpkeuzes gevonden. 
      Op basis hiervan hebben we een nieuw ontwerp gemaakt (C1 en C2 model) en zijn we begonnen met de implementatie. 
      Ik was verantwoordelijk voor het server deel van de applicatie, 
      de rest van de groep hield zich bezig met de hardware (die een brandgevaar was), 
      de code voor het berekenen van de hoek van een geluidsbron en de code voor het berekenen van 
      snijpunten van hoeken om zo de locatie van de geluidsbron te achterhalen.
    `,
  },
  {
    id: "s7-individual",
    title: "Racket Spanning Meter",
    description: `
      Tijdens de minor Signals and Embedded systems ben ik na brainstormen met klasgenoten en docenten aan de slag
       gegaan met een applicatie om de spanning van de snaren van een tennisracket te achterhalen.
      Eerst heb ik een onderzoek uitgevoerd en daarna ben ik in Javascript aan de slag gegaan.
      Tot nu toe is er een applicatie die microfoon input met FFT omzet naar een mooi staafdiagram.
      Nu moet ik nog de logica toevoegen om de frequentie van een tennisracket te isoleren zodat ik die terug kan geven aan de gebruiker.
    `,
    iFrameUrl: "https://teunspithoven.github.io/racketspanningsmeter/",
  },
  {
    id: "teunspithoven",
    title: "teunspithoven.nl",
    description: `Persoonlijke portfolio website. Deze website is gemaakt met Next.js, Typescript en Tailwind CSS.`,
    websiteUrl: "https://teunspithoven.nl/",
  },
  // {
  //   id: "sudoku",
  //   title: "Sudoku",
  //   description: "Incomplete sudoku generator in React.",
  //   components: [{ componentName: "Sudoku" }],
  // },
  {
    id: "adoptie-app",
    title: "Adoptie App",
    description:
      "Als oefenproject voor de Google UX professional course heb ik een adoptie app ontworpen. Voor dit project heb ik het design thinking framework gevolgd.",
    sections: [
      {
        title: "Fase 1: Empathize",
        description: `In deze fase heb ik interviews afgenomen met mensen die in de afgelopen jaren een huisdier hebben geadopteerd en mensen die van plan zijn om in de toekomst een huisdier te adopteren. Het interview met de asielmedewerker heb ik met Gemini gedaan in een rollenspel. Vanuit de interviews heb ik empathy maps, user journeys, persona's en user stories gemaakt.`,
      },
      {
        title: "Personas",
        description: `Op basis van de interviews en empathy maps heb ik onderandere deze twee personas gemaakt:`,
        components: [
          {
            componentName: "Persona",
            name: "Bart",
            imageUrl: "/assets/personas/bart.jpg",
            demographics: {
              age: 50,
              gender: "Man",
              education: "Universitair opgeleid",
              family: "Getrouwd met Josefien, twee kinderen.",
              occupation: "ZZP-werktuigbouwkundige",
            },
            quote: "N zomer niet geBBQed is een jaar niet geleefd.",
            goals: [
              "De emotionele ontwikkeling van zijn kinderen ondersteunen",
              "Meer bewegen",
            ],
            frustrations: [
              "Doorgefokte honden met raskwaaltjes",
              "Kleine, rat-achtige honden",
            ],
            story:
              "Bart is een ZZP-werktuigbouwkundige. In het weekend gaat hij graag mountainbiken of barbecueën met vrienden. Hij wil een hond in huis halen voor meer reuring en de emotionele ontwikkeling van zijn kinderen. Zelf zoekt hij een sportieve hond die mee kan wandelen; zijn vrouw Josefien heeft liever een kleine hond die op schoot kan. Zijn kinderen zitten op de basis- en middelbare school.",
          },
          {
            componentName: "Persona",
            name: "Sandra",
            imageUrl: "/assets/personas/sandra.jpg",
            demographics: {
              age: 42,
              gender: "Vrouw",
              family: "Getrouwd, twee pubers in huis.",
              occupation: "Dierverzorgings- en adoptiecoördinator",
            },
            quote:
              "Je gaat werken in een asiel vanuit passie voor dieren, maar een groot deel van de dag ben je een soort logistiek manager en helpdeskmedewerker die tegen verouderde systemen vecht.",
            goals: ["Asieldieren blij zien in een nieuw huishouden"],
            frustrations: [
              "No-shows bij kennismakingsafspraken",
              "Heen-en-weermails over afspraken en vragen",
              "Afspraken afzeggen omdat het dier inmiddels is geadopteerd",
            ],
            story:
              "Sandra is een hardwerkende dierverzorgings- en adoptiecoördinator bij een asiel. Ze stuurt vrijwilligers aan en is verantwoordelijk voor de dierverzorging en het adoptieproces. Wanneer een nieuw dier binnenkomt, voegt ze medische gegevens, een beschrijving en foto's toe aan de website en kopieert die informatie naar social media. Het mooiste vindt ze wanneer een bang of mishandeld dier uiteindelijk een goed leven krijgt bij nieuwe adoptieouders. De administratie kost veel tijd: afspraken worden via mail en telefoon gemaakt, ongeveer één op de vijf mensen komt niet opdagen en potentiële adopteerders hebben veel vragen. Transparantie over de dieren is voor haar heel belangrijk.",
          },
        ],
      },
    ],
  },
];
