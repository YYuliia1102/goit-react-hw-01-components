import React from "react";
import css from './FriendList.module.css'

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

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;
