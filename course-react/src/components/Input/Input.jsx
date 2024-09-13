
//essa é uma outra forma de começar um codigo jsx na função, ao invez de declarar o export no final dela, declara junto com a função

//propdrilling é quando você pega um estado ou uma função de um pai e passa para o filho
import PropTypes from 'prop-types'
import './Input.css'

export default function Input(props){

  return(
    <div className="input-container">
      <label htmlFor="">{props.label}: {props.inputValue}</label>
      <input
       type={props.type}
       placeholder={props.placeholder}
       required={props.required} 
       onChange = {props.onChange}
      />
    </div>
  )

}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}