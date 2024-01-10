import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const tabs = ['posts', 'comments', 'albums'];

function Sidebar() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {tabs.map((pos1) => (
                <button className={cx('class')}> {pos1}</button>
            ))}
        </div>
    );
}

export default Sidebar;
