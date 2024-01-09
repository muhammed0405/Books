import React from'react';
import "./style.scss"


const BooksUi = ({photo,title,description,blackColor})=>{
    return (
        <div  className="booksUi">
                        <img src={photo} alt=""/>
                        <h1 style={{transition: '0.5s',color: blackColor? "white": "black;"}}>{title}</h1>
                        <p style={{transition: '0.5s',color: blackColor? "#f1d9d9": "black;"}}>{description}</p>
        </div>
    )}

export default BooksUi;