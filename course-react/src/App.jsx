import Header from './Header'
import InputWitText from './InputWithText'

function App() {
    return(
        <>
        <Header hideMenu={true} />
        <Header hideMenu={false} name="Bruno" />
        <InputWitText />
        </>
    )
}

export default App
