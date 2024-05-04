import { useEffect, useState } from 'react';
import Downward from "../assets/images/icon-downward.png";
import IconRound from "../assets/images/icon-round.png";
import IconSelected from "../assets/images/icon-selected.png";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCases } from '../feature/case/caseSlice';
import { removeFromCategory, addToCategory } from '../feature/case/categorySlice';
import { FilterTag } from './FilterTag';

const RecoverableTag = ({ tagText }) => {
    const [selected, setSelected] = useState(true);
    const dispatch = useDispatch();

    const toggleSelected = () => {
        if (selected) {
            dispatch(removeFromCategory(tagText));
        } else {
            dispatch(addToCategory(tagText));
        }
        setSelected(!selected);
    }

    return (
        <div className="recoverable-tag w-full h-[45px] flex 
            px-[20px] items-center"
        >
            <img src={selected ? IconSelected : IconRound} alt="O" 
                className="flex w-[32px] h-[32px] mr-[8px] cursor-pointer"
                onClick={toggleSelected}
            />
            <span className="tag-text flex text-sm font-normal">{tagText}</span>
        </div>
    )
}

const FilterCaseBar = () => {
    const cases =  useSelector((state) => state.case.value);
    const tagCategories = useSelector((state) => state.category.value);
    const initalCategories = useSelector(state => state.category.initialCategory);

    const dispatch = useDispatch();

    const [allCategories, setAllCategories] = useState([]);
    const [initCategories, setInitCategories] = useState([]);

    const onSearchBtnClick = () => {
        dispatch(fetchCases());
        console.log(cases);
    }

    useEffect(() => {
        if(tagCategories !== undefined) {
            setAllCategories(tagCategories);
        }
    }, [tagCategories]);

    useEffect(() => {
            if(initalCategories !== undefined) {
                setInitCategories(initalCategories);
            }
        }, [initalCategories]);
    

    return (
        <div className="filter-case-bar flex border-0 border-l-[4px] border-[#52697A]
             w-full h-[74px] items-center justify-between">
            <h1 className="title flex text-lg  pl-[20px] w-[112px]">案件分析</h1>
            <div className="tags-bar-relative-container relative">
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
                <div className="all-tags all-recoverable-tags absolute top-[74px] right-0 w-[330px]
                    z-10 bg-white border border-[#52697A] rounded
                ">
                            {initCategories.map((category, i) => (
                                <div key={`${i} ${category}`} className="w-full">
                                    <RecoverableTag tagText={category}/>
                                </div>
                            ))}
                </div>
            </div>            
            <button className="flex border-0 rounded-full w-[68px] h-[37px]
                bg-[#D7DFE4] justify-center items-center ml-[8px]"
                onClick={onSearchBtnClick}
                >查詢</button>
        </div>
    )
}

export { FilterCaseBar };