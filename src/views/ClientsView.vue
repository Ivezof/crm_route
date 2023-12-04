<template>
  <div class="clients__main">
    <div class="page__header">
    <div class="page__name">
      <p class="default__text">Клиенты</p>
    </div>
    <div class="interface">
      <div class="search">
        <img src="../img/search.svg" alt="search">
        <input type="text" placeholder="Введите запрос" class="search_input" v-model="searchQuery">
      </div>
      <div class="add__btn"  @click="showModal">+ Добавить клиента</div>
    </div>
  </div>
  <div class="table__center">
    <TableCompDynamic delBtns="true" :pagination=true :filter="filterValue" typeTable="clientsTable" :databases="['id', 'name', 'totalOrders', 'totalProfit', 'phone']" :labels="[{'name': 'ID Клиента', 'filtered': true}, {'name': 'ФИО', 'filtred': false}, {'name': 'Всего заказов', 'filtered': true}, {'name': 'Прибыль ', 'filtered': true}, {'name': 'Контакты', 'filtered': false}]"></TableCompDynamic>
  </div>
  <!-- Создание модального окна на странице клиенты -->
  <ModalWindow ref="modalTwo" @submitForm="submitForm">
    <!-- Перезапись title у модального окна на свое -->
      <template v-slot:title>
          <p class="default__text title-modal__text">Новый клиент</p>
      </template>
      <!-- Создание своих полей в компоненте модального окна -->
      <template v-slot:body>
          <div class="main-content__popup">
            <p class="popup-title">Информация о клиенте</p>
            <div class="input-popup__block">
              <label for="fio">ФИО клиента</label>
              <!-- Если ошибка в валидации то добавляется класс error, а уже css отрисовывает ошибку -->
              <input type="text" name="fio" class="popup-input" v-model="fio" v-bind:class="fioError ? 'error': ''">
              <span v-if="fioError" class="error_msg">Неправильно заполненно поле</span>
            </div>
            <div class="input-popup__block">
              <label for="phone">Номер телефона</label>
              <!-- Если ошибка в валидации то добавляется класс error, а уже css отрисовывает ошибку -->
              <input type="text" name="phone" class="popup-input" v-model="phone" v-bind:class="phoneError ? 'error': ''">
              <span v-if="phoneError" class="error_msg">Неправильно заполненно поле</span>
            </div>
            <div class="input-popup__block">
              <label for="email">Email</label>
              <!-- Если ошибка в валидации то добавляется класс error, а уже css отрисовывает ошибку -->
              <input type="text" name="email" class="popup-input" v-model="email" v-bind:class="emailError ? 'error': ''">
              <span v-if="emailError" class="error_msg">Неправильно заполненно поле</span>
            </div>
            <div class="input-popup__block">
              <label for="company-name">Название компании</label>
              <!-- Если ошибка в валидации то добавляется класс error, а уже css отрисовывает ошибку -->
              <input type="text" name="company-name" class="popup-input" v-model="companyName" v-bind:class="companyNameError ? 'error': ''">
              <span v-if="companyNameError" class="error_msg">Неправильно заполненно поле</span>
            </div>
          </div>
      </template>
  </ModalWindow>
  </div>
  
</template>

<script>
import TableCompDynamic from '@/components/TableComponent.vue';
import { reactive } from "vue";
import { addClient } from "../js/modules/requests_db"
import ModalWindow from '@/components/modalWindow.vue';
export default {
  name: "ClientsView",
  components: {
    TableCompDynamic,
    ModalWindow
  },
  data() {
    return {
      searchQuery: '',
      filterValue: reactive(""),
      fio: '',
      phone: '',
      email: '',
      companyName: '',

      fioError: false,
      phoneError: false,
      emailError: false,
      companyNameError: false
    }
  },
  watch: {
    searchQuery: function(val) {
      this.filterValue = val;
    }
  },
  methods: {
    showModal: function() {
      this.$refs.modalTwo.show = true;
    },

    // Функция валидации формы
    submitForm: async function() {
      // Регулярное выражение для почты
      const email_re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      // Регулярное выражение для номера телефона
      const phone_re = /^\+?7[0-9]{10}$/
      if (!email_re.test(this.email)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
      if (!this.fio || this.fio.length > 60) {
        this.fioError = true;
      } else {
        this.fioError = false;
      }
      if (!phone_re.test(this.phone)) {
        this.phoneError = true;
      } else {
        this.phoneError = false;
      }
      if (!this.companyName || this.companyName.length > 100) {
        this.companyNameError = true;
      } else {
        this.companyNameError = false;
      }

      if (!this.fioError && !this.emailError && !this.phoneError && !this.companyNameError) {
        // Если все окей, то отправляем запрос на сервер
        const res = await addClient(JSON.stringify({'name': this.fio, 'phone': this.phone, 'email': this.email, 'companyName': this.companyName}));
        if (res) { // Если код 200 или 2** то выводим уведомление о том, что клиент успешно добавлен
          this.$notify({
            type: "success",
            text: "Клиент добавлен!"
          })
          this.$refs.modalTwo.show = false;
        } else {
          this.$notify({
            type: "error",
            text: "Возникла непредвиденная ошибка..."
          })
        }
      }
    }
  }
}


</script>

<style>

.clients__main {
  width: 100%;
  margin-left: 50px;
}

.input-popup__block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.popup-title {
  color: #000;
  font-family: 'Inter';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.popup-input {
  border-radius: 8px;
  border: 1px solid #64B7FF;
  padding: 6px;
  outline: none;
}

.main-content__popup label {
  color: #525252;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}


.main-content__popup {
  display: flex;
  flex-direction: column;
  gap: 65px;
  max-width: 450px;
  margin: auto;
  margin-top: 70px;
}


.title-modal__text {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 20px;
}

.table__center {
  margin: auto;
  margin-top: 30px;
}

.page__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.interface {
  display: flex;
  flex-direction: row;
  gap:  15px;
}

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  border-radius: 25px;
  border: 1px solid #64B7FF;
  width: 323px;
  height: 35px;
  flex-shrink: 0;
}


.search_input {
  border: none;
  outline: none;
}

.add__btn {
  cursor: pointer;
  border-radius: 20px;
  background: #0091D0;
  height: 35px;
  text-align: center;
  color: white; 
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 20px;
  padding-right: 20px;
}

.error_msg {
  font-size: 14px;
  color: red;
  font-weight: 400;
}

.error {
  border-color: red;
}


</style>