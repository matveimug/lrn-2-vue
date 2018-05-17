new Vue({
    el: '#exercise',
    data: {
        name: 'madius',
        age: 29,
        nr: 3,
        imgsrc: 'http://fillmurray.com/100/100'
    },
    methods: {
        randomnr: function () {
            this.nr = Math.floor(Math.random()*100);
            return this.nr;
        },
    }
});