import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './chitiet.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

const cx = classNames.bind(styles);

function Chitiet() {
    const [postdata, setpostdata] = useState({});
    const { idsp } = useParams();
    const [valuesl, setvaluesl] = useState(0);
    const [showsptt, setshowsptt] = useState([]);
    // const { idsp1 } = useParams();

    const fetchsptt = async () => {
        try {
            const rs = await axios.get('http://localhost:3001/getSanpham');
            console.log(rs);
            if (rs.data) {
                console.log(rs.data);
                setshowsptt(rs.data);
            }
        } catch (error) {
            console.error('Lỗi khi render sản phẩm:', error);
        }
    };
    useEffect(() => {
        {
            fetchsptt();
        }
    }, []);
    const fetchData = async () => {
        const formgiohang = new FormData();
        formgiohang.append('soluong', 1231);
        try {
            const rs = await axios.post(`http://localhost:3001/getSanpham1/${idsp}`, formgiohang);
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
        setvaluesl(valuesl > 1 ? valuesl - 1 : 1);
    };
    const handcong = (e) => {
        setvaluesl(valuesl + 1);
        // setvaluesl(e.target.value);
    };

    const hanlchangsl = (e) => {
        setvaluesl(e.target.value);
    };

    const handThemGioHang = async (idsp) => {
        try {
            const rs = await axios.get(`http://localhost:3001/getgiohang/${idsp}`);
            if (rs.data) {
                console.log(rs.data.success);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
    //     handThemGioHang();
    // }, []);

    const handealert = () => {
        alert('thêm vào giỏ hàng thành công');
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
                                    <div>
                                        <div className={cx('giao-sieu-toc-top')}>
                                            <div className={cx('giao-sieu-toc-img')}>
                                                <img src="https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png" />
                                            </div>
                                            <div className={cx('giao-sieu-toc-content')}>
                                                <span>Giao siêu tốc 2h</span>
                                            </div>
                                        </div>
                                        <div className={cx('giao-sieu-toc-top')}>
                                            <div className={cx('giao-sieu-toc-img')}>
                                                <img src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png" />
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('dich-vu-bo-sung')}>
                                    <div className={cx('conten-dich-vu')}>
                                        <span>Dịch vụ bổ sung</span>
                                    </div>
                                    <div className={cx('dich-vu-link')}>
                                        <Link className={cx('dich-vu-bo-sung-top')}>
                                            <div>
                                                <img src="https://salt.tikicdn.com/ts/upload/73/4d/f7/f86e767bffc14aa3d6abed348630100b.png" />
                                            </div>
                                            <div className={cx('dich-vu-bo-sung-top-uu-dai')}>
                                                <div>
                                                    <span className={cx('uudai')}>
                                                        Ưu đãi đến 600k với thẻ TikiCard
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className={cx('dangky')}>Đăng ký</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className={cx('dich-vu-bo-sung-top')}>
                                            <div>
                                                <img src="https://salt.tikicdn.com/ts/upload/2a/27/6a/7bbba1f6c93a1a42a3c314e7b5825f4c.png" />
                                            </div>
                                            <div className={cx('dich-vu-bo-sung-top-uu-dai')}>
                                                <div>
                                                    <span className={cx('uudai')}>Mua trước trả sau</span>
                                                </div>
                                                <div>
                                                    <span className={cx('dangky')}>Đăng ký</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('sp-tuongtu')}>
                                    <div className={cx('sp-content')}>
                                        <span>Sản phẩm tương tự</span>
                                    </div>
                                    <Slide className={cx('slide-list-item')}>
                                        {showsptt.length > 0 &&
                                            showsptt.map((sp, index) => (
                                                <div key={index} className={cx('sp-list')}>
                                                    <div className={cx('sp-list-img')}>
                                                        <img
                                                            src={
                                                                'http://localhost:3001/uploads/' + sp.feature_image_path
                                                            }
                                                        />
                                                    </div>
                                                    <div className={cx('sp-list-name')}>
                                                        <span>{sp.name}</span>
                                                    </div>
                                                    <div className={cx('sp--list-price')}>
                                                        <span>{sp.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                    </Slide>
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
                                            <input type="text" onChange={hanlchangsl} value={valuesl} />
                                        </div>
                                        <div className={cx('inner-right-center-sl-1')}>
                                            <button className={cx('sl-tru')} onClick={handcong}>
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
                                    <div>
                                        <div className={cx('them-vao-gio')} onClick={handealert}>
                                            <button onClick={() => handThemGioHang(idsp)}>Thêm vào giỏ</button>
                                        </div>
                                    </div>
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
