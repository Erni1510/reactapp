import React, { useEffect, useState } from 'react'
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
import apiClient from '../../services/API.js';

function SuratKeluar() {
    const [suratKeluar, setSuratKeluar] = useState([])

    useEffect(() => {
        let isMounted = true

        apiClient.get('http://localhost:8000/api/surat-keluar').then((response) => {
            const suratKeluarData = JSON.parse(response.data.suratKeluar)
            isMounted && setSuratKeluar(suratKeluarData)
            console.log(suratKeluarData)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

  return (
      <div>
          <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Surat Keluar</h3>
                                <Link to={"/admin/SuratKeluarCreate"} className="btn btn-success float-right" bssize="sm">+Tambah</Link>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Nomor Surat</th>
                                        <th scope="col">tujuan Surat</th>
                                        <th scope="col">Uraian</th>
                                        <th scope="col">Keterangan</th>
                                        <th scope="col">Tipe</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {suratKeluar.map(data => {
                                    return (
                                        <>
                                    <tr>
                                    <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.id}</p>
                                        </td>
                                        <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.nomor_surat}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.tujuan_surat}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.uraian}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.keterangan}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0" key={data.id}>{data.tipe_surat}</p>
                                        </td>
                                        
                                        <td>
                                        <Link to={""} target="_blank" className="btn btn-info" bssize="sm"><i className="fas fa-eye" aria-hidden="true" /></Link>
                                            <Link to={"/admin/editSuratKeluar/:id"} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
                                            <div className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></div>
                                        </td>
                                    </tr>
                                    </>
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
      </div>
            
  )
}

export default SuratKeluar