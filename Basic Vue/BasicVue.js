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
        seen : false
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