export const projects = [
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
    images: [],
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
    images: [],
  },
  {
    id: "s6-individual",
    title: "Boerenboodschap",
    description: `
      https://boerenboodschap.teunspithoven.nl
      Semester 6 draaide voornamelijk om non functional requirements.
      We zijn aan de slag gegaan met het ontwerpen en implementeren van enterprise software systemen die schaalbaar zijn
       en daardoor veel meer gebruikers tegelijk van service kan voorzien dan een applicatie die niet schaalbaar is.
      Dit heb ik gedaan door met docker, kubernetes en helm te werken en heb ik uiteindelijk mijn microservices automatisch laten schalen
       op Azure kubernetes service.
      Ook heb ik mijn handen vies gemaakt aan infrastructure as code met Pulumi.
    `,
    images: [],
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
    images: [],
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
    images: [],
  },
];
