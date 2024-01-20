import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const tabs = ['posts', 'comments', 'albums'];

function Sidebar() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('content')}>Danh Mục</p>
            <ul>
                {tabs.map((pos1) => (
                    <li className={cx('class')} key={pos1.id}>
                        <img className={cx('image')} src={pos1.url} />
                        <a href="" className={cx('title')}>
                            {pos1}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
