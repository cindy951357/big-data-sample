import { useEffect, useState } from 'react';
import Downward from "../assets/images/icon-downward.png";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCases } from '../feature/case/caseSlice';
import { FilterTag } from './FilterTag';
const FilterCaseBar = () => {
    const cases =  useSelector((state) => state.case.value);
    const tagCategories = useSelector((state) => state.category.value);
    const dispatch = useDispatch();

    const [allCategories, setAllCategories] = useState([]);

    const onSearchBtnClick = () => {
        dispatch(fetchCases());
        console.log(cases);
    }

    useEffect(() => {
        if(tagCategories !== undefined) {
            setAllCategories(tagCategories);
        }
    }, [tagCategories]);

    return (
        <div className="filter-case-bar flex border-0 border-l-[4px] border-[#52697A]
             w-full h-[74px] items-center justify-between">
            <h1 className="title flex text-lg  pl-[20px] w-[112px]">案件分析</h1>
            <div className="tags-bar flex rounded border border-[#52697A]
                w-[928px] h-[74px] justify-between items-center">
                    <div className="tags-container flex px-5 flex-wrap">
                        {allCategories.map((category, i) => (
                            <FilterTag key={i} tagText={category}/>
                        ))}
                    </div>

                    <img src={Downward} alt="down" className=" flex cursor-pointer
                        w-[20px] h-[20px] mr-[12.5px]
                    "/>
                
            </div>
            <button className="flex border-0 rounded-full w-[68px] h-[37px]
                bg-[#D7DFE4] justify-center items-center ml-[8px]"
                onClick={onSearchBtnClick}
                >查詢</button>
        </div>
    )
}

export { FilterCaseBar };