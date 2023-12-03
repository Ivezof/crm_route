<template>
    <div class="content">
        <div class="header__content">
            <a class="logo" href="/">
                <img src="../img/logo.svg" alt="Logo" class="logo__img">
                <p class="logo__text">ЦГЭС</p>
            </a>
            <div class="exit" id="exit__btn">
                <p class="exit__btn">Выйти</p>
                <img src="../img/exit.svg" alt="exit" class="exit__svg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    "name": 'HeaderMenu'
}
</script>

<style>


.header__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
}

.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    text-decoration: none ;
}

.logo__text {
    padding-top: 10px;
    letter-spacing: 7px;
    font-family: 'Crewniverse Font V6';
    font-size: 64px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, rgba(117,183,231,1) 0%, rgba(0,139,240,1) 100%);
}

.name__text {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 32px;
    color: #236898;
}

.exit {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
}

.exit__btn {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 32px;
    color: #6CB5EA;
}
</style>