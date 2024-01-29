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
                    <img className={cx('item-image')} src={post1.feature_image_path} />
                    <h4 className={cx('item-name')}>{post1.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default Home;
