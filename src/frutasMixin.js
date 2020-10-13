export default {
    data(){
        return {
            item: '',
            lista: ['']
        }
    },
    methods: {
        add(){
            this.lista.push(this.item)
            this.item = ''
        },
        removerItem(indice){
            this.lista.splice(indice, 1)
        }
    }
}