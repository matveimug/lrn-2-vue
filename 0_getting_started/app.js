new Vue({
    el: '#app',
    data: {
        title: 'hello world!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">google</a>'
    },
    methods: {
        sayHello: function() {
            this.title = 'hello!';
            return this.title;
        }
    }
});