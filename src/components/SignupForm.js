
const SignupForm = () => {   
    return (
    <form>
        <div>
            <input name="userName" placeholder="name"></input>
            <input name="userLast" placeholder="lastname"></input>
            <input name="userEmail" placeholder="email"></input>
            <input type="password" name="password" placeholder="password"></input>
            <button type="submit">Signup</button>
        </div>
    </form>
    )
}

export default SignupForm;