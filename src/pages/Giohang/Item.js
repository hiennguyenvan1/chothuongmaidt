import classNames from 'classnames/bind';
import Styles from './Giohang.module.scss';
import { useState } from 'react';
const cx = classNames.bind(Styles);

function ItemRow({ item }) {
    const [soluong, setsoluong] = useState(1);
    const onclicktrusl = () => {
        setsoluong(soluong > 1 ? soluong - 1 : 1);
    };
    const onclickcongsl = () => {
        setsoluong(soluong + 1);
    };
    const onclickdelete = () => {
        console.log('click');
    };
    return (
        <>
            <div className={cx('item')}>
                <div className={cx('item-n-img')}>
                    <input type="checkbox" />
                    <div className={cx('item-img')}>
                        <img src={'http://localhost:3001/uploads/' + item.feature_image_path} />
                    </div>
                    <div className={cx('item-name')}>
                        <span>{item.name}</span>
                    </div>
                </div>
                <div className={cx('item-price')}>
                    <span>{item.price}</span>
                </div>
                <div className={cx('item-sl')}>
                    <span onClick={onclicktrusl}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" />
                    </span>
                    <input type="text" value={soluong} />
                    <span onClick={onclickcongsl}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" />
                    </span>
                </div>
                <div className={cx('item-pay')}>
                    <span>31111111112131212</span>
                </div>
                <div className={cx('item-delete')} onClick={onclickdelete}>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" />
                </div>
            </div>
        </>
    );
}

export default ItemRow;
