import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import UserMeowMeow from 'src/assets/images/UserMeowMeow.png';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src ={UserMeowMeow} alt="Meow"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Huu Khanh</span>
                    <FontAwesomeIcon className={cx('check')} icon= {faCheckCircle}/>
                </p>
                <span className={cx('username')}> NguyenHuuKhanh</span>
            </div>
        </div>
    )
}

export default AccountItem;