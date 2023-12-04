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
  <notifications classes="my-notify" position="bottom right" />
</template>

<script>
import Header from './components/Header.vue';
import BurgerMenu from './components/BurgerMenu.vue';
export default {
  components: {
    Header,
    BurgerMenu
  }
}
</script>


<style lang="scss">
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
    font-weight: 700;
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

#chart__profit {
    width: 1000px;
}

.header {
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.25);
}



.my-notify {
 /*...*/
  margin: 0 15px 40px;
  font-size: 28px;
  color: #ffffff;
  padding: 10px;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
</style>
