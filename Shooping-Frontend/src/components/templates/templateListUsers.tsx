import type React from "react";
import Table from "../organisms/table";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import type { User } from "../../models/User";

const TempListUsers: React.FC = () => {

    const [row, setRow] = useState<User[]>([]);

    const header = [
        "Username", 
        "Email", 
        "Is Active",
        "Actions"
    ]

    useEffect(() => {
        const fetchUsers = async() => {
            const data = await getAllUsers();
            setRow(data.data);
        }
        fetchUsers();
    })

    return(
        <>
            <Table 
                arrayHeader={header}
                arrayRows={row}
            />
        </>
    );
}

export default TempListUsers;