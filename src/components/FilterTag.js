import IconGrids from "../assets/images/icon-grids.png";
import IconClose from "../assets/images/icon-close.png";
import { useDispatch } from "react-redux";
import { removeFromCategory } from "../feature/case/categorySlice";


const FilterTag = ({tagText = "標籤"}) => {
    const dispatch = useDispatch();

    const onRemoveBtnClick = () => {
        console.log("按下刪除按鈕")
        dispatch(removeFromCategory(tagText));
    };

    return (
        <div className="filter-tag flex h-[29px] rounded m-1 bg-[#FDEDF1] items-center px-[12px]
            border-[1px] border-[#F4A4B8] gap-1 min-w-[92px]
        ">
            <img src={IconGrids} alt="grid" 
                className="w-[13.75px] h-[13.75px] flex"
            />
            <div className="tag-text flex">{tagText}</div>
            <img src={IconClose} alt="X" 
                onClick={onRemoveBtnClick}
                className="w-[12.75px] h-[12.75px] flex cursor-pointer"
            />
        </div>
    )
}

export { FilterTag };