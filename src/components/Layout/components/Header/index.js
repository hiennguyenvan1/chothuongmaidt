import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleXmark,
    faFaceSmileWink,
    faHome,
    faLocation,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const random1 = ['Bạn cần gì hôm nay', 'Giao hàng 2H & đúng khung giờ', '100% Hàng tuyển chọn', 'Nguyễn Văn Hiến'];
function Header() {
    const [randomplaceholder, setrandomplaceholder] = useState();
    const [text, settext] = useState();
    const inputRef = useRef();
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hiennguyenvan1/chothuongmaidt/main/categories.json')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    useEffect(() => {
        setInterval(() => {
            let index = Math.floor(Math.random() * random1.length);
            setrandomplaceholder(random1[index]);
        }, 1500);
    }, []);

    const handfind = () => {
        console.log('click');
    };

    const handeclear = () => {
        settext('');
        inputRef.current.focus();
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('gird_1')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img
                            src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
                            alt="shopee"
                        />
                        <div className={cx('sologor')}>
                            <h3>Bảo vệ khách hàng 111%</h3>
                        </div>
                    </div>
                    <div className={cx('search-all')}>
                        <div className={cx('search')}>
                            <Tippy
                                interactive
                                placement="bottom"
                                // visible={true}
                                render={(attrs) => (
                                    <div className={cx('render-icon')}>
                                        <h4>Hàng nhập khẩu</h4>
                                        {post.map((item) => (
                                            <AccountItem data={item} />
                                        ))}
                                    </div>
                                )}
                            >
                                <input
                                    ref={inputRef}
                                    className={cx('search-input')}
                                    placeholder={randomplaceholder}
                                    spellCheck={false}
                                    value={text}
                                    onChange={(e) => settext(console.log(e.target.value))}
                                />
                            </Tippy>
                            <button className={cx('clear')} onClick={handeclear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                            <button className={cx('search-btn')} onClick={handfind}>
                                Tìm kiếm
                            </button>
                        </div>
                        <div>
                            <br />
                            <div>
                                <ul className={cx('list-ul')}>
                                    <li className={cx('list-li')}>
                                        <a className={cx('list-a')} href="">
                                            điện gia dụng
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            xe cộ
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            mẹ & bé
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            điện gia dụng
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            nhà cửa
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            sách
                                        </a>
                                        <a className={cx('list-a')} href="">
                                            thể thao
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('header-home1')}>
                        <div className={cx('header-home')}>
                            <div className={cx('home')}>
                                <a href="" className={cx('home-a')}>
                                    <img src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" />
                                    Trang chủ
                                </a>
                            </div>
                            <div className={cx('account')}>
                                <a href="" className={cx('home-a')}>
                                    <FontAwesomeIcon className={cx('home-icon')} icon={faFaceSmileWink} />
                                    Tài khoản
                                </a>
                            </div>
                            <Tippy
                                interactive
                                placement="top-end"
                                render={(attrs) => <div className={cx('test')}>ádasd</div>}
                            >
                                <div className={cx('shopping-cart')}>
                                    <a href="" className={cx('home-a')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </a>
                                </div>
                            </Tippy>
                        </div>
                        <br />
                        <div className={cx('home-end')}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Giao đến</p>

                            <a href="">Xóm nam,Liên vị,Quảng yên</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
