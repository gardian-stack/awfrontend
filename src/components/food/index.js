import React, { Component } from 'react';
import DataFood from './DataFood';
import Axios from 'axios';

class FNB extends Component{
    state = {
        food: []
    }

    getPostAPI = () => {
        Axios.get('https://staging-am.awalmula.co.id/rest/default/V1/categories')
        .then(result =>  {
            this.setState({
                food: result.data.children_data[0].children_data[0].children_data,
            });
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        const food = this.state.food
        console.log(food)
        return(
            <div className="container">
                <div className="row margin-auto hidden-xs hidden-sm">
                    {
                        food.map(food => {
                            return <DataFood  key={food.id} data={food} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default FNB;

