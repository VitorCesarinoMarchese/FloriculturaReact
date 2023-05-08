import Navbar from './Navbar'
import Footer from './Footer'
import '../Reset.css'
import '../App.css'

function Login() {
    return (
        <>
            <Navbar/>
            <div className='divlogin'>
                <section className='login'>
                        <h1>Login</h1>
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="password" name="senha" id="senha" placeholder='Senha'/>
                        <button className='LoginBtn'>Login</button>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Login