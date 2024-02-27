import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>404</h1>
      <p>
        Oops, page could not been found. Please use the button to return to the
        home page.
      </p>

      <Button onClick={() => navigate('/')} text='Home' />
    </>
  );
}
