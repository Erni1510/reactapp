import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import Header from "../../components/Headers/Header.js";
import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Form, Col, Container, Row, FormGroup } from "reactstrap";
import moment from 'moment';

function SuratMasukDetail() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nomor_surat, setNomor] = useState('')
    const [asal_surat, setAsal] = useState('')
    const [uraian, setUraian] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file_surat, setFile] = useState('')
    const [created_at, setTanggal] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        apiClient.get(`http://cerman.tahutekno.com/api/surat-Masuk/${id}`).then((response) => {
            const suratMasukData = JSON.parse(response.data.suratMasuk)
            console.log(suratMasukData)
            setNomor(suratMasukData.nomor_surat)
            setAsal(suratMasukData.asal_surat)
            setUraian(suratMasukData.uraian)
            setKeterangan(suratMasukData.keterangan)
            setTanggal(suratMasukData.created_at)
            setFile(suratMasukData.file_surat)
        }).catch((e) => {
            console.error(e)
        })
    }, [id])

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
                                      <h3 className="mb-0">Detail Surat Masuk</h3><hr className="my-4" />
                                  </Col>
                              </Row>
                              <Form>
                                  <div className="pl-lg-4">
                                      <Row>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      1. Nomor Surat : {nomor_surat}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      2. Tujuan Surat : {asal_surat}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      3. Uraian : {uraian}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      4. Keterangan : {keterangan}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      5. Tanggal Upload : {moment(created_at).format('DD MMMM yyyy')}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                      </Row>
                                      <Link to={""} className="btn btn-success float-right" bssize="sm">View</Link>
                                      <Link to={"/admin/SuratMasuk"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default SuratMasukDetail