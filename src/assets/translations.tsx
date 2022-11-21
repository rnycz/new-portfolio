type Translation = {
  aboutMe: {
    en: {
      p1: string;
      p2: string;
      p3: string;
    };
    pl: {
      p1: string;
      p2: string;
      p3: string;
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
    };
    pl: {
      desc: string;
    };
  };
  work: {
    en: {
      scope: string;
      desc: string;
    };
    pl: {
      scope: string;
      desc: string;
    };
  };
};

export let translation: Translation = {
  aboutMe: {
    en: {
      p1: "My name is Radek Nycz and my goal is to become a Junior Frontend Developer. I am currently a second-year master's student at the University of Economics in Katowice. I am studying Digital Economy, and before that Computer Science and Econometrics (Bachelor's degree).",
      p2: "I had the opportunity to intern at ING where I gained analytical and programming skills, creating for example a web application that aggregated marketing creatives with statistical data for review by team members.",
      p3: "My hobby is sports both watching and playing them. First of all, these are team sports - football and basketball but also individual sports like athletics and gym.",
    },
    pl: {
      p1: "Nazywam się Radek Nycz, a moim celem jest zostanie Junior Frontend Developerem. Obecnie studiuję na drugim roku studiów magisterskich na Uniwersytecie Ekonomicznym w Katowicach na kierunku Gospodarka Cyfrowa. Licencjat ukończyłem na kierunku Informatyka i Ekonometria.",
      p2: "Miałem okazję odbyć staż w ING, gdzie zdobyłem umiejętności analityczne i programistyczne, tworząc np. aplikację internetową agregującą kreacje marketingowe z danymi statystycznymi, do wglądu dla członków zespołu.",
      p3: "Moim hobby jest sport zarówno jego oglądanie jak i uprawianie. Przede wszystkim są to sporty drużynowe - piłka nożna i koszykówka, ale także indywidualne jak lekkoatletyka i siłownia.",
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
      desc: "My main area of interest is front-end development - building small and medium web applications using the React library. Additionally, in the projects I create, I like to use the available APIs or create my own for my own needs.",
    },
    pl: {
      desc: "Głównym obszarem mojego zainteresowania jest front-end development - budowanie małych i średnich aplikacji internetowych z wykorzystaniem biblioteki React. Dodatkowo w projektach, które tworze, lubię skorzystać z dostępnych API lub stworzyć swoje na własne potrzeby.",
    },
  },
  work: {
    en: {
      scope: "Scope of work:",
      desc: "Handling Google Tag Manager, creating an internal web application for the team, assisting with affiliate programs, working with marketing data from CM360, DV360, Gemius AdReal systems.",
    },
    pl: {
      scope: "Zakres pracy:",
      desc: "Obsługa Google Tag Manager, tworzenie wewnętrznej aplikacji internetowej dla zespołu, pomoc przy programach afiliacyjnych, praca z danymi marketingowymi z systemów CM360, DV360, Gemius AdReal.",
    },
  },
};
