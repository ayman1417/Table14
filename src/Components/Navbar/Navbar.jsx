import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
    Input,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";

import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { isLoginContext } from "../../Contexts/IsLoginContext";
import categoriesNames from "../../helper/CategoriesNames";
import axios from "axios";
import { searchContext } from "../../Contexts/SearchContext";
import { loadContext } from "../../Contexts/LoadContext";

export const AcmeLogo = () => {
    return (
        <Link to="/">
            <img
                src={logo}
                alt="Table14 Logo"
                className="h-24 object-contain"
            />
        </Link>
    );
};

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={height || size}
            width={width || size}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};


export default function App() {

    const navigate = useNavigate();
    const { setLogged } = useContext(isLoginContext);
    const { searchReady, setSearchReady } = useContext(searchContext);
    const { setLoading } = useContext(loadContext);

    const [selected, setSelected] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    

    function logOut() {
        navigate("/register");
        setLogged(false);
        localStorage.removeItem("loggedUser");
    }

    const menuItems = ["home", "areas", "recipes"];

    const linkClass = ({ isActive }) =>
        `${isActive ? "text-main" : "text-mainDark"} hover:text-main text-xl duration-300 font-medium`;

    async function searchRecipes(e) {
        const value = e.target.value;
        setSearchValue(value);

        if (!value.trim()) return;

        setLoading(true);

        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then((res) => {
                setSearchReady(res.data.meals || []);
                navigate("/recipes");
            })
            .finally(() => setLoading(false));
    }

    return (
        <Navbar isBordered shouldHideOnScroll className="bg-background py-1 border-mainDark max-w-full"
            classNames={{ wrapper: "max-w-full px-6" }}
        >

            {/* LEFT */}
            <NavbarContent className="md:hidden flex gap-3" >
                <NavbarMenuToggle />

                <NavbarBrand>
                    <AcmeLogo />
                </NavbarBrand>
            </NavbarContent>

            {/* CENTER */}
            <NavbarContent className="hidden md:flex xl:me-96 ">

                <NavbarBrand>
                    <AcmeLogo />
                </NavbarBrand>

                <NavbarItem>
                    <NavLink to="/recipes" className={linkClass}>
                        Meals
                    </NavLink>
                </NavbarItem>

                <NavbarItem>
                    <NavLink to="/areas" className={linkClass}>
                        Areas
                    </NavLink>
                </NavbarItem>

                <NavbarItem>
                    <NavLink to="/My-Table" className={linkClass}>
                        My Table
                    </NavLink>
                </NavbarItem>

                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="none" className={"text-mainDark hover:text-main text-lg duration-300 font-medium -ms-4"}>
                                Categories
                            </Button>
                        </DropdownTrigger>

                        <DropdownMenu
                            selectedKeys={selected}
                            selectionMode="single"
                            onSelectionChange={setSelected}
                        >
                            {categoriesNames.map((c) => (
                                <DropdownItem
                                    key={c.strCategory}
                                    as={Link}
                                    to={`/categories/${c.strCategory}`}
                                >
                                    {c.strCategory}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>

            </NavbarContent>

            {/* RIGHT */}
            <NavbarContent justify="end">

                <Input
                    classNames={{
                        base: "sm:max-w-[16rem] min-w-[10rem] h-11",
                        input: "text-sm",
                        inputWrapper:
                            "h-full bg-white border border-mainDark/30 rounded-xl hover:border-mainDark transition-all duration-300"
                    }}
                    placeholder="Search recipes..."
                    startContent={<SearchIcon size={18} className="text-mainDark/50" />}
                    value={searchValue}
                    onChange={searchRecipes}
                />

                <Button
                    onPress={logOut}
                    variant="bordered"
                    className="text-white font-bold hover:text-mainDark hover:border-main border-mainDark hover:bg-main bg-mainDark duration-300"
                >
                    Log out
                </Button>

            </NavbarContent>

            {/* MOBILE MENU */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" to={`/${item}`}>
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
