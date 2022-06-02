import React from 'react'
import { NavLink as Link } from "react-router-dom";
import { Card, Container, Row,CardBody, CardTitle, CardText } from "reactstrap";
import Header from "../../components/Headers/Header.js";

function Galeri() {
  return (
    <>
            <Header />
            <Container className="mt--7" fluid> 
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <img orientation="top" src="https://th.bing.com/th/id/OIP.neTp253amaORNv-lj2e9-AHaE8?pid=ImgDet&rs=1" />
                        <CardBody>
                            <CardTitle>Arsip Dokumen</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </CardText>
                            <Link to={"/"} className="btn btn-success" size="sm">view</Link>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </>
  )
}

export default Galeri