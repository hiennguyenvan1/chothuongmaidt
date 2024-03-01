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

const cx = classNames.bind(styles);

const Image1 = [
    {
        url: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/273212604_666273484565577_7339715495513323540_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FK6QEw1nA2cAX8LJnpK&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAtMdDW3f-j3FZR0QyFigMc4wFTSiOJNxWSdO7pjXBbYg&oe=65E66666',
        cap: 'hien dep trai',
    },
    {
        url: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/305585590_802594887600102_512154020363835148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=hQpy90h1n5kAX-k24yI&_nc_oc=AQnTYLB7Vzz51cLg9IJp3p2Yq2Z4iCRDhD6Ufg7iztyJLpyeFCO2hAxhJnEm49xBGy7QMigbHcjqpXJWVBjyQ5qg&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAxfXC_goHbjzGRihqm6Mm9lSk1OvGaVw75iJTOk0ef2g&oe=65E7104C',
        cap: 'hien dep trai',
    },
    {
        url: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/305585590_802594887600102_512154020363835148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=hQpy90h1n5kAX-k24yI&_nc_oc=AQnTYLB7Vzz51cLg9IJp3p2Yq2Z4iCRDhD6Ufg7iztyJLpyeFCO2hAxhJnEm49xBGy7QMigbHcjqpXJWVBjyQ5qg&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAxfXC_goHbjzGRihqm6Mm9lSk1OvGaVw75iJTOk0ef2g&oe=65E7104C',
        cap: 'hien dep trai',
    },
    {
        url: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/305585590_802594887600102_512154020363835148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=hQpy90h1n5kAX-k24yI&_nc_oc=AQnTYLB7Vzz51cLg9IJp3p2Yq2Z4iCRDhD6Ufg7iztyJLpyeFCO2hAxhJnEm49xBGy7QMigbHcjqpXJWVBjyQ5qg&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAxfXC_goHbjzGRihqm6Mm9lSk1OvGaVw75iJTOk0ef2g&oe=65E7104C',
        cap: 'hien dep trai',
    },
];

const Image = [
    'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/273212604_666273484565577_7339715495513323540_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FK6QEw1nA2cAX8LJnpK&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAtMdDW3f-j3FZR0QyFigMc4wFTSiOJNxWSdO7pjXBbYg&oe=65E66666',
    'tuyen',
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
        setshowimage(Image[index]);
    };
    console.log(showimage.cap);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('gird-10')}>
                    <div className={cx('container')}>
                        <div className={cx('container-slider')}>
                            <div className={cx('prev-left')}>
                                <span>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </span>
                            </div>
                            {Image.length > 0 &&
                                Image.map((item, index) => (
                                    <div className={cx('slider-image')}>
                                        <img src={item} />
                                    </div>
                                ))}
                            {/* <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/273212604_666273484565577_7339715495513323540_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FK6QEw1nA2cAX8LJnpK&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAtMdDW3f-j3FZR0QyFigMc4wFTSiOJNxWSdO7pjXBbYg&oe=65E66666" /> */}
                            {/* <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/305585590_802594887600102_512154020363835148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=hQpy90h1n5kAX-k24yI&_nc_oc=AQnTYLB7Vzz51cLg9IJp3p2Yq2Z4iCRDhD6Ufg7iztyJLpyeFCO2hAxhJnEm49xBGy7QMigbHcjqpXJWVBjyQ5qg&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAxfXC_goHbjzGRihqm6Mm9lSk1OvGaVw75iJTOk0ef2g&oe=65E7104C" /> */}
                            <div className={cx('prev-right')}>
                                <span onClick={handleprev}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
