import React, { Component } from "react"
import { Form, Label, Input, FormGroup, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';


export class ProductInformationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            referenceNumber: "",
            name: "",
            lotORsn: "",
            LNsNumber: "",
            quantity: 0,
            location: "",
            status1: "secondary",
            status2: "secondary",
        }

        render()
        {
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

                        { /*Product name*/}
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


                        { /*this is for sn and lot selcection radio button forgroup*/}
                        <FormGroup tag="fieldset">
                            <legend>
                                Select SN or LOT
                        </legend>
                            <FormGroup check>
                                {/*<Button color={ this.prop.status1}>SN</Button>
                        <Button color={this.prop.status2}>LOT</Button>
                        */}
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
}