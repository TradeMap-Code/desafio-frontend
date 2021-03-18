import React from "react";
import Cards from "../Main/Cards";
import Formulario from "../Main/contato"
import Dados from "../Main/dados";

export default class Main extends React.Component {
  render() {
    return ( 
        <div>
         <Cards/>
         <Dados/>
         <Formulario/>
         </div>
    );
      }
    }