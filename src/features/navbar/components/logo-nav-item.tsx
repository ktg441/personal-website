import Logo from '@/assets/images/Logo.png';

export const LogoNavItem = () => {
    return (
        <div className="flex items-center">
            <a
                className="flex shrink-0 flex-row items-center gap-2"
                aria-label="Home"
                href="/"
            >
                <img src={Logo} alt="KTG Logo" width={40} height={40} />
            </a>
        </div>
    );
};
