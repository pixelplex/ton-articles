import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { retrieveLaunchParams } from '@tma.js/sdk-react';
import styles from './styles.module.scss';

type GetMeResponse = {
  tgUserId: string,
  createdAt: string,
  clicks: number
}

const Main = () => {
  const [count, setCount] = useState(0);
  const { initDataRaw } = retrieveLaunchParams();

  const handleClick = async () => {
    try {
      await fetch('http://localhost:3000/api/v1/click', {
        method: 'POST',
        headers: {
          'tg-init-data': initDataRaw || ''
        }
      })
      setCount(count => count + 1);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/me', {
      method: 'GET',
      headers: {
        'tg-init-data': initDataRaw || ''
      }
    }).then(response => response.json())
      .then((data: GetMeResponse) => setCount(data.clicks))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.count}>
          {count}
        </div>
        <Button onClick={handleClick}>
          <img
            src="src/assets/images/vupa-jetton.png"
            alt="button"
            draggable="false"
          />
        </Button>
      </div>
    </div>
  );
};

export default Main;
