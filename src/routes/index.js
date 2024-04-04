//admin

// Layouts
import { DanhMuc, HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Admin from '~/components/Admin/';
import Chitiet from '~/pages/Chitiet';
import Giacao from '~/pages/DanhMuc/Giacao';
import Giathap from '~/pages/DanhMuc/Giathap';
import Giohang from '~/pages/Giohang';
import Sanphamnew from '~/pages/DanhMuc/sanphamnew';

import Renderdienthoai from '~/pages/DanhMuc/Render';

//public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/chitiet/:idsp', component: Chitiet, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/admin', component: Admin },
    { path: '/rendendienthoai', component: Renderdienthoai, layout: DanhMuc },
    { path: '/giacao', component: Giacao, layout: DanhMuc },
    { path: '/giathap', component: Giathap, layout: DanhMuc },
    { path: '/giohang', component: Giohang, layout: HeaderOnly },
    { path: '/sanphamnew', component: Sanphamnew, layout: DanhMuc },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
