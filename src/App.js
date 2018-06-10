import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{tareas} from './tareas.json';
//import FormGenerador from './components/FormGenerador';

class App extends Component{
    constructor(){
        super();   
        this.state={tareas}
    };
render(){
    const tareas = this.state.tareas.map((tareas,i) =>
    {
        return(
             <div className="col-md-4">
                <div className="card mt-4">
                    <div >
                        <h3>{tareas.Folio}</h3>
                    </div>
                    <div className="card-body">
                       <p> {tareas.Contratista} </p>
                        <p>{tareas.Fecha} </p>
                        <p>{tareas.Status} </p>
                        
                    </div>
                </div>
              </div>
        )
    }
    )
    
    return(
    
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Generadores </h1>
            </header>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1">
                    <a href="" className="text-white">
                    Generadores ITALCOM
                    </a>     
                </span>
            <span class="navbar-brand mb-0 h1">
         <button type="button" class="btn btn-primary">Nuevo Generador</button>
                </span>
                 
                <span className="badge badge-pill badge-info ml-2">
                  TOTAL GENERADORES :  {this.state.tareas.length}
                </span>
            </nav>
            <div className="container">
                <div className="row">
                    {tareas}
                </div>
            </div>
        </div>
    );
}
    
    
}
export default App;