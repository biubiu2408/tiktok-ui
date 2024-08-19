import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Children } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    upload = false,
    small = false,
    large = false,
    onClick,
    children, 
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        outline,
        primary,
        upload,
        small,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
