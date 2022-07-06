import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function SuratKeluarEdit() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const history = useHistory()
    const [nomor_surat, setNomor] = useState('')
    const [tujuan_surat, setTujuan] = useState('')
    const [nama_surat, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_surat, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;
	if (isAdmin) {
		swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
        history.push("/admin/SuratKeluar");
      });
	}
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        apiClient.get(`/surat-keluar/${id}`).then((response) => {
            const suratData = JSON.parse(response.data.suratKeluar)
            console.log(suratData)
            setNomor(suratData.nomor)
            setTujuan(suratData.tujuan)
            setNama(suratData.nama)
            setKeterangan(suratData.keterangan)
            setFile(suratData.file)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])
    function handleChange(e) {
		setFile(e.target.files[0])
		}
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file_surat", file_surat)
        const data = { nomor_surat, tujuan_surat, nama_surat, keterangan, file_surat }
        apiClient.put(`/surat-keluar/${id}`, data).then((e) => {
        swal("Good job!", "Data Berhasil Diedit!", "success");
        console.log(data)
            console.error(e)
            history.push('/admin/SuratKeluar')
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
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
                                        <h3 className="mb-0">Surat Keluar</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Surat Keluar
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
                                                        nama Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="nama Surat"
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
                                                        Tujuan Surat*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Tujuan Surat"
                                                        type="text"
                                                        value={tujuan_surat}
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

export default SuratKeluarEdit