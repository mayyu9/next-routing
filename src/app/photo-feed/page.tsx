import Image from "next/image"
import wonderImages from "./wonder"
import Link from "next/link"
// import Card from "@/components/Card";

export default function PhotoFeed(){
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-4">Wonders of the Tungath Trek</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    wonderImages.map(({id, src, name}) => (
                        <Link key={id} href={`/photo-feed/${id}`}>
                        <Image alt={name} src={src} key={id} className="w-full object-cover aspect-square" />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}