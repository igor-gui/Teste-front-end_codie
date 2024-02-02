import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import SecondHeader from "./SecondHeader";

export default function MainLayout({ children }: { children: ReactNode }) {
    const { route } = useRouter()
    console.log(route)
    return (
        <>
            <NavBar />
            { route === '/' ? '' : <SecondHeader route={route}/> }
            {children}
            <Footer />
        </>
    )
}