<template>
    <table class="default__table">
        <tr>
            <th class="filtered">ID заказа</th>
            <th>Телефон клиента</th>
            <th class="filtered">Сумма, руб.</th>
            <th class="filtered">Статус</th>
        </tr>
        <tr>
            <td>1</td>
            <td>+7 (987) 654-32-10</td>
            <td>1 299 222</td>
            <td>В работе</td>
        </tr>
        <tr>
            <td>2</td>
            <td>+7 (987) 654-32-10</td>
            <td>1 299 222</td>
            <td>В работе</td>
            
        </tr>
        <tr>
            <td>3</td>
            <td>+7 (987) 654-32-10</td>
            <td>1 299 222</td>
            <td>В работе</td>
        </tr>
        <tr>
            <td>4</td>
            <td>+7 (987) 654-32-10</td>
            <td>1 299 222</td>
            <td>В работе</td>
        </tr>
        {{ tableDataList }}
    </table>
</template>

<script>
    export default {
        name: 'TableComponent',
        data() {
            return {
                tableDataList: {
                    labels: [],
                    data: {},
                }
            }
        },
        methods: {
            getTableData() {
                
            }
        }
    }
</script>


<style>
    .default__table {
    border-spacing: 0px;
    border-collapse: collapse;
}

.default__table th {
    background-color: #C7DFF4;
    white-space: nowrap;
    cursor: pointer;
}

.default__table td, .default__table th {
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Open Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 0.16px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: 0px;
}

.default__table tr {
    border-bottom: 1px solid #E0E0E0;
}


.default__table tr:nth-child(even) {
    background-color: #E6EDF2;
}

.filtered::before {
    content: url('../img/filter.svg');
    margin-right: 15px;
}
</style>