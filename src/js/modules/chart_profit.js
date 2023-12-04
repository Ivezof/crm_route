import Chart from 'chart.js/auto';
import moment from 'moment/moment';
import 'chartjs-adapter-moment'
const init_chart = (chart_elem, data) => {

    // Сортировка данных по дате

    const data_sorted = Array.from(new Set(data.map(c => c))).sort((d1, d2) => moment(d1.datetime, 'YYYY-MM-DDTHH:mm:ssZZ').diff(moment(d2.datetime, 'YYYY-MM-DDTHH:mm:ssZZ'))).filter((date) => moment(date.datetime, 'YYYY-MM-DDTHH:mm:ssZZ').isBefore(moment().endOf('year'))).filter((date) => moment(date.datetime, 'YYYY-MM-DDTHH:mm:ssZZ').isAfter(moment().startOf('year')));
    
    // Создание графика
    new Chart(
        chart_elem, {
            // Тип графика
            type: 'bar',
            data: { 
                datasets: [
                    {
                        // Объявляем столбец в диаграмме и передаем данные
                        label: 'Заработок',
                        data: data_sorted,
                        borderWidth: 1
                    },
                ],
            },
            options: {
                parsing: {
                    // Указываем какие данные из data_sorted куда вставлять
                    xAxisKey: 'datetime',
                    yAxisKey: 'sum',
                },
                scales: {
                    xAxis: {

                        beginAtZero: true,
                        // Указываем что X - это временная шкала
                        type: 'time',
                        // Получаем максимальное значение - конец текущего года
                        suggestedMax: moment().endOf('year'),
                        time: {
                            parser: false,
                            format: 'MMM',
                            unit: 'month',
                            tooltipFormat: 'YYYY-MM-DD HH:mm:ss',
                            stepSize: 1,
                            displayFormats: {
                                'month': "MMM"
                            }
                        },
                        // Получаем минимальное значение - начало текущего года
                        min: moment().startOf('year'),
                        // Получаем максимальное значение - конец текущего года
                        max: moment().endOf('year'),
                        
                    }
                }
            }

        }
        
    )

    // const labels = [1, 2, 3, 4, 5, 6, 7]
    // const data_test = {
    //     labels: labels,
    //     datasets: [{
    //         label: 'My First Dataset',
    //         data: [65, 59, 80, 81, 56, 55],
    //         backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //         'rgba(255, 205, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(201, 203, 207, 0.2)'
    //         ],
    //         borderColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(255, 159, 64)',
    //         'rgb(255, 205, 86)',
    //         'rgb(75, 192, 192)',
    //         'rgb(54, 162, 235)',
    //         'rgb(153, 102, 255)',
    //         'rgb(201, 203, 207)'
    //         ],
    //         borderWidth: 1
    //     }]
    // };
    // const chart = new Chart(chart_elem, {
    //     type: 'bar',
    //     data: data_test,
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // })
}

export {init_chart};