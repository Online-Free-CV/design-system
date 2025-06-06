interface ISVGProps {
    fill?: string;
    fillOpacity?: string;
    icon?: string;
}
interface IconProps extends React.SVGProps<SVGSVGElement> {
    themeColor?: string;
}
export declare const Phone: React.FC<IconProps>;
export declare const Email: React.FC<IconProps>;
export declare const Location: React.FC<IconProps>;
export declare const Home: React.FC<ISVGProps>;
export declare const Resume: React.FC<ISVGProps>;
export declare const Portfolio: React.FC<ISVGProps>;
export declare const Contact: React.FC<ISVGProps>;
export declare const NavBarIcon: React.FC<ISVGProps>;
export {};
