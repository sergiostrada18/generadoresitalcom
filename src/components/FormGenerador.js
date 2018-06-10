import React, {Component} from 'react';

class FormGenerador extends Component{
    contructor(){//iniciamos variables en blanco
        super();
        this.state ={
            Folio:'',
            Contratista:''            
        };
        //Especificamos a que variables seran enviados los datos
    this.handleInputChange =this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    }
}

handleSubmit(e){//Enviamos el evento
    e.preventDefault();
    this.props.OnAddTodo(this.state);
    this.setState({
        Folio:'',
        Contratista:''
    });
    
}

handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
        [name]: value
    });
}

render () {
    return (
        <div className="card">
            <form onSubmit={thi.handleSubmit} className="card-body"
        <div className="form-group"
            <input
                type="text"
                name="Folio"
                className="form.control"
                value={this.state.responsible}
                onChange={this.handleInputChange}
                placeholder="Folio"
            />
        </div>
    )
}