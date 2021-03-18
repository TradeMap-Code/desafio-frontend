import React from "react";


export default class ButtonMob extends React.Component {
  
  
  constructor()
  {
      super();
      this.state={
        visNav:"flex"
      }
  }
  
  /*vai fazer a função de toggle*/
  clickMe()
  {
    if(this.state.visNav === 'flex'){
      this.setState({
        visNav:"none"
      });
    }else{
      this.setState({
        visNav:"flex"
      });
    }
    document.querySelector('.nav').style.display=this.state.visNav;

  }

  render() {
    return (
    <div className="buttonMob" onClick={this.clickMe.bind(this)}>
      <img src="https://icon-library.com/images/hamburger-icon/hamburger-icon-3.jpg" alt='Botão Mobile'  width="40" height="40"></img>
      
    </div>
    );
  }
}
