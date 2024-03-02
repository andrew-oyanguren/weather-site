export default function SignInForm() {
  return (
    <form>
      <div className='inputs'>
        <div className='inputWrapper'>
          <p>Error Message</p>
          <input type='email' placeholder='Enter your email' />
        </div>

        <div className='inputWrapper'>
          <p>Error Message</p>
          <input type='password' placeholder='*******' />
        </div>
      </div>

      <div className='actions'>
        <button>Sign In</button>
      </div>
    </form>
  );
}
