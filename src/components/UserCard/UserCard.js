import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../reducers/userSlice';

const UserCard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const { details } = useSelector((state) => state.user);
    return (
        <div>
            <h3>User details</h3>
            <ul>
                <li>first Name: {details.firstName || ''} </li>
                <li>Last Name: {details.lastName || ''} </li>
            </ul>
        </div>
    )
};

export default UserCard;
