

import { Anvil } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {

    const auth = false;
    const tempUser={
        name:"John Doe",
        username:"john_doe",
        email:"john@example.com",
    }
    return (
        <div className='w-full flex justify-between items-center px-8 h-12'>

            <Link href={'/'} className='flex gap-2'>
                <Anvil />
                <span className='font-extrabold'>GreekCMS</span>
            </Link >
            {auth ? <Button href={'/logout'}>Sign out</Button> : <Button href={'/login'}>
                Sign In
            </Button>}
            <UserContentModel user={tempUser} />


        </div>
    )
}

export default Navbar;


const UserContentModel = ({ user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>User</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Hi, ${user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
