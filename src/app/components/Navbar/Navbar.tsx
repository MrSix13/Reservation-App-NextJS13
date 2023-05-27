'use client'
import Container from '../Container';
import { Logo, Search, UserMenu } from './';
import { SafeUser } from '@/app/types';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log({ currentUser })
    return <nav>
        <div className="fixed w-full bg-white z-10 shadow-sm">
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
    </nav>;
}

export default Navbar;