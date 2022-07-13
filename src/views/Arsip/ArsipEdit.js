import { NavLink as Link, useHistory, useLocation } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import { saveToLocal, getFromLocal, removeFromLocal } from '../../services/Storage';

function ArsipEdit() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const history = useHistory()
    const [nomor_arsip, setNomor] = useState('')
    const [nama_arsip, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [kategori, setKategori] = useState('')
    // const [file_arsip, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    const kategoriList = location.state.kategori
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;

    if (isAdmin) {
        swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
            history.push("/admin/Arsip");
        });
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        apiClient.get(`/arsip/${id}`).then((response) => {
            const arsipData = JSON.parse(response.data.arsip)
            setNomor(arsipData.nomor)
            setNama(arsipData.nama)
            setKeterangan(arsipData.keterangan)
            setKategori(arsipData.kategori_id)
            apiClient.get(`/kategori`).then((response) => {
                console.log('response: ' + response.data.kategori)
            })
        }).catch((e) => {
        })
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nomor_arsip, nama_arsip, keterangan, kategori }
        apiClient.put(`/arsip/${id}`, data).then((e) => {
            swal("Good job!", "Data Berhasil Diedit!", "success");
            history.push('/admin/Arsip')
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
        })
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
                                    {
                                        loading ?
                                            <PulseLoader color={'#3C79BE'} loading={loading} size={15} margin={2} />
                                            :
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
                                                                placeholder="Nomor Arsip"
                                                                type="text"
                                                                value={nomor_arsip}
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
                                                                value={nama_arsip}
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
                                                                placeholder="keterangan Arsip"
                                                                type="textarea"
                                                                value={keterangan}
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
                                                                Tipe Arsip*
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-address"
                                                                type="select"
                                                                value={kategori}
                                                                onChange={(e) => setKategori(e.target.value)}
                                                            >
                                                                {kategoriList.map((kategori) => (
                                                                    <option key={kategori.id} value={kategori.id}>{kategori.nama}</option>
                                                                ))}
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                            {/* <Col md="12">
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
                                                        // onChange={handleChange}
                                                        disable
                                                    />
                                                </FormGroup>
                                            </Col> */}
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
                                    }
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