import classNames from 'classnames/bind';
import styles from './layoutdanhmuc.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu_list() {
    return (
        <div className={cx('wrapper')}>
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
        </div>
    );
}

export default Menu_list;
