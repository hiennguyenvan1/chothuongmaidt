import classNames from 'classnames/bind';
import styles from './Danhmuc.module.scss';
import Header from '~/components/Layout/components/Header';
import Menu_list from './layoutdanhmuc/Menu_list';
import Slide from './sliderdanhmuc';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DanhMuc({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('gird')}>
                <div className={cx('menu-top')}>
                    <div className={cx('menu-top-right')}>
                        <Link className={cx('link')}>
                            <span>Trang chủ</span>
                        </Link>
                    </div>
                    <div className={cx('menu-top-right')}>
                        <Link className={cx('link')}>
                            <span>
                                {' '}
                                <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                            </span>
                        </Link>
                    </div>
                    <div className={cx('menu-top-right')}>
                        <Link className={cx('link')}>
                            <span>Điện thoại - Máy tính bảng</span>
                        </Link>
                    </div>
                </div>
                <div className={cx('container-item')}>
                    <div className={cx('menu')}>
                        <Menu_list />
                    </div>

                    <div className={cx('content')}>
                        <Slide />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DanhMuc;
