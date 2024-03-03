import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import 'react-slideshow-image/dist/styles.css';
import { Fade, Zoom, Slide } from 'react-slideshow-image';

const cx = classNames.bind(styles);

const Image = [
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/18/86/9c/35860ead040e2941eca289a0c6bc35a2.jpg.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/65/ff/b3/3f13b95b4261255cf743af3188cdc91a.png.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/18/86/9c/35860ead040e2941eca289a0c6bc35a2.jpg.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/65/ff/b3/3f13b95b4261255cf743af3188cdc91a.png.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/18/86/9c/35860ead040e2941eca289a0c6bc35a2.jpg.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
    {
        name: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/65/ff/b3/3f13b95b4261255cf743af3188cdc91a.png.webp',
        name1: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/de/96/1ea52812607a87dcadc54091529eba0a.jpeg.webp',
    },
];

function Home() {
    const [post, setpost] = useState([]);
    const [showimage, setshowimage] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/thanhcuon/shoppinglaravel/main/products.json')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    const handleprev = (index) => {
        index++;
        if (index < 0) {
            index = Image.length - 1; // Chuyển đến phần tử cuối cùng nếu index nhỏ hơn 0
        }
        setshowimage(Image[index]);
    };
    console.log(setshowimage.Image);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('gird-10')}>
                    <div className={cx('container')}>
                        <div className={cx('container-slider')}>
                            <Slide>
                                {Image.map((item, index) => (
                                    <div className={cx('slider-image')}>
                                        <img className={cx('image')} src={item.name} />
                                        <img className={cx('image1')} src={item.name1} />
                                    </div>
                                ))}
                            </Slide>
                        </div>

                        <div className={cx('container_width')}>
                            <div className={cx('container-menu')}>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/upload/e0/4f/a4/2f79e4d3e8b4a71941fa7da279c994db.png" />
                                        <br />
                                        <span>Tiki Best</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/upload/18/ec/0b/7f09f2ec4d8d5ceb81b8c043dbc747d0.png" />
                                        <br />

                                        <span>Nhập Khẩu Chính Hãng</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/upload/84/e5/5a/ef4abf5ef55fe5db81ac7a900de40368.png" />
                                        <br />

                                        <span>Khuyến Mãi</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/upload/b1/5f/5e/501a9b0ed0c1735d3e3872bad6e587df.png" />
                                        <br />

                                        <span>Sản Phẩm mới</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png" />
                                        <br />

                                        <span>Nhà Sách Tiki</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png" />
                                        <br />

                                        <span>Nhà Cửa Đời Sống</span>
                                    </a>
                                </div>
                                <div className={cx('container-list')}>
                                    <a href="">
                                        <img src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" />
                                        <br />

                                        <span>Đồ Chơi Mẹ & Bé</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('container-item')}>
                            <div>
                                <Slide>
                                    <div className={cx('item')}>
                                        <a href="/chitiet">
                                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/2b/76/1c/6c89edecac5e58f346422c3a911934ea.jpg.webp" />
                                            <span>Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng</span>
                                            <span>18.500.000đ</span>
                                        </a>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                        <div className={cx('container-item')}>
                            <div>
                                <Slide>
                                    <div className={cx('item')}></div>
                                </Slide>
                            </div>
                        </div>
                        <div className={cx('container-item')}>
                            <div>
                                <Slide>
                                    <div className={cx('item')}></div>
                                </Slide>
                            </div>
                        </div>
                        <div className={cx('container-item')}>
                            <div>
                                <Slide>
                                    <div className={cx('item')}></div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
