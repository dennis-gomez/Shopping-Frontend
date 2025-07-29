import type React from "react";
import Tr from "../atoms/tr";
import Td from "../atoms/td";

type TableRowProps = {
    array: React.ReactNode[];
}

const TableRow: React.FC<TableRowProps> = ({
    array
}) => {
    return(
        <>
            {array && array.length > 0 && (
                <Tr>
                {array.map((node) => (
                    <Td 
                        children={node}
                    />
                ))}
                </Tr>
            )}  
        </>
    );
} 
export default TableRow;