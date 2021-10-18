import { useLocation } from 'react-router-dom'
import DataProduct from './DataProduct';

function Product () {
    const location = useLocation()
    // const location.state.myarray
    console.log(location.state.myArray[0].children_data)
    return (
        <div>
            <div className="container">
                <div className="row margin-auto hidden-xs hidden-sm">
                    {
                        location.state.myArray[0].children_data.map(product => {
                            return <DataProduct  key={product.id} data={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
