export default function ReviewDetailPage({ params }: {
    params : {
        productId: string,
        reviewId: string
    }
}){
    return(
        <h1>Currently reviewing the details of the product whose {params.productId} and reviewId is {params.reviewId} </h1>
    )
}