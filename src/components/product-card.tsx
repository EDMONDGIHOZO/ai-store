import {BsArrowRight} from "react-icons/bs";

const ProductCard = () => {
    return (
        <div className="rounded shadow p-2 space-y-3">
            <div>
                <strong>Product name</strong>
            </div>
            <p className={"text-sm"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque beatae deleniti doloremque et
                facilis,
            </p>
            <div>
                <button className="outlined_btn font-bold">
                    Order
                </button>
            </div>
        </div>
    )
}

export default ProductCard;