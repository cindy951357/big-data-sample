import { useState } from 'react';
import IconMenu from "../assets/images/icon-menu.png";
import IconDatePicker from "../assets/images/icon-datepicker.png";
import { useDispatch } from 'react-redux';
import { fetchCasesByDate } from '../feature/case/caseSlice';

const DateTimePeriodComponent = () => {
    const dispatch = useDispatch();

    const [inputStartDate, setInputStartDate] = useState('');
    const [inputEndDate, setInputEndDate] = useState('');

    const onInputStartChange = e => {
        setInputStartDate(e.target.value);
    }

    const onInputEndChange = e => {
        setInputEndDate(e.target.value);
    }

    const searchByDate = () => {
        dispatch(fetchCasesByDate({
            inputStartDate: inputStartDate.replaceAll('-', '/'),
            inputEndDate: inputEndDate.replaceAll('-', '/'),
        }))
    }

    return (
        <div className="date-time-period-component 
            flex items-center">
            <span className="flex mr-[10px] font-bold text-sm">日期區間</span>
            <span className="flex w-[250px] h-[44px] items-center bg-[#F5F5F5] 
            rounded-2xl"> 
                <input className="input-start w-[90px]  ml-[5px] mr-[10px] bg-[#F5F5F5] border-none"
                    type="date" onChange={e => onInputStartChange(e)}
                    value={inputStartDate}
                />
                <span>~</span>
                <input className="input-end w-[90px] ml-[5px] mr-[10px] bg-[#F5F5F5] border-none"
                    type="date" onChange={e => onInputEndChange(e)}
                    value={inputEndDate}
                />
                <img src={IconDatePicker} alt="submit" className="w-[36px]
                    h-[28px] cursor-pointer" onClick={searchByDate}
                />
            </span>

        </div>
    )
}

const Top = () => {
    return (
        <div className="top-component flex justify-between">
            <div className="icon-container h-[72px] w-[56px] bg-[#FDEDF1] flex place-content-center items-center">
                 <img src={IconMenu} alt='menu' className="flex
                 h-[32px] w-[32px]"/>
                 
            </div>
            <DateTimePeriodComponent />
           
        </div>
    )
}

export { Top };