import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';

function SuratKeluarEdit() {
    const [nomor, setNomor] = useState('')
    const [tujuan, setTujuan] = useState('')
    const [uraian, setUraian] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file, setFile] = useState('')

    let data = { nomor, tujuan, uraian, keterangan, file };
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data);
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
                                        <h3 className="mb-0">Surat Keluar</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Surat Keluar
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
                                                        Nomor Surat
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nomor Surat"
                                                        type="text"
                                                        onChange={(e) => setNomor(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Tujuan Surat
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="tujuan Surat"
                                                        type="text"
                                                        onChange={(e) => setTujuan(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Uraian Surat
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Deskripsi Surat"
                                                        type="textarea"
                                                        onChange={(e) => setUraian(e.target.value)}
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
                                                        File Surat
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Pilih File Surat"
                                                        type="file"
                                                        bssize="xs"
                                                        onChange={(e) => setFile(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="float-right"
                                            color="success"
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

export default SuratKeluarEdit

