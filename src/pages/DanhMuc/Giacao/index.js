import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Giacao.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Giacao() {
    const [postdata, setpostdata] = useState([]);

    const Fecthdata = async () => {
        try {
            const rs = await axios.get('http://localhost:3001/getSanphamcaothap');

            if (rs.data) {
                console.log(rs.data);
                setpostdata(rs.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        Fecthdata();
    }, []);

    return (
        <div>
            <div>
                <div className={cx('list-item')}>
                    {postdata.map((item, index) => (
                        <Link to={`/chitiet/${item._id}`} className={cx('render-item')}>
                            <div className={cx('render-img')}>
                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                            </div>
                            <div className={cx('name-item')}>
                                <span>{item.name}</span>
                            </div>
                            <div className={cx('price-item')}>
                                <span>{item.price}₫</span>
                            </div>
                            <div className={cx('now-bottom')}>
                                <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                <span>Giao siêu tốc 2h</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Giacao;
