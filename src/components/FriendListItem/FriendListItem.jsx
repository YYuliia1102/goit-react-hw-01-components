import React from "react";
import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? true : false;

    return (
        <li className={css.item}>
            <span className={`${css.circle} ${css[status]}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;