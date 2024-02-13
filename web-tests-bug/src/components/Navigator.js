import Home from "../pages/Home";
import {useEffect, useState} from "react";
import {PAGES} from "../utils/utils";
import About from "../pages/About";

export const Navigator = ({ children }) => {
    const [currentNavigation, setCurrentNavigation] = useState('home');
    const [navigation, setNavigation] = useState([
        {
            name: 'home',
            base: '/home',
            component: Home
        },
        {
            name: 'about',
            base: '/about',
            component: About
        }
    ]);

    useEffect(() => {
        setNavigation([
            {
                name: 'home',
                base: '/home',
                component: Home
            },
            {
                name: 'about',
                base: '/about',
                component: About
            }
        ])
    }, [])

    useEffect(() => {
        if (navigation.length) {
            setCurrentNavigation(PAGES.HOME);
        }
    }, [navigation])

    const selectedScreen = navigation.find((nav) => nav.name === currentNavigation);
    const Render = selectedScreen.component;

    return <Render />
}
