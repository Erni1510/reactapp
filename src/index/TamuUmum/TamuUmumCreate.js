import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React from 'react'

function TamuUmumCreate() {
  return (
    <>
                <Header />
                <Container className="mt--7" fluid>
                    <Row>
                        <Col className="order-xl-1" xl="12">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Tamu Umum</h3><hr className="my-4" />
                                        </Col>
                                    </Row>
                                    <Form onSubmit={this.handleSubmit}>
                                        <h6 className="heading-small text-muted mb-4">
                                            Tambah Tamu Umum
                                        </h6>
                                        {/* Address */}
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Nama Instansi
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-address"
                                                            placeholder="nama instansi"
                                                            type="text"
                                                            value={this.state.nama_instansi}
                                                            onChange={(event)=>this.handleChange(event)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Alamat Instansi
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-address"
                                                            placeholder="alamat instansi"
                                                            type="text"
                                                            value={this.state.alamat_instansi}
                                                            onChange={(event)=>this.handleChange(event)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            No HP
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-address"
                                                            placeholder="08xx"
                                                            type="text"
                                                            value={this.state.no_hp}
                                                            onChange={(event)=>this.handleChange(event)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Keperluan
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-address"
                                                            placeholder="keperluan"
                                                            type="textarea"
                                                            value={this.state.keperluan}
                                                            onChange={(event)=>this.handleChange(event)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Tipe Tamu
                                                        </label>
                                                        <select 
                                                        className="form-control-alternative" 
                                                        value={this.state.tipe_tamu}
                                                        onChange={(event)=>this.handleChange(event)}>
                                                        <option>
                                                            Tamu Umum
                                                        </option>
                                                    </select>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button
                                                className="float-right"
                                                color="success"
                                                href="./"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Submit
                                            </Button>
                                            <Link to={"/admin/TamuUmum"} className="btn btn-warning float-right" size="sm">Cancel</Link>
                                        </div>
                                    </Form>
                                </CardHeader>
    
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
  )
}

export default TamuUmumCreate