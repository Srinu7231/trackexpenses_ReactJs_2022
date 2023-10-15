import "./Chart.css"

export const ChartBar = (props) => {
    let BarfillHeight = 0
    if (props.value > 0) {
        BarfillHeight = Math.round(props.value * 100 / props.maxValue) + "%";
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{ height: BarfillHeight }}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}