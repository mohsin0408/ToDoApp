 import React from "react";
import Card from "./Card";
import Scards from "./Scards";

function Main (){
    return(
        <>
            <div className="Main">
                <div className="FirstMain">
                <Card p="Lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card p="Fuga necessitatibus incidunt ex hic soluta rem reiciendi."/>
                <Card p="Facilis quas quasi eveniet nostrum officiis repellat rer."/>
                <Card p="Um itaque maiores sed assumenda ut, excepturi sequi quod."/>
                <Card p="Nisi nobis quaerat! Nesciunt voluptatum perspiciatis,rep."/>
                <Card p="Ellendus laboriosam consequatur necessitatibus,o numquam."/>
                </div>
                
                <div className="SecondMain">
                <Scards p="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Scards p="facilis quas quasi eveniet nostrum officiis repellat rer."/>
                <Scards p="nisi nobis quaerat! Nesciunt voluptatum perspiciatis,rep."/>
                </div>
            </div>
        </>
    )
}

export default Main;