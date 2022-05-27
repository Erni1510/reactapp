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
    Col, Input, FormGroup, Form,
    Container,
    Row,
    Button,
    CardImage, CardBody, CardTitle, CardText,
    UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";

const laporanCreate= () => {
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Laporan</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Tambah Laporan
                                    </h6>
                                    {/* Address */}
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nama Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nama Arsip"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Nomor Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Nomor Arsip"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Deskripsi Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Deskripsi Arsip"
                                                        type="textarea"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        File Arsip
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Pilih File Arsip"
                                                        type="file"
                                                        size="xs"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="float-right"
                                            color="success"
                                            href="./"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Submit
                                        </Button>
                                        <Link to={"/admin/Laporan"} className="btn btn-warning float-right" size="sm">Cancel</Link>
                                    </div>
                                </Form>
                            </CardHeader>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default laporanCreate;