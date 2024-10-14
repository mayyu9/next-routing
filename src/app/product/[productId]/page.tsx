// dynamic metadata implementation start
import { Metadata } from "next";

type props = {
    params : {
        productId: string
    }
};

export const generateMetadata = ({ params }: props): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
};
// dynamic metadata implementation end

export default function ProductDetailedPage({ params }: props) {
    return(
        <h1>Product detail page for product id {params.productId} </h1>
    )
};
