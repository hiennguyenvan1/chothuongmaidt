import classNames from 'classnames/bind';
import Styles from './Giohang.module.scss';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import ItemRow from './Item';

const cx = classNames.bind(Styles);

function Giohang() {
    const [postdata, setpostdata] = useState([]);
    const [showsptt, setshowsptt] = useState([]);
    const [soluong, setsoluong] = useState(1);

    const { idsp } = useParams();

    const fetchGioHang = async () => {
        try {
            const rs = await axios.get('http://localhost:3001/giohang');
            console.log(rs.data);
            if (rs.data) {
                console.log(rs.data);

                setpostdata(rs.data);
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin giỏ hàng:', error);
        }
    };
    useEffect(() => {
        fetchGioHang();
    }, []);
    console.log(postdata);

    const onclickdelete = () => {
        console.log('click');
    };

    const onclicktrusl = () => {
        setsoluong(soluong > 1 ? soluong - 1 : 1);
    };
    const onclickcongsl = () => {
        setsoluong(soluong + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('giohang')}>
                    <h1>Giỏ Hàng</h1>
                </div>
                <div className={cx('item-sp')}>
                    {postdata.length > 0 ? (
                        <div className={cx('content')}>
                            <div className={cx('content-left')}>
                                <div className={cx('content-item')}>
                                    <div className={cx('content-name')}>
                                        <input type="checkbox" />
                                        <span>Tất cả ( sản phẩm) </span>
                                    </div>
                                    <div className={cx('content-price')}>
                                        <span>Đơn giá</span>
                                    </div>
                                    <div className={cx('content-sl')}>
                                        <span>Số lượng</span>
                                    </div>
                                    <div className={cx('content-pay')}>
                                        <span>Thành tiền</span>
                                    </div>
                                    <div className={cx('content-delete')}>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" />
                                    </div>
                                </div>
                                <div className={cx('content-render-item')}>
                                    {postdata.map((item, i) => (
                                        <ItemRow item={item} key={i} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('content-right')}>123123</div>
                        </div>
                    ) : (
                        <div className={cx('item-rong')}>
                            <img src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png" />
                            <h3>Giỏ hàng trống</h3>
                            <span>Bạn tham khảo thêm các sản phẩm được Tiki gợi ý bên dưới nhé!</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Giohang;
