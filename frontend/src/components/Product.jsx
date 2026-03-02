const Product = ({ productData }) => {
    return (
        <div className="" >
            <div className="p-4 text-center">
                <h1 className="text-4xl">{productData?.productName}</h1>
                <img className="w-80 h-80" src={productData?.image} alt="" />
                <div className="flex justify-around">
                    <span>{productData?.weight}</span>
                    <span>₹ {productData?.price}</span>
                </div>
                <div className="flex justify-around">
                    <span> Stock {productData?.stock}</span>
                    <span> Location {productData?.found}</span>
                </div>
            </div>
        </div>
    )
}
export default Product