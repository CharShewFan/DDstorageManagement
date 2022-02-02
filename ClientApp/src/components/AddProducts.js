import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
//import ProductInformationForm from "/components/ProductInformationForm.js"

export class AddProduct extends Component {
    static displayName = AddProduct.name;

    constructor(props) {
        super(props);
        this.state = {
            /*
            this.referenceNumber = this.referenceNumber;
            this.name = this.name; // product name, string
            this.lotORsn = this.lot; //string
            this.lNsNUmber = this.lNsNumber; // string
            this.quantity = this.quantity; // int
            this.location = this.location; // string
            */

            referenceNumber: "",
            name : "",
            lotORsn: "",
            LNsNumber: "",
            quantity: 0,
            location: "",
            status1 : "secondary",
            status2 : "secondary",
            

        }
    }

 

    //function or life-cycle



    //render function
    render() {
        return (
            <div className="outerBox-1">
                <h3>Add Product Information Belows</h3>
                <Form>
                    <FormGroup>
                        <Label for="referNum">
                            Reference Number:
                        </Label>
                        <Input
                            id="referNum"
                            name="referenceNumber"
                            placeholder=""
                            type="text"
                         >
                        </Input>
                    </FormGroup>

                    
                    <FormGroup>
                        <Label for="ProductName">
                            Product Name:
                        </Label>
                        <Input
                            id="ProductName"
                            name="ProductName"
                            type="text"
                        />
                    </FormGroup>


                   
                    <FormGroup tag="fieldset">
                        <legend>
                            Select SN or LOT
                        </legend>
                    <FormGroup check>
                      
                        <Input id="lot" name="radio-LOT" type="radio">
                        </Input>

                        {"  "}
                        <Label check>
                            LOT
                        </Label>
                       
                    </FormGroup>

                    <FormGroup check>
                        <Input id="SN" type="radio" name="radio-SN" />
                        {"  "}
                        <Label check>
                            SN
                        </Label>

                        </FormGroup>
                    </FormGroup>


                    <FormGroup>
                        <Label for="quantity">
                            Quantity:
                        </Label>
                        <Input id="quantity" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="location" >
                            Location:
                        </Label>

                        <Input id="location" type="text" name="location">
                            </Input>
                    </FormGroup>

                    <Button color="primary">
                        Submmit
                    </Button>
                </Form>

            </div>
            )
    }



}