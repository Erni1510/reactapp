import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
          <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>User</h6>
                            <Button variant="success" class="btn button-success float-left">+ Tambah</Button>{' '}
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xs text-center font-weight-bolder opacity-7">No</th>
                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Nama</th>
                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Username</th>
                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Jabatan</th>
                                            <th className="text-uppercase text-secondary text-xs text-center font-weight-bolder opacity-7">Opsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td align-middle text-center text-sm>
                                                <h6 className="mb-0 text-center text-sm">1</h6>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">Admin</p>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">Admin@gmail.com</p>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">Kepala Sekolah</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <a href="../" className="btn btn-success"><i className="fas fa-edit" aria-hidden="true" /></a>
                                                <div className=" btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default User;