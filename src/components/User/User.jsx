import { useState } from 'react';
import { createUsers } from '../../service/user';
import UserData from '../UserData/UserData';
import styles from './User.module.css';

const User = () => {

    const [name, setName] = useState('');

    const addHandler = () => {
        createUsers(name)
            .then((actualdata) => {
                console.log(actualdata);
                setName('');
            });
    }

    return (
        <>
            <h2 className={styles.wcMsg}>Hello User</h2>
            <div className={styles.userInput}>
                <input type="text" size="50" placeholder='Enter your name...' onChange={(e) => setName(e.target.value)} className={styles.inputField} />
                <input type="button" value="ADD" onClick={addHandler} />
            </div>
            <UserData />
        </>
    );
};
export default User;