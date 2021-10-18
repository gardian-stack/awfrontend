import React from 'react'
import {Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import './DataHealt.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const DataFood = (props) => {
    return(
        <div className="col-4 mb-3">
            <Card>
                <CardImg top width="100%" src="//via.placeholder.com/350x180" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.data.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.name}</CardSubtitle>
                <CardText>
                {props.data.is_active === true ? (
                    'Already In Stock'
                ) : (
                    'Not Ready In Stock'
                )}
                </CardText>
                <Link to={{
                        pathname: "/product/" + props.data.id,
                        state: { myArray: [props.data, 'new value'] } // your data array of objects
                    }} className="text-center btn btn-primary">Show</Link>
                </CardBody>
            </Card>
        </div>
    )
}

export default DataFood;