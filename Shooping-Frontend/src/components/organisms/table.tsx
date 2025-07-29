import type React from "react";
import TableHeader from "../molecules/tableHeader";
import TableRow from "../molecules/tableRow";
import type { User } from "../../models/User";

type TableProps = {
    arrayHeader: string[];
    arrayRows: User[];
}

const Table: React.FC<TableProps> = ({
    arrayHeader, 
    arrayRows
}) => {
    return (
        <>
        <table>
            <TableHeader 
                array={arrayHeader}
            />

            {arrayRows.map((user)=>(
                <TableRow 
                    array={ 
                        [
                            user.username, 
                            user.email, 
                            user.isActive
                        ]
                    }
                />
            ))}
        </table>
        </>
    );
}

export default Table;