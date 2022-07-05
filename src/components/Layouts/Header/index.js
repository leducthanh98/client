import classNames from 'classnames/bind';
import { useState } from 'react';

import Search from '../Search';
import style from './Header.module.scss';
import logo from '../../../assets/images/logo.png';

const cx = classNames.bind(style);

function Header() {
    // const [searchResult] = useState([1]);
    return (
        <header className={cx('wraper')}>
            <div className={cx('top-bar')}>
                <div className="container">
                    <div className="row">
                        <div className={cx('top-bar-content')}>
                            <div className={cx('logo')}>
                                <img src={logo} alt="logo cruptohub.io" />
                            </div>
                            <div className={cx('price-market')}> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('menu')}>
                <div className="container">
                    <div className="row">
                        <div className={cx('menu-content')}>
                            <ul>
                                <li>
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li>Học Tập</li>
                                <li>Kiếm Tiền</li>
                                <li>Xu Hướng</li>
                                <li>Tin Tức</li>
                            </ul>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
