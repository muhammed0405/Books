import React from 'react';
import "./style.scss"
const CartUi = ({photo,name, author, quantity , cost}) => {
    return (
        <>
            <div className="cartUi">
                <img src={photo} alt={"img"}/>

                <div className="infoOfBook">

                    <div className="title">
                        <h1>{name}
                        </h1>

                        <p className={"author"}>{author}</p>
                    </div>


                    <div className="costAndQuantity">
                        <p className={"quantity"}>{quantity}</p>
                        <p className={"cost"}>{cost}</p>
                    </div>

                </div>

                {
                    // when I press the button this book should to deleted from cart
                }
                <p className={"remove"}> Remove </p>
            </div>

        </>
    );
};

export default CartUi;