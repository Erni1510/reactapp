import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';

function ArsipEdit() {
    const [nama_arsip, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_arsip, setFile] = useState('')
    const [id, setID] =useState(null)

    useEffect(() => {
        setID(localStorage.getItem('id'));
        setNama(localStorage.getItem('nama_arsip'));
        setKeterangan(localStorage.getItem('keterangan'));
        setFile(localStorage.getItem('file_arsip'))
    }, [])
    const updateAPIData = () => {
        apiClient.put('http://localhost:8000/api/arsip/${id}', {
            nama_arsip, keterangan, file_arsip
        }).then(() => {
            history.push
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log();
    }
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
                                        <h3 className="mb-0">Arsip</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form >
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Arsip
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nama Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Arsip"
                                                        type="text"
                                                        value={nama_arsip}
                                                        onChange={(e) => setNama(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Keterangan Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="leterangan Arsip"
                                                        type="textarea"
                                                        value={keterangan}
                                                        onChange={(e) => setKeterangan(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        File Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Pilih File Arsip"
                                                        type="file"
                                                        bssize="xs"
                                                        value={file_arsip}
                                                        onChange={(e) => setFile(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="float-right"
                                            color="success"
                                            type="submit"
                                            onClick={updateAPIData}
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
        </>
    )
}

export default ArsipEdit