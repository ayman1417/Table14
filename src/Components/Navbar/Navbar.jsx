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
} from "@heroui/react";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png";
export const AcmeLogo = () => {
    return (
        <Link to="/" className="">
            <img
                src={logo}
                alt="Table14 Logo"
                className="h-24  object-contain"
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
            role="presentation"
            viewBox="0 0 24 24"
            width={width || size}
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
    const menuItems = [
        "home",
        "categories",
        "areas",
        "ingredients",
        "recipes",
    ];
    return (
        <Navbar isBordered shouldHideOnScroll className="bg-background py-1 border-mainDark  max-w-full  "
            classNames={{
                wrapper: "max-w-full px-6",
            }}
        >
            {/* left content */}
            <NavbarContent className="md:hidden flex gap-3 " justify="start">
                <NavbarMenuToggle className="text-black font-bold hover:pointer-coarse::" />
                <NavbarContent >
                    <NavbarBrand className=" ">
                        <AcmeLogo />
                    </NavbarBrand>
                    <NavbarContent className="hidden md:flex gap-3">

                        <NavbarItem isActive>
                            <Link aria-current="page" className="text-white hover:text-main duration-300  font-medium" to="/categories">
                                Categories
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-white hover:text-main duration-300 font-medium" to="/ingredients">
                                Ingredients
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-white hover:text-main duration-300 font-medium" to="/recipes">
                                Recipes
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-white hover:text-main duration-300 font-medium" to="/areas">
                                Areas
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </NavbarContent>

            </NavbarContent>
            <NavbarContent justify="start " className="">

                <NavbarContent className="hidden md:flex gap-4">
                    <NavbarBrand className=" ">
                        <AcmeLogo />
                    </NavbarBrand>
                    <NavbarItem isActive>
                        <Link aria-current="page" className="text-mainDark hover:text-main text-lg duration-300  font-medium" to="/categories">
                            Categories
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-mainDark hover:text-main text-lg duration-300 font-medium" to="/ingredients">
                            Ingredients
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-mainDark hover:text-main text-lg duration-300 font-medium" to="/recipes">
                            Recipes
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-mainDark hover:text-main text-lg duration-300 font-medium" to="/areas">
                            Areas
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            {/* right content */}

            <NavbarContent as="div" className="items-center    " justify="end">
                <Input
                    classNames={{
                        base: "sm:max-w-[16rem] min-w-[10rem] h-11",
                        input: "text-sm",
                        inputWrapper:
                            "h-full bg-white border border-mainDark/30 rounded-xl " +
                            "hover:border-mainDark transition-all duration-300 " +
                            "focus-within:border-mainDark focus-within:ring-2 focus-within:ring-mainDark/30",
                    }}
                    placeholder="Search recipes..."
                    startContent={<SearchIcon size={18} className="text-mainDark/50" />}
                    type="search"
                />
                <Button as={Link} color="default" href="#" variant="bordered" className=" text-white font-bold hover:text-mainDark hover:border-main border-mainDark hover:bg-main bg-mainDark duration-300" >
                    Sign Up
                </Button>
            </NavbarContent>

            {/* toggler */}

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
