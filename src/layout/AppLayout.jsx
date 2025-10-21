import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';


function AppLayout() {


    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;

