//quando for utilizar boolen, uma boa pratica para exibir na tela é usar o operador ternario, porque eles não são exibidos no DOM
//quando for trabalhar com props, uma boa pratica é inserir proptypes, para que não haja problemas quando inserir dados
//default.props serve para preencher dados quando não é inserido nenhum dado
import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
//no caso abaixo, quando você inclui mais uma pessoa, mas não passa nenhum dado, ele preenche com o que você colocar
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student