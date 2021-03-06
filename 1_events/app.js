new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function (step, event) {
            this.counter += step;
        },
        updateCoords: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            event.stopPropagation();
        },
        alertme: function () {
            alert('alert!')
        }
    }
});