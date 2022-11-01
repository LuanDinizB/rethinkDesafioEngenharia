import './style.css';
import React, {useState} from 'react';

const Input = ({tipo, titulo, input}) => {

    // Usando apenas um useState para todos os valores já que
    // só é necessário exibir/inserir os valores

    const [value, setValue] = useState(input);

    function handleChange(e){
        setValue(e.target.value);
        console.log(e.target.value);
    }
    
    return(      
      <div className="inputArea">
        <b>{titulo}</b>
        <input name={tipo} type={tipo} placeholder={titulo} value={value} onChange={(e)=>{handleChange(e)}}></input>        
      </div>    
    )
}

const Form =() =>{  


    return (
        <div className="form">
          <div className="head">
            <h2>Formulário de inscrição</h2>
          </div>
          <div className="body">
            <Input tipo='text' titulo='Nome:' input='Gabriel Gomes'/>
            <Input tipo='number' titulo='Idade:' input='25'/>
            <Input tipo='text' titulo='Profissão:' input='Programador'/>
            <Input tipo='email' titulo='Email:' input=' programador@rethink.dev'/>
            <Input tipo='text' titulo='Telefone:' input='(31) 9 9999-9999'/>
            <Input tipo='date' titulo='Data de Preenchimento:' input='2022-10-19'/>
          </div>
        </div>
      );
}

export default Form;

