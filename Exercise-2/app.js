new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function () {
            alert(this.value)
        },
        keyData: function (event) {
            this.value = event.target.value;
        }
    }
});