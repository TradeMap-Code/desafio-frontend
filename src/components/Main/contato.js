import React from "react";
import InputMask from "react-input-mask";

export default class Contato extends React.Component {
  render() {
    return (
      <div id="Contato"className="Contato">
        <h1> Contato</h1>
        <form
          name="form1"
          id="form1"
          method="post"
          action="/controllers/controllerForm.php"
        >
          <input type="text" name="nome" id="nome" placeholder="Nome:" />
          <InputMask type="tel"name="telefone"id="telefone"placeholder="Telefone:" mask="(99) 99999-9999" maskChar=""/>  
          <input type="email" name="email" id="email" placeholder="Email:" />
          <textarea name="mensagem"id="mensagem"placeholder="Mensagem:"></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}
