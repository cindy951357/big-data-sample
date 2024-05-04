import { useEffect } from 'react';
import './MainLayout.scss';
import { Top } from '../components/Top';
import { SideMenu } from '../components/SideMenu';
import { MainArea } from '../components/MainArea';
import { useDispatch } from 'react-redux';
import { fetchCases

 } from '../feature/case/caseSlice'; 
const MainLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCases());
  }, []);
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