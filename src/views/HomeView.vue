<template>
  <div class="info__content">
      <div class="info">
          <p class="default__text profit__text">Прибыль компании за последний год</p>
          <div class="chart">
            <keep-alive>
              <canvas id="chart__profit"></canvas>
            </keep-alive>
          </div>
          <p class="default__text last_orders__text">Последние заказы</p>
          <TableCompDynamic typeTable='homeTable' :databases='["id", "phone", "sum", "status"]' :labels='[{"name": "ID Заказа", "filtered": true}, {"name": "Телефон клиента", "filtered": false}, {"name": "Сумма, руб.", "filtered": true}, {"name": "Статус", "filtered": false}]'></TableCompDynamic>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableCompDynamic from '@/components/TableComponent.vue';
import { init_chart } from "@/js/modules/chart_profit.js";
import { getPayments } from "@/js/modules/requests_db.js";

TableCompDynamic.databases = [{"id": 1}, {"id": 1}, {"id": 1}]

export default {
  name: 'HomeView',
  components: TableCompDynamic,
  async mounted() {
    const chart_profit = document.getElementById('chart__profit');
    init_chart(chart_profit, await getPayments())
  }
}
</script>
