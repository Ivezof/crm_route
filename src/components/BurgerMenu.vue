<template>
    <div class="right__menu" id="right-menu">
        <div class="burger__icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="menu__items">
            <router-link to="/" class="panel menu__item">
                <img src="../img/panel_logo.svg" alt="Panel" class="panel__icon">
                <p class="panel__text menu__text">Панель</p>
            </router-link>
            <router-link to="/clients" class="client menu__item">
                <img src="../img/clients_logo.svg" alt="Clients" class="panel__icon">
                <p class="client__text menu__text">Клиенты</p>
            </router-link>
            <router-link to="/payments"  class="payment menu__item">
                <img src="../img/payments_logo.svg" alt="Payments" class="panel__icon">
                <p class="payment__text menu__text">Платежи</p>
            </router-link>
            <router-link to="/orders" class="order menu__item">
                <img src="../img/orders_logo.svg" alt="Orders" class="panel__icon">
                <p class="order__text menu__text">Заказы</p>
            </router-link>
            <router-link to="/workers" class="worker menu__item">
                <img src="../img/workers_logo.svg" alt="Workers" class="panel__icon">
                <p class="worker__text menu__text">Сотрудники</p>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    "name": 'burger-menu'
}

</script>

<style>

.router-link-active {
    background-color: #00467F;
    max-width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 15px;
}

.right__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
}

.menu__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding-left: 15px;
    text-decoration: none;
}


.menu__items {
    display: flex;
    flex-direction: column;
    gap: 40px;
    
}


.menu__text {
    font-family: 'Open Sans';
    font-weight: bold;
    color: #6CB5EA;
    font-size: 32px;
}

.burger__icon {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.line {
    background-color: #6CB5EA;
    width: 68px;
    height: 4px;
    border-radius: 10px;
}
</style>