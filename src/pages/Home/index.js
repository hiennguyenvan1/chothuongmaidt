import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    const [datasanpham, setdatasanpham] = useState([]);

    const fetchSanpham = async () => {
        try {
            const rs = await axios.get('http://localhost:3001/getSanpham');
            if (rs.data) {
                console.log(rs.data);
                setdatasanpham(rs.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchSanpham();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('gird-10')}>
                    <div className={cx('container')}>
                        <div className={cx('container-slider')}>
                            <Slide>
                                {Image.map((item, index) => (
                                    <div className={cx('slider-image')} key={index}>
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
                            <h2>Giá tốt hôm nay </h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')} key={index}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>
                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                        <div className={cx('container-item')}>
                            <h2>Thương hiệu chính hãng</h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')} key={index}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>
                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                        <div className={cx('container-item')}>
                            <h2>Tiki Best</h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')} key={index}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>
                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                        <div className={cx('container-item')}>
                            <h2>Tiki Best</h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>

                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                        <div className={cx('container-item')}>
                            <h2>Tiki Best</h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>

                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                        <div className={cx('container-item')}>
                            <h2>Tiki Best</h2>
                            <Slide>
                                <div className={cx('item-all')}>
                                    {datasanpham.map((item, index) => (
                                        <div className={cx('item')}>
                                            <Link to={`/chitiet/${item._id}`} className={cx('item-a')}>
                                                <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                                                <p>{item.name}</p>

                                                <span>
                                                    {item.price} <sup>₫</sup>
                                                </span>
                                                <br />
                                                <div className={cx('giaohang')}>
                                                    <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" />
                                                    <span>Giao siêu tốc 2h</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
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
