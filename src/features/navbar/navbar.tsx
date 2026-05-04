import { LogoNavItem } from './components/logo-nav-item';

export const Navbar = () => {
    return (
        <div className="fixed top-0 z-10 w-full rounded-b-2xl bg-yellow-600 py-3">
            <div className="flex items-center justify-between gap-8 px-4 text-white">
                <LogoNavItem />
                <div className="flex items-center">Hello</div>
            </div>
        </div>
    );
};
