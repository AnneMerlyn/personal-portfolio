import React from 'react';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
    <div>{children}</div>
);

export default BaseLayout;
