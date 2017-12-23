import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';


class App extends Component {

    constructor(){
        super();
        this.state={
            data:[],
            isLoading: true,
            contact:[]

        }
    }

  componentWillMount(){

        fetch('https://private-d6f44-multiarticles.apiary-mock.com/articles')
            .then((Response)=>Response.json())
            .then((Findresponse)=>
            {
                this.setState({
                    data:Findresponse,

                })
            })
  }

  render() {

      const articleslist = this.state.data.map((dynamicData,key) =>
          <div>

          {dynamicData.name}

          </div>
  )

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Apple News Format</h1>
        </header>

        <select>
            <option value="art0">{articleslist[0]}</option>
            <option value="art1">{articleslist[1]}</option>
            <option value="art2">{articleslist[2]}</option>
            <option value="art3">{articleslist[3]}</option>
            <option value="art3">{articleslist[4]}</option>
        </select>
        <div>
              {

              }
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
