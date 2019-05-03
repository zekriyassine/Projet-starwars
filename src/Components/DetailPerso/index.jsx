import React from 'react';
import './index.css';

class DetailPerso extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            detail :[]

        }
    }

    componentDidMount(){
        const index = this.props.match.params.index;
    fetch('https://swapi.co/api/people/')
    .then(res=>res.json())
    .then(data=> this.setState({
        detail : data.results[index]
    }))
    }
    render(){
        
        return (
            <React.Fragment>
                <ul className="container-list">
                    <li className="item-list">height: {this.state.detail.height} </li>
                    <li className="item-list">mass: {this.state.detail.mass} </li>
                    <li className="item-list">haircolor: {this.state.detail.hair_color} </li>
                    <li className="item-list">skincolor: {this.state.detail.skin_color} </li>
                    <li className="item-list">eyecolor: {this.state.detail.eye_color} </li>
                    <li className="item-list">birthyear: {this.state.detail.birth_year} </li>
                    <li className="item-list">gender: {this.state.detail.gender} </li>
                </ul>

            </React.Fragment>
        )
    }
}

export default DetailPerso;