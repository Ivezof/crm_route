<template>
  <header class="header">
    <Header></Header>
  </header>
  <main class="main">
    <div class="content">
      <div class="main__content">
        <BurgerMenu></BurgerMenu>
        <router-view/>
      </div>
    </div>
  </main>
  
</template>

<script>
import Header from './components/Header.vue';
import BurgerMenu from './components/BurgerMenu.vue';
import './js/script.js'
export default {
  components: {
    Header,
    BurgerMenu
  }
}
</script>


<style>
@font-face {
    font-family: 'Crewniverse Font V6';
    src: local('Crewniverse Font V6'),
        url(./fonts/crewniverse_font_V6_0.ttf);
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'),
        url(./fonts/OpenSans.ttf);
}

@font-face {
    font-family: 'Inter';
    src: local('InterTight'), 
        url(./fonts/InterTight-Regular.ttf);
}

@font-face {
    font-family: 'Inter Medium';
    src: local('InterTightMedium'), 
        url(./fonts/InterTight-Medium.ttf);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.content {
    max-width: 1620px;
    margin: auto;
}
.main__content {
    display: flex;
    flex-direction: row;

}
.main {
    margin-top: 40px;
}

.default__text {
    color: #236898;
    font-family: 'Inter Medium';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-left: 110px; */
}

.profit__text {
    margin-bottom: 10px;
}

.last_orders__text {
    margin-top: 60px;
    margin-bottom: 45px ;
}

.info__content {
    width: 100%;
    margin-bottom: 125px;
}

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
    content: url('./img/filter.svg');
    margin-right: 15px;
}

#chart__profit {
    width: 1000px;
}
</style>
