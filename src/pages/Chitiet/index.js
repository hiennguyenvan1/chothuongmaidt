import classNames from 'classnames/bind';
import styles from './chitiet.module.scss';

const cx = classNames.bind(styles);

function chitiet() {
    return (
        <div className={cx('container')}>
            <div className={'inner'}>
                <div className={cx('gird')}>
                    <div className={cx('gird-3')}>
                        <div className={cx('inner-left')}>123</div>
                    </div>
                    <div className={cx('gird-4')}>
                        <div className={cx('inner-center')}>123</div>
                    </div>
                    <div className={cx('gird-3')}>
                        <div className={cx('inner-right')}>qưeqwe</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default chitiet;
