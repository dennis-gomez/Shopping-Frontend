import type React from "react";
import Th from "../atoms/th";

type TableHeaderProps = {
    array: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({
    array
}) => {
    return(
        <>
            <th>
            {array.map((node) => (
                <Th
                    children={node}
                />
            ))}
            </th>
        </>
    );
} 
export default TableHeader;