
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartArea = () => {
    const [chartData, setChartData] = useState([{data:[800, 800]}]);
    const casePetitionCount = useSelector(state => state.case.value.petition_count);
    const [chartDateData, setChartDateDate] = useState( ['1', '2','3','4','5','6']);


    const mergeDateLabels = (prev,cur) => {
        let mergedLabels = [];
        for (let i = 0; i < prev.length; i++) {
            mergedLabels.push(prev[i].slice(5) + ' ' + cur[i].slice(5));
        }
        return mergedLabels;
    }

    useEffect(() => {
        if(casePetitionCount !== undefined && casePetitionCount.current_period !== undefined) {
            const sortedData = Object.keys(casePetitionCount.current_period) 
            .sort((a, b) => new Date(a) - new Date(b)) 
            .map(key => (casePetitionCount.current_period[key]));

            const sortedDataPrevious = Object.keys(casePetitionCount.previous_period) 
            .sort((a, b) => new Date(a) - new Date(b)) 
            .map(key => (casePetitionCount.previous_period[key]));

            const sortedKeysCurret =  Object.keys(casePetitionCount.current_period) 
            .sort((a, b) => new Date(a) - new Date(b))
            .map(key => key);

            const sortedKeyPrevious = Object.keys(casePetitionCount.previous_period) 
            .sort((a, b) => new Date(a) - new Date(b)) 
            .map(key => key);

            const mergedDateLabels = mergeDateLabels(sortedKeyPrevious, sortedKeysCurret);

            setChartData([
                {data:sortedDataPrevious},
                {data:sortedData},
            ]);
            setChartDateDate(mergedDateLabels);
        }
    }, [casePetitionCount]);

    return (
      <BarChart
        xAxis={[{ scaleType: 'band', data: chartDateData}]}
        series={chartData}
        width={1176}
        height={226}
      />
    );
  }

  export {BarChartArea};