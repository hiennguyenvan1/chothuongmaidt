import classNames from 'classnames/bind';
import styles from './search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleXmark,
    faFaceSmileWink,
    faHome,
    faMagnifyingGlass,
    faManatSign,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input className={cx('search-input')} placeholder="Bạn tìm gì hôm nay" spellCheck={false} />
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>Tìm kiếm</button>
        </div>
    );
}

export default Search;
