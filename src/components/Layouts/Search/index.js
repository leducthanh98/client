import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';

import style from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import PostItem from '../../PostIteam';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([1]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();
    const handleClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive
            placement="bottom"
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Bài Viết</h4>
                        <div className={cx('post-item')}>
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                        </div>
                        <h4 className={cx('search-title')}>Tag</h4>
                        <div className={cx('tag-item')}>
                            <p>BTC</p>
                            <p>ETH</p>
                            <p>BTC</p>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Tìm Kiếm"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                />
                <button className={cx('clear')} onClick={handleClearSearch}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
