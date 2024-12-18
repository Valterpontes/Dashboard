import { Container, Form } from "./style"
import { useState } from "react"
import { useAuth } from "../../Hooks/auth"
import { FiLogIn, FiMail, FiLock} from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../Components/Input/index"
import { Button } from "../../Components/Button/index"

export function SignIn() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>

                <img src="src\Assets\Logo_Sidney.png" width={180} alt="" />
                {/* <h1>SmartSync</h1> */}
                <p>Automação de Universidades e empresas</p>

                <h2>Faça seu login</h2>

                <Input  
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                    />

                <Input  
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSignIn}
                />
                
                <Link to="/register">
                    Criar conta
                </Link>

            </Form>

            {/* <Background/> */}
        </Container>
    )
}