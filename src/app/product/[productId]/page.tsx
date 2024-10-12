export default function ProductDetailedPage({ params }: {
    params : {
        productId: string
    }
}) {
    return(
        <h1>Product detail page for product id {params.productId} </h1>
    )
};
