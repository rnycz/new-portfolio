type Translation = {
  aboutMe: {
    en: {
      p1: string;
      p2: string;
      p3: string;
      CVinfo: string;
    };
    pl: {
      p1: string;
      p2: string;
      p3: string;
      CVinfo: string;
    };
  };
  contact: {
    en: {
      info: string;
    };
    pl: {
      info: string;
    };
  };
  skills: {
    en: {
      desc: string;
      other: string;
    };
    pl: {
      desc: string;
      other: string;
    };
  };
  work: {
    en: {
      scope: string;
      position: string;
      desc1: string;
      desc2: string;
      exp: string;
      projects: string;
    };
    pl: {
      scope: string;
      position: string;
      desc1: string;
      desc2: string;
      exp: string;
      projects: string;
    };
  };
};

export let translation: Translation = {
  aboutMe: {
    en: {
      p1: "My name is Radek Nycz and I am currently working as a Junior Programmer at Asseco Business Solutions. I am also in my second year of Master's studies at the University of Economics in Katowice, majoring in Digital Economy. I completed my Bachelor's degree in Computer Science and Econometrics.",
      p2: "During my career, I also completed an internship at ING, where I gained analytical and programming skills, creating, among other things, a web application that aggregates marketing creatives with statistical data for team members to view.",
      p3: "My hobby is sports both watching and playing them. First of all, these are team sports - football and basketball but also individual sports like athletics and gym.",
      CVinfo: "Currently unavailable",
    },
    pl: {
      p1: "Nazywam się Radek Nycz i aktualnie pracuję na stanowisku Młodszego Programisty w Asseco Business Solutions. Studiuję również na drugim roku studiów magisterskich na Uniwersytecie Ekonomicznym w Katowicach na kierunku Gospodarka Cyfrowa. Licencjat ukończyłem na kierunku Informatyka i Ekonometria.",
      p2: "W trakcie mojej kariery zawodowej odbyłem także staż w ING, gdzie zdobyłem umiejętności analityczne i programistyczne, tworząc m.in. aplikację internetową agregującą kreacje marketingowe z danymi statystycznymi, do wglądu dla członków zespołu.",
      p3: "Moim hobby jest sport zarówno jego oglądanie jak i uprawianie. Przede wszystkim są to sporty drużynowe - piłka nożna i koszykówka, ale także indywidualne jak lekkoatletyka i siłownia.",
      CVinfo: "Aktualnie niedostępne",
    },
  },
  contact: {
    en: {
      info: "Email copied to clipboard",
    },
    pl: {
      info: "Email skopiownany do schowka",
    },
  },
  skills: {
    en: {
      desc: "On a day-to-day basis at work, I deal with an ERP system developed in the company's own technology. Apart from that, I like to build small and medium-sized web applications using the React library. Additionally, in the projects I create, I like to use the available APIs or create my own for my own needs.",
      other: "Other tools and technologies",
    },
    pl: {
      desc: "Na co dzień w pracy zajmuje się systemem ERP stworzonym w autorskiej technologii firmy. Oprócz tego lubię budować małe i średnie aplikacje internetowe z wykorzystaniem biblioteki React. Dodatkowo w projektach, które tworzę, lubię skorzystać z dostępnych API lub stworzyć swoje na własne potrzeby.",
      other: "Inne narzędzia i technologie",
    },
  },
  work: {
    en: {
      scope: "Scope of work:",
      position: "Junior Programmer",
      desc1:
        "Working with an ERP system developed in the company's own technology.",
      desc2:
        "Handling Google Tag Manager, creating an internal web application for the team, assisting with affiliate programs, working with marketing data from CM360, DV360, Gemius AdReal systems.",
      exp: "Experience",
      projects: "Projects",
    },
    pl: {
      scope: "Zakres pracy:",
      position: "Młodszy Programista",
      desc1: "Praca z systemem ERP stworzonym w autorskiej technologii firmy.",
      desc2:
        "Obsługa Google Tag Manager, tworzenie wewnętrznej aplikacji internetowej dla zespołu, pomoc przy programach afiliacyjnych, praca z danymi marketingowymi z systemów CM360, DV360, Gemius AdReal.",
      exp: "Doświadczenie",
      projects: "Projekty",
    },
  },
};
