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
    Row, Button
} from "reactstrap";
import Header from "../../components/Headers/Header.js";
import apiClient from '../../services/API.js';
import swal from 'sweetalert';
import PulseLoader from "react-spinners/PulseLoader";
import moment from 'moment';
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage';

function SuratMasuk() {
    const [suratMasuk, setSuratMasuk] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState()
	const isAdmin = getFromLocal("Roles") === 'Admin' ? true : false;

    const onDelete = async (id) => {
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
                    apiClient.delete(`/surat-masuk/${id}`).then((response) => {
                        getData(isMounted)
                    swal("Good job! ", "Data Berhasil Dihapus!", "success");
                    }).catch((err) => {
                        swal("Sorry!", "Data gagal Dihapus!", "warning");
                        console.error(err)
                    })
                }
              })
    }}
    const getData = async (isMounted) => {
        await apiClient.get('http://cerman.tahutekno.com/api/surat-masuk').then((response) => {
            const suratData = JSON.parse(response.data.suratMasuk)
            isMounted && setSuratMasuk(suratData)
            apiClient.get('/user').then((response) => {
                const user = JSON.parse(response.data.user)
                setUserList(user)
            })
        }).catch((err) => {
            console.error(err)
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
        <div>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Surat Masuk</h3>
                                <Link to={"/admin/SuratMasukCreate"} className="btn btn-success float-right" bssize="sm">+Tambah</Link>
                            </CardHeader>
                            {
                                loading ?
                                    <PulseLoader color={'#3C79BE'} loading={loading} size={15} margin={2} />
                                    :
                                    <div>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Nomor Surat</th>
                                                    <th scope="col">Nama Surat</th>
                                                    <th scope="col">Asal Surat</th>
                                                    <th scope="col">Keterangan</th>
                                                    <th scope="col">Dibuat Oleh</th>
                                                    <th scope="col">Tanggal</th>
                                                    <th scope="col">Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {suratMasuk.map((data, idx) => {
                                                    return (
                                                        <>
                                                            <tr key={data.id}>
                                                                <td className="align-middle text-center">
                                                                    <p className="text-sm font-weight-bold mb-0">{idx + 1}</p>
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    <p className="text-sm font-weight-bold mb-0">{data.nomor}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-sm font-weight-bold mb-0">{data.nama}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-sm font-weight-bold mb-0">{data.asal}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-sm font-weight-bold mb-0">{data.keterangan}</p>
                                                                </td>
                                                                <td>
                                                                    {/* {userList.map(user => {
                                                                        return data.user_id === user.id ? <p className="text-sm font-weight-bold mb-0">{user.name}</p> : null
                                                                        })} */}
                                                                </td>
                                                                <td>
                                                                    <p className="text-sm font-weight-bold mb-0">{moment(data.created_at).format('DD MMMM yyyy')}</p>
                                                                </td>
                                                                <td>
                                                                    <Link to={{ pathname: '/admin/SuratMasukDetail/', state: { id: data.id } }} className="btn btn-info" bssize="sm"><i className="fas fa-eye" aria-hidden="true" /></Link>
                                                                    <Link to={{ pathname: '/admin/editSuratMasuk/', state: { id: data.id } }} className="btn btn-success" bssize="sm"><i className="fas fa-edit" aria-hidden="true" /></Link>
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
        </div>

    )
}

export default SuratMasuk