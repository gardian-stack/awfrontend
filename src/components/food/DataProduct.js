import React from 'react'
import {Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataProduct = (props) => {
    return (
        <div className="col-4 mb-3">
            <Card>
                <CardImg top width="100%" src="//via.placeholder.com/350x180" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.data.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.name}</CardSubtitle>
                <CardText>
                {props.data.is_active === true ? (
                    'Already In Stock : ' + props.data.product_count
                ) : (
                    'Product Not Active'
                )}
                </CardText>
                {props.data.is_active === true ? (
                    <button className="btn btn-warning">Order</button>
                ) : (
                    ''
                )}
                </CardBody>
            </Card>
        </div>
    )
}

export default DataProduct
