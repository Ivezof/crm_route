<template>
    <table class="default__table">
        <tr>
            <th v-for="label in labels" :key="label.name" :class="label.filtered ? 'filtered' : ''">{{ label.name }}</th>
            <th v-if="delBtns"></th>
        </tr>
        
        <tr v-for="el in dataForTable" :key="el.id">
            <td v-for="db in databases" :key="db">{{ db == 'status' ? statuses[el[db]] : el[db]}}</td>
            <td v-if="delBtns" class="del-btn" @click="deleteElem(el.id)"><img src="../img/delete.svg" alt=""></td>
        </tr>
    </table>
    <div class="pagination">
        <div class="item-on-page">
            <p class="pagination-text">Показывать на странице:</p>
            <div class="divider"></div>
            <select name="items-on-page" id="items-on-page" v-model="itemVariant.value" class="items-on-page">
                <option v-for="(itemVariant) in itemsVariants" v-bind:value="itemVariant" :selected="itemVariant === '10'" v-bind:key="itemVariant">{{ itemVariant }}</option>
            </select>
            <div class="divider"></div>
            <p class="all-items-text">{{ ((pagesVariant.value - 1) * itemVariant.value) == 0 ? 1: (pagesVariant.value - 1) * itemVariant.value }} - {{ pagesVariant.value * itemVariant.value }} элементов</p>
        </div>
        <div class="pages">
            <div class="divider"></div>
            <select name="pages" id="pages" v-model="pagesVariant.value" class="select-pages">
                <option v-for="index in pageLast" :key="index" :value="index">{{ index }}</option>
            </select>
            <p class="all-pages-text">из {{ pageLast }} страниц</p>
            <div class="divider"></div>
            <div class="left__btn pagination__btn" :class="pagesVariant.value == 1 ? 'disabled-btn': ''" @click="pagesVariant.value != 1 ? pagesVariant.value--:''">
                <img src="../img/right_arrow.svg" alt="">
            </div>
            <div class="divider"></div>
            <div class="right__btn pagination__btn" :class="pagesVariant.value == pageLast ? 'disabled-btn': ''" @click="pagesVariant.value != pageLast ? pagesVariant.value++:''">
                <img src="../img/right_arrow.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import {getOrders, getClient, getClients, getOrdersClient, deleteElem} from "@/js/modules/requests_db"
    const statuses = {
        1: "В работе",
        2: "Закончено"
    }
    export default {
        name: 'TableCompDynamic',
        props: {
            labels: Array,
            databases: Array,
            typeTable: String,
            filter: {
                type: String,
                default: ''
            },
            delBtns: Boolean
        },  
        data() {
            return {
                dataForTable: [],
                statuses,
                typeTableInp: this.typeTable,
                isMounted: false,
                itemsVariants: [3, 4, 5, 7, 10, 15, 20],
                itemsOnPage: null,
                itemVariant: {
                    value: 10
                },
                pagesVariant: {
                    value: 1
                },
                pageLast: 1
            }
        },
        watch: {
            async filter() {
                await this.renderTable();
            },
            itemVariant: {
                async handler() {
                    this.pagesVariant.value = 1;
                    await this.renderTable();
                },
                deep: true
            },
            pagesVariant: {
                async handler() {
                    await this.renderTable();
                },
                deep: true
            }
        },
        methods: {
            async getUser(id) {
                const user_order = await getClient(id);
                return user_order.phone;
            },
            calcProfit(orders) {
                let profit = 0;
                orders.forEach(order => {
                    profit += order.sum;
                });
                return profit;
            },
            async selectedChangePage() {
                console.log(this.itemVariant.value);
                await this.renderTable();
            }, 
            async deleteElem(id) {
                const result = await deleteElem(id, 'clients');
                console.log(result);
                if (result) {
                    this.$notify({
                        type: 'success',
                        text: "Клиент удален"
                    })
                    this.renderTable();
                } else {
                    this.$notify({
                        type: 'error',
                        text: "Возникла непредвиденная ошибка"
                    })
                }
            },
            async renderTable() {
                this.dataForTable = [];
                switch (this.typeTableInp) {
                    case "homeTable": {
                        const orders = await getOrders(5);
                        console.log(orders);
                        orders.forEach(async el =>{
                            el['phone'] = await this.getUser(el.client_id);
                            this.dataForTable.push(el)
                        })
                        break;
                    }
                    case "clientsTable": {
                        console.log(this.filter);
                        const {clients, pagination} = await getClients(this.itemVariant.value, this.filter, this.pagesVariant.value);
                        console.log(clients);
                        console.log(pagination.next);
                        this.pageLast = pagination.last;
                        
                        clients.forEach(async el => {
                            const orders_client = await getOrdersClient(el.id);
                            el['totalProfit'] = this.calcProfit(orders_client);
                            el['totalOrders'] = orders_client.length;
                            this.dataForTable.push(el);
                        });
                        break;
                    }
                        
                    default:
                        break;
                }
            },
        },
        
        async mounted() {
            await this.renderTable();
            this.isMounted = true;            
        }
    }
</script>


<style>
    .default__table {
    border-spacing: 0px;
    border-collapse: collapse;
    width: 100%;
}

.default__table th {
    background-color: #C7DFF4;
    white-space: nowrap;
    
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
.filtered {
    cursor: pointer;
}

.pagination, .items-on-page {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.item-on-page {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: white;
    text-shadow: none;
}

.item-on-page option {
    background-color: white;
}

.pages {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.divider {
    width: 1px;
    align-self: stretch;
    background: var(--border-border-subtle-01, #E0E0E0);
}

.pagination-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.16px;
    margin-right: 2px;
}

.items-on-page {
    margin-right: 16px;
    margin-left: 16px;
    border: none;
    outline: none;
}

.select-pages {
    margin-right: 10px;
    margin-left: 16px;
    border: none;
    outline: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.16px;
}

.all-pages-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 540;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.16px;
    margin-right: 16px;
    color: var(--text-text-primary, #161616);
}

.all-items-text {
    color: var(--text-text-secondary, #525252);
    margin-left: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.16px;
}

.pagination__btn {
    display: flex;
    padding: 16px;
    cursor: pointer;
    align-items: center;
}

.disabled-btn {
    cursor: default;
    opacity: 0.5;
}

.left__btn {
    transform: rotate(180deg);
}

.del-btn {
    cursor: pointer;
}
</style>