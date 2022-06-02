import { NavLink as NavLinkRRD, Link } from "react-router-dom";
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
} from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React from 'react'

function TamuDinas() {
  return (
    <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Tamu Dinas</h3>
                                <Link to={"/admin/TamuDinasCreate"} className="btn btn-success float-right" size="sm">+Tambah</Link>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="text-center">No</th>
                                        <th scope="col">Nama Instansi</th>
                                        <th scope="col">Alamat Instansi</th>
                                        <th scope="col">No HP</th>
                                        <th scope="col">Keperluan</th>
                                        <th scope="col">Tipe Tamu</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align-middle text-center text-sm>
                                            <h6 className="mb-0 text-center text-sm">1</h6>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Bima</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Surabaya</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">087865654765</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Rapat</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Tamu Dinas</p>
                                        </td>
                                        <td>
                                        <Link to={"/admin/TamuDinasEdit"} className="btn btn-success" size="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
                                        <div className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></div>
                                        </td>
                                    </tr>
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
                                                2 <span className="sr-only">(current)</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                3
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

export default TamuDinas
