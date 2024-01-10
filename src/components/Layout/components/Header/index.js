import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>HIẾN ĐẸP TRAI VÔ ĐỊCH</div>
            <div className={cx('inner')}>HIẾN ĐẸP TRAI VÔ ĐỊCH</div>
            <div className={cx('inner')}>HIẾN ĐẸP TRAI VÔ ĐỊCH</div>
            <div className={cx('inner')}>HIẾN ĐẸP TRAI VÔ ĐỊCH</div>
        </header>
    );
}

export default Header;
