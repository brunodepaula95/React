import Student from './Student.jsx'
//quando for colocar numero sempre colocar dentro de {}


function App() {
    return(
      <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={40} isStudent={true}/>
        <Student name="Sandy" age={50} isStudent={true}/>
      </>
    );
}

export default App
