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
        fullName : function (){
            return this.firstName +' '+this.lastName
        }
    }
})