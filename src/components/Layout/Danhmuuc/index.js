import classNames from 'classnames/bind';
import styles from './Danhmuc.module.scss';
import Header from '~/components/Layout/components/Header';
import Menu_list from './layoutdanhmuc/Menu_list';
import Slide from './sliderdanhmuc';

const cx = classNames.bind(styles);

function DanhMuc({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('gird')}>
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
