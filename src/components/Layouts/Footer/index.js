import classNames from 'classnames/bind';

import style from './Footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
    return <h2 className={cx('h2')}>Footer</h2>;
}

export default Footer;
