import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './chitiet.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Chitiet() {
    const [postdata, setpostdata] = useState({});
    const { idsp } = useParams();
    const fetchData = async () => {
        try {
            const rs = await axios.get(`http://localhost:3001/getSanpham1/${idsp}`);
            // console.log(rs);
            if (rs.data) {
                console.log(rs.data);
                setpostdata(rs.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handtru = (e) => {
        console.log('click-tru');
    };

    return (
        <div className={cx('container')}>
            <div className={cx('gird')}>
                {Object.keys(postdata).length > 0 && (
                    <div className={cx('inner')}>
                        <div className={cx('gird-3')}>
                            <div className={cx('inner-left')}>
                                <div className={cx('inner-left-image')}>
                                    <div className={cx('inner-left-imgkhung')}>
                                        <img src={'http://localhost:3001/uploads/' + postdata.feature_image_path} />
                                    </div>
                                    <h4>Đặc điểm nổi bật</h4>
                                    <span>{postdata.content}</span>
                                    <span>Đặc điểm nổi bật</span>
                                </div>
                                <div className={cx('uudiem-sp')}>
                                    <img src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png" />
                                    <a href="">Xem thêm Ưu điểm & lưu ý của sản phẩm</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('gird-4')}>
                            <div className={cx('inner-center')}>
                                <div className={cx('inner-center-name')}>
                                    <h3>{postdata.name}</h3>
                                    <br></br>
                                    <span>{postdata.price}</span>
                                </div>
                                <div className={cx('inner-center-vanchuyen')}>
                                    <h3>Thông tin vận chuyển</h3>
                                    <br></br>
                                    <span>{postdata.price}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('gird-3')}>
                            <div className={cx('inner-right')}>
                                <div className={cx('inner-right-top')}>
                                    <Link>
                                        <img
                                            className={cx('logo')}
                                            src="https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg.webp"
                                        />
                                    </Link>
                                    <span>Tiki Trading</span>
                                    <img
                                        className={cx('icon-tick')}
                                        src="https://salt.tikicdn.com/cache/w100/ts/upload/6b/25/fb/c288b5bcee51f35f2df0a5f5f03de2e1.png.webp"
                                    />
                                </div>
                                <div className={cx('inner-right-center')}>
                                    <div className={cx('inner-right-center-img')}>
                                        <img src={'http://localhost:3001/uploads/' + postdata.feature_image_path} />
                                    </div>
                                    <div className={cx('inner-right-center-sl')}>
                                        <span>Số lượng</span>
                                        <div className={cx('inner-right-center-sl-1')}>
                                            <button className={cx('sl-tru')} onClick={handtru}>
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" />
                                            </button>
                                        </div>
                                        <div className={cx('inner-right-center-sl-input')}>
                                            <input type="text" />
                                        </div>
                                        <div className={cx('inner-right-center-sl-1')}>
                                            <button className={cx('sl-tru')} onClick={handtru}>
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('inner-right-button')}>
                                    <Link>
                                        <div className={cx('mua-ngay')}>
                                            <button>Mua Ngay</button>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className={cx('them-vao-gio')}>
                                            <button>Thêm vào giỏ</button>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className={cx('them-vao-gio')}>
                                            <button>Mua trả góp - trả sau</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chitiet;
