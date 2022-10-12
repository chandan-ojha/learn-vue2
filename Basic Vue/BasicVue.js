/* For Declarative Rendering*/
var app2 = new Vue({
    el : '#app',
    data: {
        title : "Hello World"
    }
})

/*For Conditionals Statement*/
var app3 = new Vue({
    el:'#app-3',
    data: {
        seen : true
    }
})

/*For Loops*/
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

/*For Handling User Input*/
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }

})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Write Something..!'
    }
})
