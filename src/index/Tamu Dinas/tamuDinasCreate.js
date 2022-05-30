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

const tamuDinasCreate = () => {
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
                                        <h3 className="mb-0">Tamu Dinas</h3><hr className="my-4" />
                                    </Col>
                                </Row>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Tambah Tamu Dinas
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
                                                        Nama Instansi
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="nama instansi"
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
                                                        Alamat Instansi
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="alamat instansi"
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
                                                        No HP
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="08xx"
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
                                                        Keperluan
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="keperluan"
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
                                                        Tipe Tamu
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Jabatan"
                                                        type="select"
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
                                        <Link to={"/admin/TamuDinas"} className="btn btn-warning float-right" size="sm">Cancel</Link>
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

export default tamuDinasCreate;