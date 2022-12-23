import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../service/user";
import styles from './UserData.module.css';

const UserData = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data);
            });
    }, []);



    return (
        <div className={styles.Ul}>
            {users.map((user) => (
                <h4 className={styles.name} key={user.id}>{user.name}</h4>
            ))}
        </div>
    )
};
export default UserData;
