import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Container } from '../container/container.component';

export const Header: FC =() => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx('py-navItem hover:text-white/30 hover:no-underline', {
        'text-white': !isActive,
        'text-theme-blue' : isActive
    });

    return (
        <header className="bg-theme-darkGray">
            <nav className="px-2 py-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            className="font-titillium text-2xl mr-8 text-theme-blue"
                        >
                            React Blog
                        </Link>
                        <ul className="pl-0 mb-0 list-none flex">
                            <li>
                                <NavLink to="/" className={navLinkClasses}>Home</NavLink>
                            </li>
                            <li className="ml-4">
                                <NavLink to="/sign-in" className={navLinkClasses}>Sign in</NavLink>
                            </li>
                            <li className="ml-4">
                                <NavLink to="/sign-up" className={navLinkClasses}>Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
}
