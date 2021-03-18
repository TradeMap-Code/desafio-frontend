import React from "react";

export default class Address extends React.Component {
  render() {
    return (
      <div className='endereço'>
        <img className= "Logo"src='https://w7.pngwing.com/pngs/796/937/png-transparent-triangle-logo-brand-triangle-angle-text-triangle.png' alt='Logo' width="60" height="60"/>
          <div className="titulo">
          <h1>MinaGraphic</h1>
          </div>
         <br/>
        <div className="contato">
        <img className="address" src='https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png' alt='WhatsApp de Contato' width="25" height="25"/> 
        <strong>(21) 98509-8775 </strong><br/>  
        </div>
         </div>
    );
  }
}
