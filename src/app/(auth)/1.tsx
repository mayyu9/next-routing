"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'Forgot Password', href: '/forgot-password'}
];

export default function Authtemplate({
    children
}: {
    children: React.ReactNode
}) {

    const pathName =  usePathname();
    const [userVal, setUserVal] = useState('')

    return(
        <div>
            <div>
                <label>
                    user val: 
                    <input value={userVal} onChange={e => setUserVal(e.target.value)} />
                </label>
            </div>
            {
                navLinks.map( link => {
                    const isActive = pathName.startsWith(link.href);

                    return (
                    <>
                    <Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4': 'text-blue-500 mr-4'}>{link.name}</Link>
                    {' | '}
                    </>
                    )
                })
            }
            {children}
        </div>
    )
}