import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"
import GenresUI from "./GenresUi";
import UFO from "../../../assets/img/UFO.svg"
import Giraffe from "../../../assets/img/giraffe.svg"
import Brain from "../../../assets/img/brain.svg"
import Heart from "../../../assets/img/heart.svg"
import Detective from "../../../assets/img/detective.svg"
import Money from "../../../assets/img/money.svg"
const Genres = ({blackColor})=>{
    return(
        <>
            <div className="container">
                <div className="genres">
                    <div className="genres--title">
                      <h1 style={{transition: '0.5s',color: blackColor? "white" : "black"}} >Genres</h1>
                      <NavLink path="/view_all"> View All</NavLink>  
                    </div>
                    

                    <div className="genres--container">
                        <GenresUI img={UFO}/>
                        <GenresUI img={Giraffe} />
                        <GenresUI img={Brain} />
                        <GenresUI img={Heart}/>
                        <GenresUI img={Detective} />
                        <GenresUI img={Money} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Genres;