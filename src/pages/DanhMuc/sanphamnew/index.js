import classNames from 'classnames/bind';
import styles from './sanphamnew.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Sanphamnew() {
    const [sanphamnew, setsanphamnew] = useState([]);

    const datasp = async () => {
        const data1 = await axios.get('http://localhost:3001/getSanpham');

        if (data1.data) {
            console.log(data1.data);
            setsanphamnew(data1.data);
        }
    };

    useEffect(() => {
        datasp();
    }, []);

    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('gird')}>
                    <div className={cx('list-spnew')}>
                        {sanphamnew.map((sp, index) => (
                            <div key={index} className={cx('spnew')}>
                                <div className={cx('spnew-img')}>
                                    <img src={'http://localhost:3001/uploads/' + sp.feature_image_path} />
                                </div>
                                <div>{sp.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sanphamnew;
