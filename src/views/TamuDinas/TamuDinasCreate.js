import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState } from 'react';
import apiClient from '../../services/API.js';
import swal from 'sweetalert';

function TamuDinasCreate() {
    const history = useHistory()
    const [nama_instansi, setNama] = useState('')
    const [alamat_instansi, setAlamat] = useState('')
    const [no_hp, setNo] = useState('')
    const [keperluan, setKeperluan] = useState('')
    const postData = () => {
        apiClient.post('http://cerman.tahutekno.com/api/tamu-dinas', {
            nama_instansi, alamat_instansi, no_hp, keperluan
        })
        swal("Good job!", "Data Berhasil Ditambah!", "success");
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        history.push('/admin/TamuDinas')
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
                                        <h3 className="mb-0">Tamu Dinas</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Tambah Tamu Dinas
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
                                                        Nama Instansi*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="nama_instansi"
                                                        placeholder="nama instansi"
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
                                                        Alamat Instansi*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="alamat_instansi"
                                                        placeholder="alamat instansi"
                                                        type="text"
                                                        onChange={(e) => setAlamat(e.target.value)}
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
                                                        No HP*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="no_hp"
                                                        placeholder="08xx"
                                                        type="text"
                                                        onChange={(e) => setNo(e.target.value)}
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
                                                        Keperluan*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="keperluan"
                                                        placeholder="keperluan"
                                                        type="textarea"
                                                        onChange={(e) => setKeperluan(e.target.value)}
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
                                        <Link to={"/admin/TamuDinas"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default TamuDinasCreate