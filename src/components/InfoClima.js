import React, { Component } from 'react';



class InfoClima extends Component{
    constructor(){
        super();
      
    }
    
    render(){
        return (
            
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                <p className="card-text"> {this.state.datos}aqui desde infoclimajs</p>
                </div>
            </div>
        
        );
    }

}


export default InfoClima;