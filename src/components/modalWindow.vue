<template>
    <transition name="modal">
        <div v-if="show" class="modal-shadow" @click.self="closeModal">
            <div class="modal">
                <div class="popup-header">
                    <slot name="title">
                        <p class="default__text title-modal__text">Заголовок</p>
                    </slot>
                    <img src="../img/close.svg" alt="" class="close-btn" @click="closeModal">
                </div>
                <form @submit.prevent="subSend">
                    <slot name="body">
                        <div class="modal-content">
                            Дефолтный контент модального окна
                        </div>
                    </slot>
                    <slot name="footer">
                        <div class="modal-footer">
                            <button class="footer-modal__btn cansel-btn" @click="closeModal">Отмена</button>
                            <input type="submit" value="Добавить" class="footer-modal__btn send-btn">
                        </div>
                    </slot>
                </form>
            </div>
        </div>
    </transition>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            },
            subSend: function(e) {
                this.$emit('submitForm', e);
            }
        }
    }
</script>
 
<style scoped
       lang="scss">

    .title {
        
    }

    .close-btn {
        cursor: pointer;
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
    }
    .popup-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        min-width: 649px;
    }


    .modal-shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    }
    .modal-enter-active, .modal-leave-active {
        transition: opacity 0.5s
    }
 
    .modal-enter, .modal-leave-to {
        opacity: 0;
        
    }
    .modal {
        background: #fff;
        border-radius: 8px;
        min-width: 420px;
        max-width: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        min-width: 650px;
 
        &-title {
            color: #0971c7;
        }
 
        &-content {
            margin-bottom: 20px
        }
    }

    .footer-modal__btn {
        border-radius: 33px;
        
        font-family: 'Inter';
        font-size: 20px;
        font-style: normal;
        font-weight: 400px;
        line-height: normal; 
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 45px;
        padding-right: 45px;
        
        cursor: pointer;
    }
    .modal-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 80px;
        margin-right: 80px;
        margin-top: 70px;
        margin-bottom: 40px;
    }

    .cansel-btn {
        border: 1px solid #4D4D4F;
        color: #4D4D4F;
        background-color: white;
    }

    .send-btn {
        background: #0091D0;
        color: white;
        border: none;
    }
</style>