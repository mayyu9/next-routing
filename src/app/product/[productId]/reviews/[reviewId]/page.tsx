import { notFound } from "next/navigation";

export default function ReviewDetailPage({ params }: {
    params : {
        productId: string,
        reviewId: string
    }
}){
    if(parseInt(params.reviewId) >1000) {
        notFound();
    }
    return(
        <h1>Currently reviewing the details of the product whose {params.productId} and reviewId is {params.reviewId} </h1>
    )
}