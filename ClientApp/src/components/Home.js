import React, { Component } from 'react';
import {Pagination}  from 'reactstrap';

//https://reactstrap.github.io/?path=/story/home-installation--page
import "./Home.css"
import Input from "reactstrap/es/Input";

export class Home extends Component {
    static displayName = Home.name;
 

   //method and lifecycle


    render() {
        let a = [1, 2, 3]
        let arrayOfJsx = a.map(item => <div key={item} > I am {item} </div>)

        let anObjList = [
            { ref: "12345", name: "hello world", number: "10", location: "box 22" },
            { ref: "123245", name: "hello world", number: "10", location: "box 22" },
            { ref: "123545", name: "hello world", number: "10", location: "box 22" },
            { ref: "123545", name: "hello world", number: "10", location: "box 22" },
            { ref: "123545", name: "hello world", number: "10", location: "box 22" },
            { ref: "123545", name: "hello world", number: "10", location: "box 22" },
        ]

        let objectArrayOfJsx = anObjList.map((item, index) => 
            (
                <div className="lastTenProductListContainer">
                    <p>List:  {index+1}</p>
                    <ul className="lastTenProductList">
                    <li key={index}> Reference Number:{item.ref}</li>
                    <li key={index}> Product Name: {item.name}</li>
                    <li key={index}> Product Quantity: {item.number} </li>
                    <li key={index} > Product location : {item.location}</li>
                    </ul>
                </div>
            )
        
    ) // [  <li key=1> {item.ref}</li>,  <li key=2> { item.ref}</li>]

       
    return (
        <div>
            <div className="container">
                <h4>The last ten record added</h4>
                    {objectArrayOfJsx}
                    {/*<Pagination></Pagination>*/}
            </div>

            <div className="filter">

            </div>
      </div>
    );
  }
}
