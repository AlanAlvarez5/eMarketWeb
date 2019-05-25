import React, { Component } from 'react'
import ControlledCarousel from './Carousel';

export default class Home extends Component {
    render() {
        return (
        <React.Fragment>
            <div className = "py-0">
            <ControlledCarousel></ControlledCarousel>
               <div className = "container" >
                    {/*<Title name = "Nuestros" title = "productos" />*/}
                    <div className = "row">
                        {/*<ProductConsumer>
                            {value=>{
                                return value.products.map(product =>{
                                    return <Product key = {product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>*/}
                    </div>
               </div>
            </div>
        </React.Fragment>
        );
    }
}