import React from "react";
import TemplateListProduct from "../templates/templateListProduct";

const ListProduct: React.FC = () => {
    return(
        <>
        {localStorage.getItem('token') &&
            <TemplateListProduct />
        }
        </>
    );
}

export default ListProduct;