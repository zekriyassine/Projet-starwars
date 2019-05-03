import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css'

class Perssonage extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            info : []
        }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/people/')
        .then(res=>res.json())
        .then(data => this.setState({
            info: data.results
        }))
    }
    render(){
        const listPerso = this.state.info.map((elem, index)=>(
            <NavLink className="item-list" to={`/detailperssonages/${index}`}>{elem.name}</NavLink>
        ))
        return (
            <React.Fragment>
                
                <div className="list-perso">
                {listPerso}
                </div>
                
               
                
            </React.Fragment>
        )
    }
}

export default Perssonage;
