'use client'



import { Logo, Search, UserMenu } from './';
import Container from '../Container';
import { SafeUser } from '@/app/types';
import Categories from './Categories';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {


    return <nav className='fixed w-full bg-white z-10 shadow-sm'>
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                ">

                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>
        </div>
        <Categories />
    </nav>;
}

export default Navbar;