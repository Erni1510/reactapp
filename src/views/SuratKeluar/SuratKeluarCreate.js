import React, { useState } from 'react';
import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function SuratKeluarCreate() {
    const history = useHistory()
    const [nomor_surat, setNomor] = useState('')
    const [tujuan_surat, setTujuan] = useState('')
    const [nama_surat, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_surat, setFile] = useState('')
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;
	if (isAdmin) {
		swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
        history.push("/admin/SuratKeluar");
      });
	}
    function handleChange(e) {
		setFile(e.target.files[0])
		}

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file_surat", file_surat)
        apiClient.post('/surat-keluar', {
            nomor_surat, tujuan_surat, nama_surat, keterangan, file_surat
        },
        {headers: {'Content-Type' : 'multipart/form-data'}}).then((res) => {
            swal("Good job!", "Data Berhasil Ditambah!", "success")
            history.push('/admin/SuratKeluar') 
        }).catch((err) => {
            swal("Error!", "Data Gagal Ditambahkan!", "error")
        });
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
                                        Tambah Surat Keluar
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
                                                        Nama Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Surat"
                                                        type="textarea"
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
                                                        Tujuan Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="tujuan Surat"
                                                        type="text"
                                                        onChange={(e) => setTujuan(e.target.value)}
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
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="btn btn-success float-right"
                                            bssize="sm"
                                            type='submit'
                                        >
                                            Submit
                                        </Button>
                                        <Link to={"/admin/SuratKeluar"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default SuratKeluarCreate