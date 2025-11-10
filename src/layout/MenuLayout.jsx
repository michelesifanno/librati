import { Outlet } from 'react-router-dom';
import MenuHeader from '../components/MenuHeader';
import Footer from '../components/Footer';


export default function MenuLayout() {


    return (
        <>
            <MenuHeader />
            <Outlet />
        </>
    );
}