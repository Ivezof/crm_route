import { init_chart } from "./modules/chart_profit.js"; 
import data from '../db.json';
window.onload = () => {
    const chart_profit = document.getElementById('chart__profit');
    console.log(data);
    init_chart(chart_profit, data)
}




