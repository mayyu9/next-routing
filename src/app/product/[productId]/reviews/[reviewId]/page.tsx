import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetailPage({ params }: {
    params : {
        productId: string,
        reviewId: string
    }
}){
    const count = getRandomInt(2);

    if(count === 1) {
        throw new Error(' error while loading the page');
    }
    if(parseInt(params.reviewId) >1000) {
        notFound();
    }
    return(
        <h1>Currently reviewing the details of the product whose {params.productId} and reviewId is {params.reviewId} </h1>
    )
}