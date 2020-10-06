import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

const container = document.getElementById("app");
ReactDOM.render(<App/>, container);


// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

//const element = <h1>Hello, Platzi Badges!</h1>;
/*const jsx = React.createElement(
  "a",
  { href: "www.google.com" },
  "hola soy children"
);*/
//const name = "aldo";
//const jsx = React.createElement("h1", {}, `hola soy ${name}`);
//const jsx = <h1>hola soy, {name}</h1>;
/*const jsx = (
  <div>
    <h1>hola</h1>
    <p>parrafo</p>
  </div>
);
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "hola"),
  React.createElement("h1", {}, "hola")
);*/

// ReactDOM.render(__qué__, __dónde__);
/*ReactDOM.render(<Badge firstName="perez" 
lastName="juarez" 
jobTitle="Frontend Enginner" 
twitter="sparragus"
avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
/>, container);*/


