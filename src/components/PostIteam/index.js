import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PostItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('thumbnail')}
                src="https://coin68.com/wp-content/uploads/2022/06/1645703263-FSX-0011-75x75.jpg"
                alt="img"
            />
            <div className={cx('post-content')}>
                <h4 className={cx('post-title')}>
                    CEO Binance bác bỏ tin đồn sàn giao dịch chuẩn bị quay lại thị trường Hàn Quốc
                </h4>
                <p className={cx('post-date')}>
                    <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} /> 20/06/22
                </p>
            </div>
        </div>
    );
}

export default PostItem;
