const Login = ({ setData }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target.elements;

        fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => setData(res));
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                email:
                <input type="text" name="email" />
            </label>
            <br />
            <label>
                password:
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>

    )
}

export default Login