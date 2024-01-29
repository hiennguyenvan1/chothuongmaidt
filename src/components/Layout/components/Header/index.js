import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleXmark, faFaceSmileWink, faHome } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

const random1 = ['Bạn cần gì hôm nay', 'Giao hàng 2H & đúng khung giờ', '100% Hàng tuyển chọn', 'Nguyễn Văn Hiến'];
function Header() {
    const [randomplaceholder, setrandomplaceholder] = useState();
    const [text, settext] = useState();
    const inputRef = useRef();
    const [showResults, setshowResults] = useState(true);

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
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
                        alt="shopee"
                    />
                </div>
                <Tippy interactive render={(attrs) => <div>ádasd</div>}>
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            className={cx('search-input')}
                            placeholder={randomplaceholder}
                            spellCheck={false}
                            value={text}
                            onChange={(e) => settext(console.log(e.target.value))}
                        />
                        <button className={cx('clear')} onClick={handeclear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                        <button className={cx('search-btn')} onClick={handfind}>
                            Tìm kiếm
                        </button>
                    </div>
                </Tippy>
                <div className={cx('header-home')}>
                    <div className={cx('home')}>
                        <a href="" className={cx('home-a')}>
                            <FontAwesomeIcon className={cx('home-icon')} icon={faHome} />
                            Trang chủ
                        </a>
                    </div>
                    <div className={cx('account')}>
                        <a href="" className={cx('home-a')}>
                            <FontAwesomeIcon className={cx('home-icon')} icon={faFaceSmileWink} />
                            Tài khoản
                        </a>
                    </div>
                    <Tippy interactive placement="top-end" render={(attrs) => <div>ádasd</div>}>
                        <div className={cx('shopping-cart')}>
                            <a href="" className={cx('home-a')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </a>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
