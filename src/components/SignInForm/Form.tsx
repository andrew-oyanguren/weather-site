import { FormEvent } from 'react';

export default function SignInForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('[handleSubmit] form submitted...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <div className='inputWrapper'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' placeholder='Enter your email' />
        </div>

        <div className='inputWrapper'>
          <label htmlFor='password'>Email</label>
          <input id='password' type='password' placeholder='*******' />
        </div>
      </div>

      <div className='actions'>
        <button>Sign In</button>
      </div>
    </form>
  );
}
