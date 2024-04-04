import classNames from 'classnames/bind';
import styles from './layoutdanhmuc.module.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                                <input type="checkbox" />
                                <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                Giao siêu tốc 2h
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
                    <div className={cx('danh-gia')}>
                        <h3 className={cx('h3')}>Đánh giá</h3>
                        <div className={cx('danhmuc-tabbar1')}>
                            <Link className={cx('link')}>
                                <span className={cx('button')}> Dưới 500.000</span>
                            </Link>
                        </div>
                        <div className={cx('danhmuc-tabbar1')}>
                            <Link className={cx('link')}>
                                <span className={cx('button')}>
                                    500.000 <FontAwesomeIcon icon={faArrowRight} /> 4.000.000
                                </span>
                            </Link>
                        </div>
                        <div className={cx('danhmuc-tabbar1')}>
                            <Link className={cx('link')}>
                                <span className={cx('button')}>
                                    4.000.000 <FontAwesomeIcon icon={faArrowRight} /> 9.000.000
                                </span>
                            </Link>
                        </div>
                        <div className={cx('danhmuc-tabbar1')}>
                            <Link className={cx('link')}>
                                <span className={cx('button')}>Trên 9.000.000</span>
                            </Link>
                        </div>
                        <div className={cx('danhmuc-tabbar')}>
                            <h3>Chọn khoảng giá</h3>
                            <div className={cx('chonkhoanggia-top')}>
                                <div className={cx('chonkhoanggia-left')}>
                                    <input />
                                </div>
                                <div className={cx('gach-ngang')}>-</div>
                                <div className={cx('chonkhoanggia-right')}>
                                    <input />
                                </div>
                            </div>
                            <div className={cx('chonkhoanggia-bottom')}>
                                <Link className={cx('chonkhoanggia-bottom-link')}>
                                    <span>Áp dụng</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu_list;
