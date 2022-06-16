import { NavLink as Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Button
} from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useEffect, useState } from 'react'
import apiClient from '../../services/API.js';
import swal from 'sweetalert';

function User() {
    const [user, setUser] = useState([])

    const onDelete = async (id) => {
        console.log(id)
        let isMounted=true
        await apiClient.delete(``).then((response) => {
            swal("Good job!", "Data Berhasil Dihapus!", "success");
            getData(isMounted)
        }).catch((err) => {
            swal("Sorry!", "Data gagal Dihapus!", "warning");
            console.error(err)
        })
    }

    const getData = async (isMounted) => {
        await apiClient.get('http://localhost:8000/api/user').then((response) => {
            const userData = JSON.parse(response.data.user)
            isMounted && setUser(userData)
        }).catch((err) => {
            console.error(err)
            return isMounted=false
        })
    }

    useEffect(() => {
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
                                <Link to={"/admin/UserCreate"} className="btn btn-success float-right" bssize="sm">+Tambah</Link>
                            </CardHeader>
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
                                {user.map(data => {
                                        return (
                                    <tr ket={data.id}>
                                        <td align-middle text-center text-sm>
                                            <h6 className="mb-0 text-center text-sm">{data.id}</h6>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">{data.nama}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">{data.username}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">{data.jabatan}</p>
                                        </td>
                                        <td>
                                         <Link to={{ pathname: '/admin/editUser/', state: { id: data.id } }} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
                                        <Button onClick={() => onDelete(data.id)} id={data.id} className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></Button>
                                        </td>
                                    </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
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

