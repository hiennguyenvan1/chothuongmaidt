import classNames from 'classnames/bind';
import styles from './Menu_item.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu_item() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('menu')}>
                    <div className={cx('menu-list')}>
                        <div className={cx('gird-1')}>
                            <div className={cx('danhmuc_sp')}>
                                <h3 className={cx('h3')}>Danh mục sản phẩm</h3>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Điện thoại Smartphone
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Máy tính bảng
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Máy đọc sách
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Điện thoại phổ thông
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Điện thoại bàn
                                    </a>
                                </div>
                            </div>
                            <div className={cx('dich-vu')}>
                                <h3 className={cx('h3')}>Dịch vụ</h3>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        <input type="checkbox" /> Giao siêu tốc 2h
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        <input type="checkbox" /> Trả góp 0%
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        <input type="checkbox" /> Giảm sâu
                                    </a>
                                </div>
                            </div>
                            <div className={cx('danh-gia')}>
                                <h3 className={cx('h3')}>Đánh giá</h3>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Từ 5 sao
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Từ 4 sao
                                    </a>
                                </div>
                                <div className={cx('danhmuc-tabbar')}>
                                    <a className={cx('a')} href="">
                                        Từ 3 sao
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-top')}>
                            <div className={cx('content-slide')}>
                                <span>Điện Thoại - Máy tính bảng</span>
                            </div>
                            <div className={cx('content-img')}>
                                <div className={cx('content-img1')}>
                                    <div className={cx('content-thuonghieu')}>
                                        <img src="https://salt.tikicdn.com/cache/w200/ts/tka/da/83/7e/226df11e1809785696aca3ba31a234a9.png.webp" />
                                    </div>
                                    <div className={cx('content-cont')}>
                                        <div className={cx('content-cont-slg')}>
                                            <p>Chờ Đón Kỷ Nguyên quyền Năng Mới | Samsung</p>
                                            <span>Tài trợ bởi Samsung Official Store</span>
                                        </div>
                                        <div className={cx('content-ads')}>
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/5a/63/cb/636ff58d7fd87d1defc77a6642d62245.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/cd/49/14/13b6704a2692b4023b6929779b24519c.jpg.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('content-img2')}>
                                    <img src="https://salt.tikicdn.com/ts/tka/1b/67/1d/fe1a8e19f782bf24d71725c99ec6d729.png" />
                                </div>
                            </div>
                            <div className={cx('content-slidebar')}>
                                <Link className={cx('content-slidebar-link')}>Phổ Biến</Link>
                                <Link className={cx('content-slidebar-link')}>Bán Chạy</Link>
                                <Link className={cx('content-slidebar-link')}>Hàng Mới</Link>
                                <Link className={cx('content-slidebar-link')}>Giá Thấp Đến Cao</Link>
                                <Link className={cx('content-slidebar-link')}>Giá Cao Đến Thấp</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu_item;
