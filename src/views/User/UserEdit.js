import { NavLink as Link, useHistory } from "react-router-dom";
import { Card, CardHeader, Col, Input, FormGroup, Form, Container, Row, Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function UserEdit() {
    const history = useHistory()
    const location = useLocation();
    const id = JSON.parse(location.state.id)
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [roles, setRole] = useState('')
    const [loading, setLoading] = useState(false)
    const roleList = location.state.roles

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        apiClient.get(`http://cerman.tahutekno.com/api/user/${id}`).then((response) => {
            const userData = JSON.parse(response.data.user)
            setNama(userData.name)
            setEmail(userData.email)
            setRole(userData.role_id)
            apiClient.get(`/role`).then((response) => {
                console.log('response: ' + response.data.role)
            })
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

    const updateAPIData = async (e) => {
        const data = { nama, email, password, roles }
        apiClient.put(`/user/${id}`, data).then((e) => {
            console.error(e)
            history.push('/admin/User/')
            swal("Good job!", "Data Berhasil Diedit!", "success");
        }).catch((err) => {
            swal("Sorry!", "Data gagal Diedit!", "warning");
            console.error(err)
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                        <h3 className="mb-0">User</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Edit User
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
                                                                Nama*
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-address"
                                                                placeholder="Nama"
                                                                type="text"
                                                                value={nama}
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
                                                                Email*
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-address"
                                                                placeholder="xxx@mail.com"
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
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
                                                                Password*
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-address"
                                                                placeholder="password"
                                                                type="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-address"
                                                            >
                                                                Jabatan*
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-address"
                                                                placeholder="Jabatan"
                                                                type="select"
                                                                value={roles}
                                                                onChange={(e) => setRole(e.target.value)}
                                                                required
                                                            >
                                                                {roleList.map(role => {
                                                                    return(
                                                                        roles === role.id 
                                                                        ? <option key={role.id} value={role.id} selected>{role.nama}</option>
                                                                        : <option key={role.id} value={role.id}>{role.nama}</option>
                                                                        )
                                                                    })}
                                                            </Input>
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
                                                <Link to={"/admin/User"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default UserEdit