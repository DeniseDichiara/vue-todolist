const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: 'Fare workout',
                    done: false/true
                },
                {
                    text: 'Rivedere codice'
                },
                {
                    text: 'Ripassare Vanilla (NON quella per dolci...)'
                },
                {
                    text: 'Sistemare Portfolio GitHub'
                },
                {
                    text: 'Dormire ALMENO 7h'
                },
                {
                    text: 'Fare meditazione'
                },
                {
                    text: 'Prendere tisana prima di fare codice'
                },
                {
                    text: 'Prendere tisana dopo aver fatto codice'
                },
            ],
            newElement : {text: ''},
        }
    },
    methods: {
        addNewTodoElement(todoElement){
            if (this.newElement.text !== ''){
                this.todoList.push(todoElement);
                this.newElement = {text: ''};
            }
        },

        removeTodoElement(todoElementIndex){
            if(todoElementIndex >=this.todoList.lenght || todoElementIndex < 0){
            } else{
                alert('Do you really wont to delete this row?');
                this.todoList.splice(todoElementIndex, 1)
            }
        },

        strikethroughElement(doneActivity){

            //* (this.todolist.done === true){allora barra il testo}
            if (doneActivity === true){
            } else{
                const isContentShown = ref(false)
                const open = () => (isContentShown.done = true)
            }
        }
    },

}).mount('#app');