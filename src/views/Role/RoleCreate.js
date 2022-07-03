import React, { useState } from 'react'
import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function RoleCreate() {
    const [nama_role, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const history = useHistory()
	const handleSubmit = async(e) => {
        e.preventDefault();
        history.push('/admin/Role/')
        swal("Good job!", "Data Berhasil Ditambah!", "success");
    }

    const postData = () => {
        apiClient.post('http://cerman.tahutekno.com/api/role', {
            nama_role, keterangan
        })
    }
    const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;
	if (!isAdmin) {
		swal("Error!", "Anda bukan Admin!", "error").then(() => {
        history.push("/admin");
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
                                        <h3 className="mb-0">Role</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Tambah Role
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nama*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Role"
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
                                                        Keterangan*
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="keterangan Role"
                                                        type="textarea"
                                                        onChange={(e) => setKeterangan(e.target.value)}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row> 
                                        <Button
                                            className="btn btn-success float-right"
                                            bssize="sm"
                                            onClick={postData}
                                            type='submit'
                                        >
                                            Submit
                                        </Button> 
                                        <Link to={"/admin/Role"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default RoleCreate