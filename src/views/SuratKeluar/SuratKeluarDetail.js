import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import Header from "../../components/Headers/Header.js";
import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Form, Col, Container, Row, FormGroup } from "reactstrap";
import moment from 'moment';
import PulseLoader from "react-spinners/PulseLoader";

function SuratKeluarDetail() {
    const location = useLocation();
    const [id, setID] = useState(JSON.parse(location.state.id))
    const [nomor, setNomor] = useState('')
    const [tujuan, setTujuan] = useState('')
    const [nama, setnama] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [file, setFile] = useState('') 
    const [created_at, setTanggal] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        apiClient.get(`http://cerman.tahutekno.com/api/surat-keluar/${id}`).then((response) => {
            const suratKeluarData = JSON.parse(response.data.suratKeluar)
            setNomor(suratKeluarData.nomor)
            setTujuan(suratKeluarData.tujuan)
            setnama(suratKeluarData.nama)
            setKeterangan(suratKeluarData.keterangan)
            setTanggal(suratKeluarData.created_at)
            setFile(suratKeluarData.file)
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
                                      <h3 className="mb-0">Detail Surat Keluar</h3><hr className="my-4" />
                                  </Col>
                              </Row>
                              <Form>
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
                                                      Nomor Surat : {nomor}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      Tujuan Surat : {tujuan}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      Nama Surat : {nama}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      Keterangan : {keterangan}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      Tanggal Upload : {moment(created_at).format('DD MMMM yyyy')}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                      </Row>
                                      <a href={'http://cerman.tahutekno.com/'+file} className="btn btn-success float-right" bssize="sm">View</a>
                                      <Link to={"/admin/SuratKeluar"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default SuratKeluarDetail