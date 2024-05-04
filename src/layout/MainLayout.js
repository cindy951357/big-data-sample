import { useEffect } from 'react';
import './MainLayout.scss';
import { Top } from '../components/Top';
import { SideMenu } from '../components/SideMenu';
import { MainArea } from '../components/MainArea';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCases } from '../feature/case/caseSlice'; 
import { initCategories } from '../feature/case/categorySlice';

const MainLayout = () => {
    const dispatch = useDispatch();
    const fetchedCase = useSelector(state => state.case.value);
    useEffect(() => {
      dispatch(fetchCases());
  }, []);

    useEffect(() => {
        if(fetchedCase !== undefined) {
            console.log("fetchedCase.categories, going to dispatch", fetchedCase.categories);
            dispatch(initCategories(fetchedCase.categories));
        }
    }, [fetchedCase]);

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