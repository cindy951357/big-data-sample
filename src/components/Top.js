import IconMenu from "../assets/images/icon-menu.png";
import IconDatePicker from "../assets/images/icon-datepicker.png";

const DateTimePeriodComponent = () => {
    return (
        <div className="date-time-period-component 
            flex items-center">
            <span className="flex mr-[10px] font-bold text-sm">日期區間</span>
            <span className="flex w-[250px] h-[44px] items-center bg-[#F5F5F5] 
            rounded-2xl"> 
                <input className="ml-[5px] mr-[10px] bg-[#F5F5F5] border-none"/>
                <img src={IconDatePicker} alt="date-picker" className="w-[36px]
                    h-[28px] cursor-pointer"/>
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