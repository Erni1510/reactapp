import React, { useState } from 'react'
import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import apiClient from '../../services/API.js';
import swal from 'sweetalert';

function ArsipCreate() {
    const [nama_arsip, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_arsip, setFile] = useState('')
    const history = useHistory()

    const postData = () => {
        apiClient.post('/arsip', {
            nama_arsip, keterangan, file_arsip
        })
        swal("Good job!", "Data Berhasil Ditambah!", "success");
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        history.push('/admin/Arsip/')
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
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Tambah Arsip
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nama Arsip*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Arsip"
                                                        type="text"
                                                        onChange={(e) => setNama(e.target.value)}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Keterangan Arsip*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="leterangan Arsip"
                                                        type="textarea"
                                                        onChange={(e) => setKeterangan(e.target.value)}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        File Arsip*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Pilih File Arsip"
                                                        type="file"
                                                        bssize="xs"
                                                        onChange={(e) => setFile(e.target.value)}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row> 
                                        <Button
                                            className="btn btn-success float-right"
                                            bssize="sm"
                                            onClick={postData}
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
        </>
    )
}

export default ArsipCreate