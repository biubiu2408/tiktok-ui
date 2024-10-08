import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '../Popper';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        },0);
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy 
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>

                                </PopperWrapper>
                                </div>
                        )} 
                    >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false"/>
                        <button className={cx('clear')}>
                            {/* <FontAwesomeIcon icon={faCircleXmark}/> */}

                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                        <Button upload>Upload</Button>
                        <Button primary leftIcon = {<FontAwesomeIcon icon={faSignIn}/>}>Log In</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;