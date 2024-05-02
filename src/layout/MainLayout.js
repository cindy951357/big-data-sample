import './MainLayout.scss';
import { Top } from '../components/Top';
import { SideMenu } from '../components/SideMenu';
import { MainArea } from '../components/MainArea';

const MainLayout = () => {
    return (
        <div className="main-container h-full">
            <div className="top">
                <Top />
            </div>
            <div className="bottom">
                 <div className="menu-vertical">
                    <SideMenu />
                </div>
                <div className="main-content">
                    <MainArea/>
                </div>
            </div>
           
        </div>
    )
}

export {MainLayout};