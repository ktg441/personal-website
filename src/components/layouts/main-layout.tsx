import type { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-full">
            <div className="flex w-full flex-col">{children}</div>
        </div>
    );
};
