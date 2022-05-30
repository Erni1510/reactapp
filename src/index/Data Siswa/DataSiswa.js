// reactstrap components

import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    Button,
    UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";

const DataSiswa = () => {
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Data Siswa</h3>
                                <Link to={"/admin/siswaCreate"} className="btn btn-success float-right" size="sm">+Tambah</Link>
                               
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Nama Siswa</th>
                                        <th scope="col">TTL</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Jenis Kelamin</th>
                                        <th scope="col">Dokumen</th>
                                        <th scope="col">Rekap Nilai</th>
                                        <th scope="col" className="text-center">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align-middle text-center text-sm>
                                            <h6 className="mb-0 text-center text-sm">1</h6>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0">Rena</p>
                                        </td>
                                        <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0">Surabaya, 15 Juni 2018</p>
                                        </td>
                                        <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0">Jalan Merpati No 11</p>
                                        </td>
                                        <td className="align-middle text-center">
                                            <p className="text-sm font-weight-bold mb-0">Perempuan</p>
                                        </td>
                                        <td className="align-middle text-center">
                                        <Link to={""} target="_blank" className="btn btn-info" size="sm"><i className="fas fa-eye" aria-hidden="true" /></Link>
                                        </td>
                                        <td className="align-middle text-center">
                                        <Link to={""} target="_blank" className="btn btn-info" size="sm"><i className="fas fa-eye" aria-hidden="true" /></Link>
                                        </td>
                                        <td className="align-middle text-center">
                                        <Link to={"/admin/siswaEdit"} className="btn btn-success" size="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
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
    );
};

export default DataSiswa;