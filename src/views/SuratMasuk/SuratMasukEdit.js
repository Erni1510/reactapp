import { NavLink as Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';

function SuratMasukEdit() {
    const history = useNavigate()
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nomor_surat, setNomor] = useState('')
    const [asal_surat, setAsal] = useState('')
    const [uraian, setUraian] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_surat, setFile] = useState('')

    useEffect(() => {
        apiClient.get(`http://cerman.tahutekno.com/api/surat-masuk/${id}`).then((response) => {
            const suratData = JSON.parse(response.data.suratMasuk)
            console.log(suratData)
            setNomor(suratData.nomor_surat)
            setAsal(suratData.asal_surat)
            setUraian(suratData.uraian)
            setKeterangan(suratData.keterangan)
            setFile(suratData.file_surat)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nomor_surat, asal_surat, uraian, keterangan, file_surat }
        swal("Good job!", "Data Berhasil Diedit!", "success");
        apiClient.put(`http://cerman.tahutekno.com/api/surat-masuk/${id}`, data).catch((e) => {
            console.error(e)
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        history.push('/admin/SuratMasuk')
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
                                        <h3 className="mb-0">Surat Masuk</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Surat Masuk
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nomor Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nomor Surat"
                                                        type="text"
                                                        value={nomor_surat}
                                                        onChange={(e) => setNomor(e.target.value)}
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
                                                        Asal Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="asal Surat"
                                                        type="text"
                                                        value={asal_surat}
                                                        onChange={(e) => setAsal(e.target.value)}
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
                                                        Uraian Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Deskripsi Surat"
                                                        type="textarea"
                                                        value={uraian}
                                                        onChange={(e) => setUraian(e.target.value)}
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
                                                        Keterangan Surat
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Keterangan Surat"
                                                        type="text"
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
                                                        File Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Pilih File Surat"
                                                        type="file"
                                                        bssize="xs"
                                                        value={file_surat}
                                                        onChange={(e) => setFile(e.target.value)}
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
                                        <Link to={"/admin/SuratMasuk"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default SuratMasukEdit