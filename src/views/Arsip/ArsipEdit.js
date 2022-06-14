import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';

function ArsipEdit() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const history = useHistory()
    const [nama_arsip, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_arsip, setFile] = useState('')

    useEffect(() => {
        apiClient.get(`http://localhost:8000/api/arsip/${id}`).then((response) => {
            const arsipData = JSON.parse(response.data.arsip)
            console.log(arsipData)
            setNama(arsipData.nama_arsip)
            setKeterangan(arsipData.keterangan)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nama_arsip, keterangan, file_arsip }
        apiClient.put(`http://localhost:8000/api/arsip/${id}`, data).catch((e) => {
            console.error(e)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/admin/Arsip')
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
                                        <h3 className="mb-0">Edit Arsip</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
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
                                            className="btn btn-success float-right"
                                            bssize="sm"
                                            onClick={updateAPIData}
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

export default ArsipEdit