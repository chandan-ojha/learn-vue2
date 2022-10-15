var vm = new Vue({
    el: '#demo',
    data: {
        firstName : 'Chandan',
        lastName : 'Ojha',
        /*fullName : 'Chandan Ojha'*/
    },
    /*watch: {
        firstName: function (val){
            this.fullName = val + ' '+ this.lastName
        },
        lastName: function (val){
            this.fullName = this.firstName + ' '+val
        }
    }*/
    computed: {
        /*fullName : function (){
            return this.firstName +' '+this.lastName
        }*/
        fullName : {
            //getter
            get: function (){
                return this.firstName+ ' ' + this.lastName
            },
            //setter
            set: function (newValue){
                var names = newValue.split(' ')
                //console.log(names)
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

/*For Watchers*/
var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
})
