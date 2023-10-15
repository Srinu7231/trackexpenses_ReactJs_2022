import './Chart.css'
import { ChartBar } from './ChartBar'

export const Chart = (props) =>{
    // console.log("Data Points on Charrt ===============> ",props.DataPoints[0].value)
    const DataPointValues = props?.DataPoints?.map(dataPoint => {
                                                                    return dataPoint?.value
                                                                })
    // console.log("DataPointValues =================>",DataPointValues)
    let MaximumValue = Math?.max(...DataPointValues)
    // console.log("Maximum Value ============> ",MaximumValue)
    if(MaximumValue===undefined || MaximumValue===0){
        MaximumValue = 1
    }
    return <div className="chart">
        {props?.DataPoints?.map(DataPoint=> {
                return <ChartBar 
                    key = {DataPoint?.label}
                    value = {DataPoint?.value} 
                    maxValue = {MaximumValue}
                    label = {DataPoint?.label}

                />})}
    </div>
}
