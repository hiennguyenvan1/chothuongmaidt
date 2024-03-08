//admin

// Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Admin from '~/components/Admin/';
import Chitiet from '~/pages/Chitiet';
import Menu_item from '~/pages/Menu_item';

//public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/chitiet/:idsp', component: Chitiet, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/admin', component: Admin },
    { path: '/menu_item', component: Menu_item, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
