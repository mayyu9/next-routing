// dynamic metadata implementation start
import { Metadata } from "next";
// import Link from "next/link";

type props = {
    params : {
        productId: string
    }
};

// export const generateMetadata = ({ params }: props): Metadata => {
//     return {
//         title: `Product ${params.productId}`
//     }
// };

// using the async await functionality, wehere we resolve API call
export const generateMetadata = async ({ params }: props): Promise<Metadata> => {

    const title = await new Promise( resolve => {
        setTimeout( () => {
            resolve(`This Product is Iphone ${params.productId}`)
        }, 100)
    })
    return {
        title: `${title}`
    }
};

// dynamic metadata implementation end

export default function ProductDetailedPage({ params }: props) {
    return(
        <>
        <h1>Product detail page for product id {params.productId} </h1>
        {/* <Link href='/'>Back to home</Link> */}
        </>
        
    )
};
