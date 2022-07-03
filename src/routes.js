import Index from "./views/Index.js";
import Login from "./views/Login/Login.js";
import SuratMasuk from "./views/SuratMasuk/SuratMasuk.js"
import SuratKeluar from "./views/SuratKeluar/SuratKeluar.js"
import Arsip from "./views/Arsip/Arsip.js";
import User from "./views/User/User.js";
import Kategori from "./views/Kategori/Kategori.js";
import KategoriCreate from "./views/Kategori/KategoriCreate";
import KategoriEdit from "./views/Kategori/KategoriEdit";
import Role from "./views/Role/Role.js";
import RoleCreate from "./views/Role/RoleCreate";
import RoleEdit from "./views/Role/RoleEdit";
import ArsipCreate from "./views/Arsip/ArsipCreate";
import ArsipEdit from "./views/Arsip/ArsipEdit";
import ArsipDetail from "./views/Arsip/ArsipDetail";
import SuratMasukCreate from "./views/SuratMasuk/SuratMasukCreate";
import SuratMasukEdit from "./views/SuratMasuk/SuratMasukEdit";
import SuratMasukDetail from "./views/SuratMasuk/SuratMasukDetail";
import SuratKeluarCreate from "./views/SuratKeluar/SuratKeluarCreate";
import SuratKeluarEdit from "./views/SuratKeluar/SuratKeluarEdit";
import SuratKeluarDetail from "./views/SuratKeluar/SuratKeluarDetail";
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
    type: "",
  },
  {
    path: "/SuratMasuk",
    name: "Surat Masuk",
    icon: "ni ni-credit-card text-green",
    component: SuratMasuk,
    layout: "/admin",
    type: "",
  },
  {
    path: "/SuratKeluar",
    name: "Surat Keluar",
    icon: "ni ni-ungroup ",
    component: SuratKeluar,
    layout: "/admin",
    type: "",
  },
  {
    path: "/Arsip",
    name: "Arsip",
    icon: "ni ni-box-2 text-primary",
    component: Arsip,
    layout: "/admin",
    type: "",
  },
  {
    path: "/TamuUmum",
    name: "Tamu Umum",
    icon: "ni ni-book-bookmark text-purple",
    component: TamuUmum,
    layout: "/admin",
    type: "",
  },
  {
    path: "/TamuDinas",
    name: "Tamu Dinas",
    icon: "ni ni-building text-orange",
    component: TamuDinas,
    layout: "/admin",
    type: "",
  },
  {
    path: "/TamuYayasan",
    name: "Tamu Yayasan",
    icon: "ni ni-folder-17 text-teal",
    component: TamuYayasan,
    layout: "/admin",
    type: "",
  },
  {
    path: "/User",
    name: "Tabel User",
    icon: "ni ni-tag text-pink",
    component: User,
    layout: "/admin",
    type: "admin",
  },
  {
    path: "/Kategori",
    name: "Kategori",
    icon: "ni ni-tag text-blue",
    component: Kategori,
    layout: "/admin",
    type: "admin",
  },
  {
    path: "/Role",
    name: "Role",
    icon: "ni ni-key-25 text-info",
    component: Role,
    layout: "/admin",
    type: "admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },

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
    path: "/KategoriCreate",
    component: KategoriCreate,
    layout: "/admin",
  },
  {
    path: "/editKategori/",
    component: KategoriEdit,
    layout: "/admin",
  },
  {
    path: "/RoleCreate",
    component: RoleCreate,
    layout: "/admin",
  },
  {
    path: "/editRole/",
    component: RoleEdit,
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
  {
    path: '/ArsipDetail/',
    component: ArsipDetail,
    layout: "/admin",
  },
  {
    path: '/SuratKeluarDetail/',
    component: SuratKeluarDetail,
    layout: "/admin",
  },
  {
    path: '/SuratMasukDetail/',
    component: SuratMasukDetail,
    layout: "/admin",
  },

];

export default routes;