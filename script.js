const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: 'Fare workout'
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
            ]
        }
    }
}).mount('#app')