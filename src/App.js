import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.breakCookie = this.breakCookie.bind(this);

    this.texts = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?' ,
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    ]
  }

  breakCookie() {
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.texts.length);
    state.text = '"' + this.texts[randomNumber] + '"';
    this.setState(state);
  }


  render() {
    return (
      <div className="container">
        <img src='/assets/biscoito.png' />
        <Botao name="Abrir biscoito" actionBtn={this.breakCookie} />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.actionBtn}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default App;
