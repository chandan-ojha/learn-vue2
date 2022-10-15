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