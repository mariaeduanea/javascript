//adicionando a variavel formulario o id dele
const formulario = document.getElementById('formulario') as HTMLElement


formulario.addEventListener('submit',(event) =>{
    event.preventDefault()
    //recebendo os dados do campo nome
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    
    //recebendo os dados do campo telefone
    const telefone =(document.getElementById('telefone') as HTMLInputElement).value;
    
    //recebendo os dados do campo data de nascimento
    const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
    
    //recebendo os dados do campo email
    const email = (document.getElementById('email') as HTMLInputElement).value;
    
    //recebendo os dados do campo cpf
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    
    console.log(nome)
    console.log(telefone)
    console.log(dataNascimento)
    console.log(email)
    console.log(cpf)



});


