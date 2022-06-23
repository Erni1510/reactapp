import { NavLink as Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import apiClient from "../../services/API.js";
import swal from 'sweetalert';

function TamuYayasanEdit() {
    const history = useNavigate()
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nama_instansi, setNama] = useState('')
    const [alamat_instansi, setAlamat] = useState('')
    const [no_hp, setNo] = useState('')
    const [keperluan, setKeperluan] = useState('')

    useEffect(() => {
        apiClient.get(`http://cerman.tahutekno.com/api/tamu-yayasan/${id}`).then((response) => {
            const tamuData = JSON.parse(response.data.tamu)
            console.log(tamuData)
            setNama(tamuData.nama_instansi)
            setAlamat(tamuData.alamat_instansi)
            setNo(tamuData.no_hp)
            setKeperluan(tamuData.keperluan)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nama_instansi, alamat_instansi, no_hp, keperluan }
        swal("Good job!", "Data Berhasil Diedit!", "success");
        apiClient.put(`http://cerman.tahutekno.com/api/tamu-yayasan/${id}`, data).catch((e) => {
            console.error(e)
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/admin/TamuYayasan')
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
                                        <h3 className="mb-0">Tamu Yayasan</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Tamu Yayasan
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
                                                        id="input-address"
                                                        placeholder="nama instansi"
                                                        type="text"
                                                        value={nama_instansi}
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
                                                        id="input-address"
                                                        placeholder="alamat instansi"
                                                        type="text"
                                                        value={alamat_instansi}
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
                                                        id="input-address"
                                                        placeholder="08xx"
                                                        type="text"
                                                        value={no_hp}
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
                                                        id="input-address"
                                                        placeholder="keperluan"
                                                        type="textarea"
                                                        value={keperluan}
                                                        onChange={(e) => setKeperluan(e.target.value)}
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
                                        <Link to={"/admin/TamuYayasan"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default TamuYayasanEdit
