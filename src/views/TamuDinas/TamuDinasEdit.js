import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import apiClient from "../../services/API.js";
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function TamuDinasEdit() {
    const history = useHistory()
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nama_instansi, setNama] = useState('')
    const [alamat_instansi, setAlamat] = useState('')
    const [no_hp, setNo] = useState('')
    const [keperluan, setKeperluan] = useState('')
    const [loading, setLoading] = useState(false)
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;
        if (isAdmin) {
            swal("Error!", "Anda bukan Sekretaris!", "error").then(() => {
            history.push("/admin/TamuDinas");
        });
        }

    useEffect(() => {
        setLoading(true) 
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        apiClient.get(`http://cerman.tahutekno.com/api/tamu-dinas/${id}`).then((response) => {
            const tamuData=JSON.parse(response.data.tamu)
            setNama(tamuData.nama)
            setAlamat(tamuData.alamat)
            setNo(tamuData.no_hp)
            setKeperluan(tamuData.keperluan)
        }).catch((e) => {
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data ={nama_instansi, alamat_instansi, no_hp, keperluan}
        apiClient.put(`http://cerman.tahutekno.com/api/tamu-dinas/${id}`, data).then((e) => {
            history.push('/admin/TamuDinas')
            swal("Good job!", "Data Berhasil Diedit!", "success");
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
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
                                        <h3 className="mb-0">Tamu Dinas</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit Tamu Dinas
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
                                        <Link to={"/admin/TamuDinas"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default TamuDinasEdit
