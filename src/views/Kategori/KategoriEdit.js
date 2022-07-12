import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';

function KategoriEdit() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const history = useHistory()
    const [nama_kategori, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')

    useEffect(() => {
        apiClient.get(`http://cerman.tahutekno.com/api/kategori/${id}`).then((response) => {
            const kategoriData = JSON.parse(response.data.kategori)
            setNama(kategoriData.nama)
            setKeterangan(kategoriData.keterangan)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nama_kategori, keterangan}
        apiClient.put(`http://cerman.tahutekno.com/api/kategori/${id}`, data).catch((e) => {
            console.error(e)
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/admin/Kategori')
        swal("Good job!", "Data Berhasil Diedit!", "success");
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
                                        <h3 className="mb-0">Edit Kategori</h3><hr className="my-4" />
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
                                                        Nama Kategori*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Kategori"
                                                        type="text"
                                                        value={nama_kategori}
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
                                                        Keterangan*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="keterangan"
                                                        type="textarea"
                                                        value={keterangan}
                                                        onChange={(e) => setKeterangan(e.target.value)}
                                                        required
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
                                        <Link to={"/admin/Kategori"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default KategoriEdit