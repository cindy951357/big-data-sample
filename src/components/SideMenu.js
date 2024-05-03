import "./SideMenu.scss";
import IconChart from "../assets/images/icon-chart.png";
const SideMenu = () => {
    return (
        <div className="side-menu-container w-[224px] h-full overflow-hidden">
            <div className="menu-item-container w-full h-[56px] mt-[32px] bg-[#FDEDF1] flex items-center
                px-[24px]
            ">
                <img src={IconChart} alt='chart'className="w-[26px] h-[22px] mr-[19px]"/>
                <span className="menu-text text-[#E95076] text-sm font-bold">案件分析</span>
            </div>
        </div>
    )
}
export { SideMenu };