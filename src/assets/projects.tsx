import Kanban from "./images/kanban.png";
import KanbanAPI from "./images/kanbanAPI.png";
import weatherExt from "./images/weatherExt.png";
import chatApp from "./images/chatApp.png";
import imageEditor from "./images/imageEditor.png";
import crudtodo from "./images/crudtodo.png";
import guessWord from "./images/guessWord.png";
import pizzeron from "./images/pizzeron.png";

type Projects = {
  name: string;
  image: string;
  desc: string;
  git: string;
};

export const projects: Projects[] = [
  {
    name: "Kanban Board",
    image: Kanban,
    desc: "React (Context API and React Router), TypeScript, SCSS",
    git: "https://github.com/rnycz/kanban-board",
  },
  {
    name: "Kanban Board API",
    image: KanbanAPI,
    desc: "Node.js, Express, MongoDB",
    git: "https://github.com/rnycz/kanban-board-api",
  },
  {
    name: "Weather Extension",
    image: weatherExt,
    desc: "JavaScript, HTML, SCSS, Chart.js, OpenWeatherMap API",
    git: "https://github.com/rnycz/weather-extension",
  },
  {
    name: "Chat App",
    image: chatApp,
    desc: "React, Node.js, Socket.IO, SCSS",
    git: "https://github.com/rnycz/chat-app",
  },
  {
    name: "Image Editor",
    image: imageEditor,
    desc: "JavaScript, HTML, SCSS",
    git: "https://github.com/rnycz/image-editor",
  },
  {
    name: "CRUD TODO",
    image: crudtodo,
    desc: "JavaScript, HTML, SCSS, localStorage",
    git: "https://github.com/rnycz/crud-todo",
  },
  {
    name: "Guess The Word",
    image: guessWord,
    desc: "JavaScript, HTML, SCSS",
    git: "https://github.com/rnycz/guess-the-word",
  },
  {
    name: "Pizzeron",
    image: pizzeron,
    desc: "JavaScript, HTML, CSS",
    git: "https://github.com/rnycz/pizzeron-website",
  },
];
