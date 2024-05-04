import { useEffect, useState } from 'react';
import { DataGridArea } from "./DataGridArea";
import { FilterCaseBar } from "./FilterCaseBar";
import { BarChartArea } from "./BarChart";
import { useSelector } from "react-redux";

const RowsOfPeriod = ({numOfPrevPeriod, numOfCurPeriod}) => {
    return (
        <div className="rows-of-period w-full flex flex-col items-end pt-[20px] pr-[20px]">
            <div className="text-[#52697A] flex items-center">
                <div className="rounded-full w-[12px] h-[12px] bg-[#52697A] mr-[4px]"></div>
                前期{numOfPrevPeriod}筆
            </div>
            <div className="text-[#5084E9] flex items-center">
                <div className="rounded-full  w-[12px] h-[12px] bg-[#5084E9] mr-[4px]"></div>
                當期{numOfCurPeriod}筆
            </div>
        </div>
    )
}

const MainArea = () => {
    const petitionCount = useSelector(state => state.case.value.petition_count);

    const [prevPetitionCount, setPrevPetitionCount] = useState(0);
    const [curPetitionCount, setCurPetitionCount] = useState(0);

    useEffect(() => {
            if( petitionCount !== undefined) {
                setPrevPetitionCount(petitionCount.previous_period_total_count);
                setCurPetitionCount(petitionCount.current_period_total_count);
            }
        }, [petitionCount]);
    

    return (
        <div className="main-area-bg bg-gray-100 h-full overflow-hidden">
            <div className="main-area mt-[20px] ml-[20px] bg-white rounded-tl-lg h-full
                pt-[20px]
            ">
                <FilterCaseBar/>
                <RowsOfPeriod numOfPrevPeriod={prevPetitionCount} numOfCurPeriod={curPetitionCount}/>
                <BarChartArea/>
                <DataGridArea/>
            </div>
        </div>
    )
}

export { MainArea };