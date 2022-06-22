import React, { useState, useEffect } from 'react';
import apiClient from '../../services/API.js';
import { useLocation } from "react-router-dom";
import Header from "../../components/Headers/Header.js";
import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, Form, Col, Container, Row, FormGroup } from "reactstrap";
import moment from 'moment';
import PulseLoader from "react-spinners/PulseLoader";

function ArsipDetail() {
  const location = useLocation();
  const [id, setID] = useState(JSON.parse(location.state.id))
  const [nama_arsip, setNama] = useState('')
  const [created_at, setTanggal] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [file_arsip, setFile] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
      apiClient.get(`http://localhost:8000/api/arsip/${id}`).then((response) => {
          const arsipData = JSON.parse(response.data.arsip)
          console.log(arsipData)
          setNama(arsipData.nama_arsip)
          setKeterangan(arsipData.keterangan)
          setTanggal(arsipData.created_at)
      }).catch((e) => {
          console.error(e)
      })
  }, [id])


  const handleSubmit = async (e) => {
      e.preventDefault();
  }
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
                                      <h3 className="mb-0">Detail Arsip</h3><hr className="my-4" />
                                  </Col>
                              </Row>
                              <Form onSubmit={handleSubmit}>
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
                                                      Nama Arsip : {nama_arsip}
                                                  </label>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-address"
                                                  >
                                                      Keterangan Arsip : {keterangan}
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
                                      <Link to={""} className="btn btn-success float-right" bssize="sm">View</Link>
                                      <Link to={"/admin/Arsip"} className="btn btn-warning float-right" bssize="sm">Cancel</Link>
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

export default ArsipDetail