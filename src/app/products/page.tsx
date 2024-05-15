import Wrapper from "@/components/wrapper";
import ProductCard from "@/components/product-card";

export default function Products() {
    return (
        <Wrapper>
            <div className={"lg:py-16 space-y-20"}>
                <div className={"space-y-6"}>
                    <div>
                        <h3 className={"text-2xl font-bold"}>Fertilizers</h3>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-4 space-x-4"}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
                <div className={"space-y-6"}>
                    <div>
                        <h3 className={"text-2xl font-bold"}>Seeds</h3>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-4 space-x-4"}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}