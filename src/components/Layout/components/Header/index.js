import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/shift-away.css';
import { Link } from 'react-router-dom';

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
    const [gotoshow, setgotoshow] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hiennguyenvan1/chothuongmaidt/main/categories.json')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    useEffect(() => {
        setInterval(() => {
            let index = Math.floor(Math.random() * random1.length);
            setrandomplaceholder(random1[index]);
        }, 3000);
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
            <div className={cx('gird')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <a href="/">
                            <img
                                src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
                                alt="shopee"
                            />
                        </a>
                    </div>
                    <div className={cx('search-all')}>
                        <div className={cx('search')}>
                            <Tippy
                                interactive
                                placement="bottom-start"
                                // visible={true}
                                render={(attrs) => (
                                    <div className={cx('search-item')}>
                                        <div className={cx('search-sologor')}>
                                            <h4>Sale Lương về</h4>
                                        </div>
                                        {post.map((item, index) => (
                                            <div className={cx('search-data')} key={index}>
                                                <a href="">
                                                    <AccountItem data={item} />
                                                </a>
                                            </div>
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
                            <div className={cx('search-btn')}>
                                <button onClick={handfind}>Tìm kiếm</button>
                            </div>
                        </div>
                        <div className={cx('search-icon')}>
                            <div className={cx('home')}>
                                <a href="" className={cx('home-a')}>
                                    <img src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" />
                                    Trang chủ
                                </a>
                            </div>
                            <div className={cx('account')}>
                                <a href="" className={cx('home-a')}>
                                    <img src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" />
                                    Tài khoản
                                </a>
                            </div>

                            {/* <Tippy
                                interactive
                                placement="bottom-start"
                                render={(attrs) => <div className={cx('test')}>ádasd</div>}
                            > */}
                            <Link to={'/giohang'} className={cx('shopping-cart')}>
                                <a href="" className={cx('home-a')}>
                                    <img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" />
                                </a>
                            </Link>
                            {/* </Tippy> */}
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('sologor')}>
                        <h3>Bảo vệ khách hàng 111%</h3>
                    </div>
                    <div className={cx('list-item')}>
                        <ul className={cx('list-item-ul')}>
                            {random1.map((item) => (
                                <li>
                                    <a href="/menu_item">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('bottom-end')}>
                        <a className={cx('bottom-end-a')} href="">
                            <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" />
                            <p>Giao đến : </p>
                            <h4>Thôn nam1, Liên Vị, Quảng Yên q </h4>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
