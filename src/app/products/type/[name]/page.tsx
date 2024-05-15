import React from "react";


const ProductsType:React.FC<{params: {query: {name: string}}}> = async ({params}) => {

    return (
        <div>
            show product type {params.query?.name}
        </div>
    )
}

export default ProductsType;