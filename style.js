const { createApp } = Vue

createApp({
    data() {
        return {
            cardNumber1: "",
            cardNumber2: "",
            cardNumber3: "",
            cardNumber4: "",
            firstName: "",
            lastName: "",
            year: "",
            month: "",
            cvc: "",
        }
    },
    methods: {
        moveToNext(ev, next) {
            if (ev.target.value.length === ev.target.maxLength) {
                this.$refs[next].focus()
            }
        }
    }
}).mount("#app")