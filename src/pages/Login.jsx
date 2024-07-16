import '../App.css'

const Login = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' placeholder='Enter username...'/>
        <label>Password</label>
        <input type='password' placeholder='Enter password...'/>
      </form>
      log 
    </div>
  )
}

export default Login
