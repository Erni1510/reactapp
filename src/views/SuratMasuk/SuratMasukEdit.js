import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function SuratMasukEdit() {
    const history = useHistory()
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nomor_surat, setNomor] = useState('')
    const [asal_surat, setAsal] = useState('')
    const [nama_surat, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_surat, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;
        if (isAdmin) {
            swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
            history.push("/admin/SuratMasuk");
        });
        }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        apiClient.get(`http://cerman.tahutekno.com/api/surat-masuk/${id}`).then((response) => {
            const suratData = JSON.parse(response.data.suratMasuk)
            console.log(suratData)
            setNomor(suratData.nomor)
            setAsal(suratData.asal)
            setNama(suratData.nama_surat)
            setKeterangan(suratData.keterangan)
            setFile(suratData.file)            
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nomor_surat, asal_surat, nama_surat, keterangan, file_surat }
        apiClient.put(`http://cerman.tahutekno.com/api/surat-masuk/${id}`, data).then((e) => {
            console.error(e)
            history.push('/admin/SuratMasuk')
            swal("Good job!", "Data Berhasil Diedit!", "success");
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
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
                                                        Nama Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Deskripsi Surat"
                                                        type="textarea"
                                                        value={nama_surat}
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

export default SuratMasukEdit