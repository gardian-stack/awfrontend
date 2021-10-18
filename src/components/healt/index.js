import React, { Component } from 'react';
import DataFood from './DataHealt';
import Axios from 'axios';

class Healt extends Component{
    state = {
        healt: []
    }

    getPostAPI = () => {
        Axios.get('https://staging-am.awalmula.co.id/rest/default/V1/categories')
        .then(result =>  {
            this.setState({
                healt: result.data.children_data[0].children_data[1].children_data,
            });
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        const healt = this.state.healt
        console.log(healt)
        return(
            <div className="container">
                <div className="row margin-auto hidden-xs hidden-sm">
                    {
                        healt.map(healt => {
                            return <DataFood  key={healt.id} data={healt} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Healt;

