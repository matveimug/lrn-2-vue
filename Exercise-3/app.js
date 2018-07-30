new Vue({
    el: '#exercise',
    data: {
        value: 0,
        time: 5000
    },
    computed: {
        result: function () {
            return this.value >= 37 ? 'done' : 'not there yet';
        }
    },
    watch: {
        value: function () {
            var vm = this;
            // console.log(vm.time)
            setTimeout(function () {
                vm.value = 0;
            }, vm.time)
        }
    }
});