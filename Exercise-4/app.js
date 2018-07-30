new Vue({
    el: '#exercise',
    data: {
        isHighlighted: false,
        primaryColor: true,
        divClass: '',
        isActive: '',
        activeClass: '',
        divWidth: 200,
        barHeight: 50,
        barColor: 'limegreen',
        barProgress: 0
    },
    computed: {
        inEffect: function() {
            return {
                highlight: this.isHighlighted,
                shrink: !this.isHighlighted
            }
        },
        newWidth: function() {
            return {
                width: this.divWidth + 'px'
            }
        },
        barStyle: function() {
            return {
                height: this.barHeight,
                backgroundColor: this.barColor,
                width: this.barProgress
            }
        }
    },
    methods: {
        startEffect: function() {
            isHighlighted = true;
            setInterval(() => {
                this.isHighlighted = !this.isHighlighted
        }, 1000)
        },
        startProgress: function() {
            this.barProgress = 0;
            var progress = setInterval(() => {
                this.barProgress = this.barProgress+Math.random()*30;
            if (this.barProgress > 200) {
                clearInterval(progress)
            }
        }, 1000)
        }
    }
});