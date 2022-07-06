import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {TextField} from '@mui/material';
import Typed from 'react-typed';
import Alert from '@mui/material/Alert';
import {registerUser} from '../controllers/register';

/**
 * Renders the main page of the app.
 * @function Home
 * @return {JSX.Element} The rendered component
 */
export default function Home() {
  const bannerStrings = [
    'Get daily tips 🚀',
    'Get important information from us ✨',
  ];
  const [mail, setMail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertDuplicated, setShowAlertDuplicated] = useState(false);

  const validateMail = (mail) => {
    if (mail.length > 0) {
      const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/;
      return regex.test(mail);
    }
    return false;
  };

  const onMailChange = (e) => {
    const mail = e.target.value.trim();
    setMail(mail.toLowerCase());

    setShowAlert(!validateMail(mail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userMail = {
      email: mail,
    };

    registerUser(userMail, setShowAlertDuplicated);

    setMail('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mail Subscription</title>
        <meta name="description" content="Mail Subscription" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">MailSub!</a>
        </h1>

        <Typed
          strings={bannerStrings}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        < br />

        <TextField
          autoFocus
          value={mail}
          onChange={onMailChange}
          required={true}
          label="Email"
          variant="outlined"
          inputProps={{
            pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
          }}
          style = {{
            width: 450,
          }}
        />
        {
          showAlert &&
          <Alert
            severity='error'
            style={{
              width: 450,
            }}
          >
            The input must be a valid email address!
          </Alert>
        }
        {
          showAlertDuplicated &&
          <Alert
            severity='warning'
            style={{
              width: 450,
            }}
          >
            The email has already been registered!
          </Alert>
        }

        < br/>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Subscribe
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/juanmbriones"
          target="_blank"
          rel="noopener noreferrer"
        >
          Done by{' '}
          <span>
            <b>Juan Manuel Garcia Briones 👾</b>
          </span>
          Click me!
        </a>
      </footer>
    </div>
  );
};
