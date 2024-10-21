'use client'
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleOrders = () => {
        console.log('order placed successfully');
        router.push('/');
    };

    return (
        <>
        <h1>Order Products </h1>
        <button type='button' onClick={handleOrders}>Place Order</button>
        </>
    )
}