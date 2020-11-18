class ListaConvidados {
    constructor() {
        this.contador = 0
        this.id = 0
        this.editar1 = false
        this.idEditar=''
    }
    adicionar() {


       

        if (document.getElementById("inputConvidado").value == "") {
            alert("Necessário informar o nome")
        } else {


            this.contador = this.contador + 1
            let nome = document.getElementById("inputConvidado").value
            if (this.editar1 == true) {
                document.getElementById(this.idEditar).childNodes[0].innerText = nome
                this.editar1 = false
                this.contador=this.contador-1
            } else {
                let div = document.createElement("div")
                div.classList.add("item-lista")
                div.id = "conv-" + this.id
    
                let span = document.createElement("span")
    
                span.innerText = nome
                let imgDelete = document.createElement("img")
                imgDelete.src = "img/delete.svg"
                imgDelete.setAttribute("onclick", "lista.excluir('" + div.id + "')")
    
    
                let imgEdit = document.createElement("img")
                imgEdit.src = "img/edit.svg"
                imgEdit.setAttribute("onclick", "lista.editar('" + div.id + "')")
    
    
                div.appendChild(span)
                div.appendChild(imgEdit)
                div.appendChild(imgDelete)
    
    
                let lista = document.getElementById("lista")
                lista.appendChild(div)
    
    
            }





            
            document.getElementById("btn-adicionar").innerText="Adicionar"
            document.getElementById("adicionar-convidado").innerText="Adicionar Convidados"

            this.id = this.id + 1
            this.atualizarQuantidade()
            this.limpar()

        }
    }

    atualizarQuantidade() {
        let contador = document.getElementById("contador")
        contador.innerText = this.contador
    }
    limpar() {
        //por enquanto não estou utilizando
        document.getElementById("inputConvidado").value = ""
    }
    excluir(id) {

        if(window.confirm("Deseja realmente Excluir Convidado?")==true){
            let conv = document.getElementById(id)
            let lista = document.getElementById("lista")
            lista.removeChild(conv)
    
            this.contador = this.contador - 1
            this.atualizarQuantidade()
        }
        
    }
    editar(id) {
        this.editar1 = true
        let nome = document.getElementById(id).childNodes[0].innerText

        document.getElementById("inputConvidado").value = nome
        //this.excluir(id)
        this.idEditar=id

        document.getElementById("btn-adicionar").innerText="Alterar"

        document.getElementById("adicionar-convidado").innerText="Alterar Convidados"
       


    }

}

var lista = new ListaConvidados()