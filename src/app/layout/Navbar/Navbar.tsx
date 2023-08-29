import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className=" top-0 z-10 mb-10">
            {/* Desktop Navigation */}
            < div className='flex text-lg mt-10 gap-10'>
                <NavLink
                    to="/cost-estimate"
                    className={({ isActive }) =>
                        `flex py-1 ${isActive ? "text-main-purple border-b border-main-purple" : ""}`
                    }>
                    Оценка стоимости
                </NavLink>

                <NavLink
                    to="/risk-assessment"
                    className={({ isActive }) =>
                        `flex py-1 ${isActive ? "text-main-purple border-b border-main-purple" : ""}`
                    }>
                    Оценка рисков
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={({ isActive }) =>
                        `flex py-1 ${isActive ? "text-main-purple border-b border-main-purple" : ""}`
                    }>
                    Аналитика
                </NavLink>
            </div >
        </nav >
    );
};
