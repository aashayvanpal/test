import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            food: [{ "name": "test1", "calories": "100test" }]
        }
    }
    componentDidMount() {
        // Axios url required 
        // axios.get('http://localhost:3001/food')

        axios.get('https://aaswad-test.herokuapp.com/food')
            .then(response => {
                console.log(response.data)
                this.setState({ food: response.data })
            })
    }
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <h1>Displaying food : {this.state.length}</h1>
                {
                    this.state.food.map((fooditem, i) => {
                        return (
                            <h2 key={i}>{fooditem.name} - {fooditem.calories}</h2>)
                    })
                }
            </div>
        );
    }
}

export default Home