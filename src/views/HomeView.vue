<template>
  <div class="info__content">
      <div class="info">
          <p class="default__text profit__text">Прибыль компании за последний год</p>
          <div class="chart">
              <canvas id="chart__profit"></canvas>
          </div>
          <p class="default__text last_orders__text">Последние заказы</p>
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
          </table>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView'
}
</script>
