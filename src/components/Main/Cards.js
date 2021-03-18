import React from "react";

export default class Cards extends React.Component {
  render() {
    return (
    <div className="information">
     <div id="Home" className="Home">
       <h1> Sobre a Mina Graphic</h1>
        <p>Somos uma empresa que atualmente monitora os valores das ações mais procuradas e em alta do mercado<br></br>
       Trazemos sempre um informativo em nossa página apresentando gráficos de área constantemente atualizados afim de que você possa ter uma visibilidade boa de como está o fluxo das ações<br></br>
       <strong>Favoritando</strong> o gráfico da ação de sua escolha, ele ficará reservado na página de favoritos, assim você poderá visualizar separadamente os seus favoritos.</p>
    </div>
    <div id="Gráficos" className="graficos">
      GRÁFICOS
    </div>
    </div>
   
    );
  }
}
