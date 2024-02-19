import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h1 className={cx('name')}>{data.name}</h1>
        </div>
    );
}

export default AccountItem;
