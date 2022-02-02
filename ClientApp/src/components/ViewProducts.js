import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button,Nav } from 'reactstrap';

export class ViewProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }


    //function

    //render()

    render() {
        return (
            <div>
                <h3>Search Product belows:</h3>
             <Form>
                   <FormGroup>
                   <Label for="referSearch" >Ref:</Label>
                   <Input id="referSearch" type="text"/>
                    </FormGroup>

                    <FormGroup>

                        <Label for="nameSearch">Name:</Label>
                        <Input id="nameSearch" type="text"/>
                    </FormGroup>

                    <FormGroup check inline>
                        
                        <Input type="checkBox" id="snSearch" type="checkbox" />
                        <Label for="snSearch" check>SN</Label>
                    </FormGroup>

                    <FormGroup check inline>      
                        <Input type="checkBox" id="LOTSearch" type="checkbox" />
                        <Label for="snSearch" check>LOT</Label>
                    </FormGroup>

                    <FormGroup>
                        <Label for="locationSearch" check>Location</Label>
                        <Input type="text" id="locationSearch" />
                    </FormGroup>
                        
                </Form>


                <Button color="success">Search</Button>
            </div>
            )
    }
}