import type React from "react";
import TempListUsers from "../templates/templateListUsers";

const ListUsersPage: React.FC = () => {
    return(
        <>
        {localStorage.getItem('token') &&
            <TempListUsers />
        }   
        </>
    );
}

export default ListUsersPage;