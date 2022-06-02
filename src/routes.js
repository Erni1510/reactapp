import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Login from "./views/examples/Login.js";
import SuratMasuk from "./index/SuratMasuk/SuratMasuk.js"
import SuratKeluar from "./index/SuratKeluar/SuratKeluar.js"
import Laporan from "./index/Laporan/Laporan.js";
import User from "./index/User/User.js";
import Siswa from "./index/DataSiswa/Siswa.js";
import Galeri from "./index/Galeri/Galeri.js";
import SiswaCreate from "./index/DataSiswa/SiswaCreate";
import SiswaEdit from "./index/DataSiswa/SiswaEdit";
import LaporanCreate from "./index/Laporan/LaporanCreate";
import LaporanEdit from "./index/Laporan/LaporanEdit";
import SuratMasukCreate from "./index/SuratMasuk/SuratMasukCreate";
import SuratMasukEdit from "./index/SuratMasuk/SuratMasukEdit";
import SuratKeluarCreate from "./index/SuratKeluar/SuratKeluarCreate";
import SuratKeluarEdit from "./index/SuratKeluar/SuratKeluarEdit";
import UserCreate from "./index/User/UserCreate";
import UserEdit from "./index/User/UserEdit";
import TamuUmum from "./index/TamuUmum/TamuUmum";
import TamuUmumCreate from "./index/TamuUmum/TamuUmumCreate";
import TamuUmumEdit from "./index/TamuUmum/TamuUmumEdit";
import TamuYayasan from "./index/TamuYayasan/TamuYayasan";
import TamuYayasanCreate from "./index/TamuYayasan/TamuYayasanCreate"; 
import TamuYayasanEdit from "./index/TamuYayasan/TamuYayasanEdit"; 
import TamuDinas from "./index/TamuDinas/TamuDinas"; 
import TamuDinasCreate from "./index/TamuDinas/TamuDinasCreate";
import TamuDinasEdit from "./index/TamuDinas/TamuDinasEdit";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/SuratMasuk",
    name: "Surat Masuk",
    icon: "ni ni-credit-card text-green",
    component: SuratMasuk,
    layout: "/admin",
  },
  {
    path: "/SuratKeluar",
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
    path: "/Siswa",
    name: "DataSiswa",
    icon: "ni ni-badge text-brown",  
    component: Siswa,
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
  {
    path: "/SiswaCreate",
    component: SiswaCreate,
    layout: "/admin",
  },
  {
    path: "/SiswaEdit",
    component: SiswaEdit,
    layout: "/admin",
  },
  {
    path: "/LaporanCreate",
    component: LaporanCreate,
    layout: "/admin",
  },
  {
    path: "/LaporanEdit",
    component: LaporanEdit,
    layout: "/admin",
  },
  {
    path: "/SuratMasukCreate",
    component: SuratMasukCreate,
    layout: "/admin",
  },
  {
    path: "/SuratMasukEdit",
    component: SuratMasukEdit,
    layout: "/admin",
  },
  {
    path: "/SuratKeluarCreate",
    component: SuratKeluarCreate,
    layout: "/admin",
  },
  {
    path: "/SuratKeluarEdit",
    component: SuratKeluarEdit,
    layout: "/admin",
  },
  {
    path: "/UserCreate",
    component: UserCreate,
    layout: "/admin",
  },
  {
    path: "/UserEdit",
    component: UserEdit,
    layout: "/admin",
  },
  {
    path: "/TamuUmumCreate",
    component: TamuUmumCreate,
    layout: "/admin",
  },
  {
    path: "/TamuUmumEdit",
    component: TamuUmumEdit,
    layout: "/admin",
  },
  {
    path: "/TamuDinasCreate",
    component: TamuDinasCreate,
    layout: "/admin",
  },
  {
    path: "/TamuDinasEdit",
    component: TamuDinasEdit,
    layout: "/admin",
  },
  {
    path: "/TamuYayasanCreate",
    component: TamuYayasanCreate,
    layout: "/admin",
  },
  {
    path: "/TamuYayasanEdit",
    component: TamuYayasanEdit,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
