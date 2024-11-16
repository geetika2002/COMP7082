const LoginForm = () => {
    
    return (
    <form>
        <div>
            <input name="userEmail" placeholder="email"></input>
            <input type="password" name="password" placeholder="password"></input>
            <button type="submit">Login</button>
        </div>
    </form>
    )
}

export default LoginForm;