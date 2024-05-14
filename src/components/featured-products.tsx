import ProductCard from "@/components/product-card";
import {BsArrowRight} from "react-icons/bs";
import React from "react";


const FeaturedProducts: React.FC<{ product_type: string }> = ({product_type}) => {
    return (
        <div className="my-4 max-w-5xl">
            <h3 className={"font-medium text-xl"}>Featured <span className={"text-green-400"}>{product_type}</span></h3>
            <div className={"my-4 grid grid-cols-1 lg:grid-cols-4 gap-2"}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className={"flex justify-end"}>
                <button className="btn">
                    <BsArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default FeaturedProducts;