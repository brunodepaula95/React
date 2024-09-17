import React, {useState, useEffect} from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);//aqui você carrega um array com usuarios, e utiliza o useState já que havera uma mudança neste array
  const [loading, setLoading] = useState(true);//Esse loading, enquando ele não carrega a lista, ele mostra o loading.

  //o get utilizado abaixo, é uma das rotas para se utilizar na busca de dados
  //o user no final do link, é o endpoint, ou seja, o que esta sendo buscado
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')//estamos pegando os usuarios deta url
    .then((response) => {
      setUsers(response.data);
      setLoading(false);
    })
    .catch((error) => {//se ele apresentar algum erro
      console.log(error);
      setLoading(false);
    })
  }, []);//passando esse array vazio, o useeffect, sempre vai fazer o loop ouvindo o array que foi carregado os usuarios


    //abaixo vamos montar o loading
    if(loading) {
      return <div>Carregando...</div>
    }

  return(
    <div>

      <h1>Lista de usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </div>
  )

}

export default UserList;