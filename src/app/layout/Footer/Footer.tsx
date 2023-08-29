import { Icon } from "../../shared/Icon/Icon";


export const Footer = () => {
    return (
        <footer className=" bottom-0 h-20 border-t border-border-gray mt-20 flex justify-between items-center">
            <Icon iconName="gazprom" />
            <span className="text-lg text-main-purple font-medium">2023</span>
        </footer >
    );
};
