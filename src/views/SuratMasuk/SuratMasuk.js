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
} from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useEffect, useState } from 'react'
import apiClient from '../../services/API.js';

function SuratMasuk() {
    const [suratMasuk, setSuratMasuk] = useState([])

    useEffect(() => {
        let isMounted = true

        apiClient.get('http://localhost:8000/api/request-read').then((response) => {
            const suratMasukData = JSON.parse(response.data.suratMasuk)
            isMounted && setSuratMasuk(suratMasukData)
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    
  return (
    <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Surat Masuk</h3>
                                <Link to={"/admin/SuratMasukCreate"} className="btn btn-success float-right" bssize="sm">+Tambah</Link>
                            </CardHeader>

                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Nomor Surat</th>
                                        <th scope="col">Asal Surat</th>
                                        <th scope="col">Uraian</th>
                                        <th scope="col">Keterangan</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0">1</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Surat Jabatan</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">229</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Jabatan ketua TK</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Rekomendasi Jabatan</p>
                                        </td>
                                        <td>
                                        <Link to={""} target="_blank" className="btn btn-info" bssize="sm"><i className="fas fa-eye" aria-hidden="true" /></Link>
                                            <Link to={"/admin/editSuratMasuk/:id"} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
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

export default SuratMasuk
