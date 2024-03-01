import classNames from 'classnames/bind';
import styles from './Menu_item.module.scss';

const cx = classNames.bind(styles);

function Menu_item() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <h3>Trang chủ</h3>
                <div className={cx('menu')}>
                    <div className={cx('menu-list')}>
                        <div className={cx('danhmuc_sp')}>
                            <h3 className={cx('h3')}>Danh mục sản phẩm</h3>
                            <ul className={cx('ul')}>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Đồ dùng nhà bếp
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Thiết bị gia đình
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('dich-vu')}>
                            <h3 className={cx('h3')}>Dịch vụ</h3>
                            <ul className={cx('ul')}>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Giao siêu tốc 2h
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Chọn giờ giao lắp
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Trả góp 0%
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Giảm sâu
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('danh-gia')}>
                            <h3 className={cx('h3')}>Đánh giá</h3>
                            <ul className={cx('ul')}>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Từ 5 sao
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Từ 4 sao
                                    </a>
                                </li>
                                <li className={cx('li')}>
                                    <a className={cx('a')} href="">
                                        Từ 3 sao
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('content')}>ádasdsd</div>
                </div>
            </div>
        </div>
    );
}

export default Menu_item;
