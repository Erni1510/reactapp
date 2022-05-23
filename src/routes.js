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
    icon: "ni ni-box-2 text-purple",
    component: Laporan,
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
    icon: "ni ni-single-02 text-yellow",
    component: User,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-tag text-pink",
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
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
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
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
