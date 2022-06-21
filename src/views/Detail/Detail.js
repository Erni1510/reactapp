import React from 'react'
import Header from "../../components/Headers/Header.js";
import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Form, Col, Container, Row, Button, FormGroup } from "reactstrap";


function Detail() {


  return (
    <div>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Detail Arsip</h3><hr className="my-4" />
                  </Col>
                </Row>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Nama Arsip :
                            <div className="form-control-label">nama</div> 
                            <hr className="my-4" />
                          </label>
                                             
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Keterangan :
                          </label>                          
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Tanggal Upload :
                          </label>                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn btn-success float-right"
                      bssize="sm"
                      // onClick={updateAPIData}
                      type='submit'
                    >
                      Submit
                    </Button>
                    <Link to={"/admin/Arsip"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
                  </div>
                </Form>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Detail