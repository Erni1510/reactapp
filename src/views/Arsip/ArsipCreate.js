import React, { useState } from 'react'
import { NavLink as Link, useHistory, useLocation } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function ArsipCreate() {
    const location = useLocation()
    const history = useHistory()
    const [nomor_arsip, setNomor] = useState('')
    const [nama_arsip, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_arsip, setFile] = useState('')
    const [kategori, setKategori] = useState('')
    const kategoriList = location.state.kategori;
	const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;

	if (isAdmin) {
		swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
        history.push("/admin/Arsip");
      });
	}
	
	function handleChange(e) {
		setFile(e.target.files[0])
		}
	
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData()
        formData.append("file_arsip", file_arsip)
        apiClient.post('/arsip', {
            nomor_arsip, nama_arsip, keterangan, kategori, file_arsip            
        }).then((res) => {
            swal("Good job!", "Data Berhasil Ditambah!", "success")
            history.push('/admin/Arsip/')
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
                                                        Nomor Arsip*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Arsip"
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
                                                        Tipe Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        type="select"
                                                        value={kategori}
                                                        onChange={(e) => setKategori(e.target.value)}
                                                        required
                                                    >
                                                        <>{kategoriList.map(kategori => (
                                                            <option key={kategori.id} value={kategori.id}>{kategori.nama}</option>
                                                        ))}</>
                                                    </Input>
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