import type React from "react";
import TempAddProduct from "../templates/templateAddProduct";

const AddProductPage: React.FC = () => {
    return(
        <>
            {localStorage.getItem('token') &&
                <TempAddProduct />
            }
        </>
    );
}

export default AddProductPage;