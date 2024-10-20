import Link from "next/link";

export default function ProductsDetailsPage() {
    const productId = 100;
    return(
        <>
        <h1> Welcome to products page</h1>
        <li><Link href='/product/1'>Product 1 </Link></li>
        <li><Link href='/product/2'>Product 2 </Link></li>
        <li><Link href='/product/3' replace>Product 3 </Link></li>
        <li><Link href='/product/4'>Product 4 </Link></li>
        <li><Link href={`/product/${productId}`}>Product {productId} </Link></li>
        </>
    )
};
