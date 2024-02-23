import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/thanhcuon/shoppinglaravel/main/products.json')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {post.map((post1) => (
                <div className={cx('item')}>
                    <img
                        className={cx('item-image')}
                        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/304774110_792969821895942_3231697646279065125_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=NFvJERnYnSYAX8bHj95&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBtl-Rso0dfVcygM97RN_cyrNylCHUzHEFPnwXCamt9kA&oe=65D9B1E2"
                    />
                    <h4 className={cx('item-name')}>{post1.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default Home;
