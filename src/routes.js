import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import SuratMasuk from "./index/Surat Masuk/SuratMasuk.js"
import SuratKeluar from "./index/Surat Keluar/SuratKeluar.js"
import Laporan from "./index/Laporan/Laporan.js";
import User from "./index/User/User.js";
import DataSiswa from "./index/Data Siswa/DataSiswa.js";
import Galeri from "./index/Galeri/Galeri.js";
import siswaCreate from "./index/Data Siswa/siswaCreate";
import siswaEdit from "./index/Data Siswa/siswaEdit";
import laporanCreate from "./index/Laporan/laporanCreate";
import laporanEdit from "./index/Laporan/laporanEdit";
import suratMasukCreate from "./index/Surat Masuk/suratMasukCreate";
import suratMasukEdit from "./index/Surat Masuk/suratMasukEdit";
import suratKeluarCreate from "./index/Surat Keluar/suratKeluarCreate";
import suratKeluarEdit from "./index/Surat Keluar/suratKeluarEdit";
import userCreate from "./index/User/userCreate";
import userEdit from "./index/User/userEdit";
import TamuUmum from "./index/Tamu Umum/TamuUmum";
import tamuUmumCreate from "./index/Tamu Umum/tamuUmumCreate";
import tamuUmumEdit from "./index/Tamu Umum/tamuUmumEdit";
import TamuYayasan from "./index/Tamu Yayasan/TamuYayasan";
import tamuYayasanCreate from "./index/Tamu Yayasan/tamuYayasanCreate"; 
import tamuYayasanEdit from "./index/Tamu Yayasan/tamuYayasanEdit"; 
import TamuDinas from "./index/Tamu Dinas/TamuDinas"; 
import tamuDinasCreate from "./index/Tamu Dinas/tamuDinasCreate";
import tamuDinasEdit from "./index/Tamu Dinas/tamuDinasEdit";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/suratMasuk",
    name: "Surat Masuk",
    icon: "ni ni-credit-card text-green",
    component: SuratMasuk,
    layout: "/admin",
  },
  {
    path: "/suratKeluar",
    name: "Surat Keluar",
    icon: "ni ni-ungroup ",
    component: SuratKeluar,
    layout: "/admin",
  },
  {
    path: "/Laporan",
    name: "Laporan",
    icon: "ni ni-box-2 text-primary",
    component: Laporan,
    layout: "/admin",
  },
  {
    path: "/TamuUmum",
    name: "Tamu Umum",
    icon: "ni ni-book-bookmark text-purple",
    component: TamuUmum,
    layout: "/admin",
  },
  {
    path: "/TamuDinas",
    name: "Tamu Dinas",
    icon: "ni ni-building text-orange",
    component: TamuDinas,
    layout: "/admin",
  },
  {
    path: "/TamuYayasan",
    name: "Tamu Yayasan",
    icon: "ni ni-folder-17 text-teal",
    component: TamuYayasan,
    layout: "/admin",
  },
  {
    path: "/DataSiswa",
    name: "DataSiswa",
    icon: "ni ni-badge text-brown",  
    component: DataSiswa,
    layout: "/admin",
  },
  {
    path: "/User",
    name: "Tabel User",
    icon: "ni ni-tag text-pink",  
    component: User,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/Galeri",
    name: "Galeri",
    icon: "ni ni-collection text-black",
    component: Galeri,
    layout: "/admin",
  },
  //<Route exact path="/DataSiswa/edit" component={siswaCreate}></Route>;
  {
    path: "/siswaCreate",
    component: siswaCreate,
    layout: "/admin",
  },
  {
    path: "/siswaEdit",
    component: siswaEdit,
    layout: "/admin",
  },
  {
    path: "/laporanCreate",
    component: laporanCreate,
    layout: "/admin",
  },
  {
    path: "/laporanEdit",
    component: laporanEdit,
    layout: "/admin",
  },
  {
    path: "/suratMasukCreate",
    component: suratMasukCreate,
    layout: "/admin",
  },
  {
    path: "/suratMasukEdit",
    component: suratMasukEdit,
    layout: "/admin",
  },
  {
    path: "/suratKeluarCreate",
    component: suratKeluarCreate,
    layout: "/admin",
  },
  {
    path: "/suratKeluarEdit",
    component: suratKeluarEdit,
    layout: "/admin",
  },
  {
    path: "/userCreate",
    component: userCreate,
    layout: "/admin",
  },
  {
    path: "/userEdit",
    component: userEdit,
    layout: "/admin",
  },
  {
    path: "/tamuUmumCreate",
    component: tamuUmumCreate,
    layout: "/admin",
  },
  {
    path: "/tamuUmumEdit",
    component: tamuUmumEdit,
    layout: "/admin",
  },
  {
    path: "/tamuDinasCreate",
    component: tamuDinasCreate,
    layout: "/admin",
  },
  {
    path: "/tamuDinasEdit",
    component: tamuDinasEdit,
    layout: "/admin",
  },
  {
    path: "/tamuYayasanCreate",
    component: tamuYayasanCreate,
    layout: "/admin",
  },
  {
    path: "/tamuYayasanEdit",
    component: tamuYayasanEdit,
    layout: "/admin",
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
