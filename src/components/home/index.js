import React, { Component } from 'react';
import DataFood from './AllProduct';
import Axios from 'axios';

class Home extends Component{
    state = {
        allproduct: []
    }

    getPostAPI = () => {
        Axios.get('https://staging-am.awalmula.co.id/rest/default/V1/products?searchCriteria[pageSize]=10')
        .then(result =>  {
            this.setState({
                allproduct: result.data,
            });
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        const allproduct = this.state.allproduct
        console.log(allproduct)
        return(
            <div className="container">
                <div className="row margin-auto hidden-xs hidden-sm">
                    {
                        allproduct.map(food => {
                            return <DataFood  key={allproduct.id} data={allproduct} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Home;

