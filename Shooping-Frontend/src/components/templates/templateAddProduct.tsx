import React from "react"
import HeadingOne from "../atoms/headingOne";
import FormProduct from "../organisms/formProduct";

const TempAddProduct: React.FC = () => {
    return (
        <>
            <HeadingOne 
                label="Add product"
                className=""
            />
            <FormProduct 
                classNameBtn="button-add"
                product={null}
            />
        </>
    );
}
export default TempAddProduct;