import Index from "./views/Index.js";
// import Profile from "./views/Login/Profile.js";
import Login from "./views/Login/Login.js";
import SuratMasuk from "./views/SuratMasuk/SuratMasuk.js"
import SuratKeluar from "./views/SuratKeluar/SuratKeluar.js"
import Arsip from "./views/Arsip/Arsip.js";
import User from "./views/User/User.js";
// import Siswa from "./views/DataSiswa/Siswa.js";
import Galeri from "./views/Galeri/Galeri.js";
// import SiswaCreate from "./views/DataSiswa/SiswaCreate";
// import SiswaEdit from "./views/DataSiswa/SiswaEdit";
import ArsipCreate from "./views/Arsip/ArsipCreate";
import ArsipEdit from "./views/Arsip/ArsipEdit";
import SuratMasukCreate from "./views/SuratMasuk/SuratMasukCreate";
import SuratMasukEdit from "./views/SuratMasuk/SuratMasukEdit";
import SuratKeluarCreate from "./views/SuratKeluar/SuratKeluarCreate";
import SuratKeluarEdit from "./views/SuratKeluar/SuratKeluarEdit";
import UserCreate from "./views/User/UserCreate";
import UserEdit from "./views/User/UserEdit";
import TamuUmum from "./views/TamuUmum/TamuUmum";
import TamuUmumCreate from "./views/TamuUmum/TamuUmumCreate";
import TamuUmumEdit from "./views/TamuUmum/TamuUmumEdit";
import TamuYayasan from "./views/TamuYayasan/TamuYayasan";
import TamuYayasanCreate from "./views/TamuYayasan/TamuYayasanCreate"; 
import TamuYayasanEdit from "./views/TamuYayasan/TamuYayasanEdit"; 
import TamuDinas from "./views/TamuDinas/TamuDinas"; 
import TamuDinasCreate from "./views/TamuDinas/TamuDinasCreate";
import TamuDinasEdit from "./views/TamuDinas/TamuDinasEdit";

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
    path: "/Arsip",
    name: "Arsip",
    icon: "ni ni-box-2 text-primary",
    component: Arsip,
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
  // {
  //   path: "/Siswa",
  //   name: "DataSiswa",
  //   icon: "ni ni-badge text-brown",  
  //   component: Siswa,
  //   layout: "/admin",
  // },
  {
    path: "/User",
    name: "Tabel User",
    icon: "ni ni-tag text-pink",  
    component: User,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
    path: "/Galeri",
    name: "Galeri",
    icon: "ni ni-collection text-black",
    component: Galeri,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/SiswaCreate",
  //   component: SiswaCreate,
  //   layout: "/admin",
  // },
  // {
  //   path: "/SiswaEdit",
  //   component: SiswaEdit,
  //   layout: "/admin",
  // },
  {
    path: "/ArsipCreate",
    component: ArsipCreate,
    layout: "/admin",
  },
  {
    path: '/editArsip/',
    component: ArsipEdit,
    layout: "/admin",
  },
  {
    path: "/SuratMasukCreate",
    component: SuratMasukCreate,
    layout: "/admin",
  },
  {
    path: "/editSuratMasuk/",
    component: SuratMasukEdit,
    layout: "/admin",
  },
  {
    path: "/SuratKeluarCreate",
    component: SuratKeluarCreate,
    layout: "/admin",
  },
  {
    path: "/editSuratKeluar/",
    component: SuratKeluarEdit,
    layout: "/admin",
  },
  {
    path: "/UserCreate",
    component: UserCreate,
    layout: "/admin",
  },
  {
    path: "/editUser/",
    component: UserEdit,
    layout: "/admin",
  },
  {
    path: "/TamuUmumCreate",
    component: TamuUmumCreate,
    layout: "/admin",
  },
  {
    path: "/editTamuUmum/",
    component: TamuUmumEdit,
    layout: "/admin",
  },
  {
    path: "/TamuDinasCreate",
    component: TamuDinasCreate,
    layout: "/admin",
  },
  {
    path: "/editTamuDinas/",
    component: TamuDinasEdit,
    layout: "/admin",
  },
  {
    path: "/TamuYayasanCreate",
    component: TamuYayasanCreate,
    layout: "/admin",
  },
  {
    path: "/editTamuYayasan/",
    component: TamuYayasanEdit,
    layout: "/admin",
  },

];
export default routes;
