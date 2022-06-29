import { NavLink as Link } from "react-router-dom";
import {Card,CardHeader,CardFooter,Pagination,PaginationItem,PaginationLink,Table,Container,Row,Button } from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useEffect, useState } from 'react'
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";

function User() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [roleList, setRoleList] = useState()

    const onDelete = async (id) => {
        console.log(id)
        let isMounted = true
        await apiClient.delete(`http://cerman.tahutekno.com/api/user`).then((response) => {
            swal("Good job!", "Data Berhasil Dihapus!", "success");
            getData(isMounted)
        }).catch((err) => {
            swal("Sorry!", "Data gagal Dihapus!", "warning");
            console.error(err)
        })
    }

    const getData = async (isMounted) => {
        await apiClient.get('/user').then((response) => {
            const userData = JSON.parse(response.data.user)
            isMounted && setUser(userData)
            console.log(userData)
            apiClient.get('/role').then((response) => {
                const role = JSON.parse(response.data.role)
                setRoleList(role)
            })
        }).catch((err) => {
            console.error(err)
            return isMounted = false
        })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        let isMounted = true
        getData(isMounted)
    }, [])

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">User</h3>
                                <Link to={{ pathname: "/admin/UserCreate", state: { roles: roleList } }} className="btn btn-success float-right" bssize="sm">+Tambah</Link>
                            </CardHeader>
                            {
                                loading ?
                                    <PulseLoader color={'#3C79BE'} loading={loading} size={15} margin={2} />
                                    :
                                    <div>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col" className="text-center">No</th>
                                                    <th scope="col">Nama</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Jabatan</th>
                                                    <th scope="col">Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <>
                                                {user.map(data => {
                                                    return (
                                                        <tr key={data.id}>
                                                            <td align-middle text-center text-sm>
                                                                <h6 className="mb-0 text-center text-sm">{data.id}</h6>
                                                            </td>
                                                            <td>
                                                                <p className="text-sm font-weight-bold mb-0">{data.name}</p>
                                                            </td>
                                                            <td>
                                                                <p className="text-sm font-weight-bold mb-0">{data.email}</p>
                                                            </td>
                                                            <td>
                                                                <>
                                                                {roleList.map(role => {
                                                                    return data.role_id === role.id ? <p className="text-sm font-weight-bold mb-0">{role.nama}</p> : null
                                                                })}
                                                                </>
                                                                
                                                            </td>
                                                            <td>
                                                                <Link to={{ pathname: '/admin/editUser/', state: { id: data.id, roles: roleList } }} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
                                                                <Button onClick={() => onDelete(data.id)} id={data.id} className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                )}
                                                </>
                                                
                                            </tbody>
                                        </Table>
                                    </div>
                            }
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className="disabled">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                tabIndex="-1"
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default User

