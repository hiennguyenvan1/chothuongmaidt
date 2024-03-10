import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const tabs = ['posts', 'comments', 'albums'];

function Sidebar() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hiennguyenvan1/chothuongmaidt/main/categories.json')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('danhmuc')}>
                <p className={cx('content')}>Danh Mục</p>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png" />
                    <span>Nhà sách Tiki </span>
                </a>
            </div>

            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png" />
                    <span>Nhà cửa - đời sống</span>
                </a>
            </div>
            <Link to={'/rendendienthoai'}>
                <div className={cx('item')}>
                    <a href="" className={cx('item-a')}>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png" />
                        <span>Điện thoại - máy tính</span>
                    </a>
                </div>
            </Link>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" />
                    <span>Đồ chơi - Mẹ & Bé</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png" />
                    <span>Phụ Kiện số</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png" />
                    <span>Điện gia dụng</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png" />
                    <span>Làm Đẹp - Sức khoẻ</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png" />
                    <span>Ô Tô - Xe Máy</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png" />
                    <span>Thời Trang Nữ</span>
                </a>
            </div>
            <div className={cx('item')}>
                <a href="" className={cx('item-a')}>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png" />
                    <span>Bách Hoá Online</span>
                </a>
            </div>

            {/* <ul>
                {post.map((pos1) => (
                    <li className={cx('class')} key={pos1.id}>
                        <img className={cx('image')} src={pos1.image_name} />
                        <a href="" className={cx('title')}>
                            {pos1.name}
                        </a>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default Sidebar;
