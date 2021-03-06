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
    Row, Button
} from "reactstrap";
import Header from "../../components/Headers/Header.js";
import React, { useEffect, useState } from 'react'
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import moment from 'moment';
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function TamuUmum() {
    const [tamu, setTamu] = useState([])
    const [loading, setLoading] = useState(false)
	const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;

    const onDelete = async (id) =>{
        if (isAdmin) {
		swal("Error!", "Anda bukan Sekretaris!", "error") 
		}else{
            let isMounted = true
            swal({
                title: "Apakah Kamu Yakin?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    apiClient.delete(`/tamu-umum/${id}`).then((response) => {
                        getData(isMounted)
                    swal("Good job! ", "Data Berhasil Dihapus!", "success");
                    }).catch((err) => {
                        swal("Sorry!", "Data gagal Dihapus!", "warning");
                    })
                }
              })
    }}

    const getData = async (isMounted) => {
        await apiClient.get('http://cerman.tahutekno.com/api/tamu-umum').then((response) => {
            const tamuData = JSON.parse(response.data.tamu)
            isMounted && setTamu(tamuData)
        }).catch((err) => {
            return isMounted = false;
        })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
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
                                        <h3 className="mb-0">Tamu Umum</h3>
                                        <Link to={"/admin/TamuUmumCreate"} className="btn btn-success float-right" bs="sm">+Tambah</Link>
                                    </CardHeader>
                                    {
                                loading ?
                                    <PulseLoader color={'#3C79BE'} loading={loading} size={15} margin={2} />
                                    :
                                    <div>
                                    <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="text-center">No</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Nama Instansi</th>
                                        <th scope="col">Alamat Instansi</th>
                                        <th scope="col">No HP</th>
                                        <th scope="col">Keperluan</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {tamu.map((data, idx) => {
                                    return (
                                        <>
                                    <tr>
                                        <td align-middle text-center text-sm>
                                            <h6 className="mb-0 text-center text-sm"  key={data.id}>{idx+1}</h6>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0"  key={data.id}>{moment(data.created_at).format('DD MMMM yyyy')}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0"  key={data.id}>{data.nama}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0"  key={data.id}>{data.alamat}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0"  key={data.id}>{data.no_hp}</p>
                                        </td>
                                        <td>
                                            <p className="text-sm font-weight-bold mb-0"  key={data.id}>{data.keperluan}</p>
                                        </td>
                                        <td>
                                        <Link to={{ pathname: '/admin/editTamuUmum/', state: { id: data.id } }} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
                                        <Button onClick={() => onDelete(data.id)} id={data.id} className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></Button>
                                        </td>
                                    </tr>
                                    </>
                                    )
                                })}
                                </tbody>
                            </Table>
                            </div>
                            }
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

export default TamuUmum
