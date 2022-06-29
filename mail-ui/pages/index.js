import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import Typed from 'react-typed';

export default function Home() {
  const bannerStrings = ["Get daily tips 🚀", "Get important information from us ✨"];
  const [mail, setMail] = useState('');

  const onMailChange = (e) => {
    setMail(e.target.value);
    //onSetValue(e, e.target.value)
  };

  const handleSubmit = () => {
    console.log(mail);
    setMail('');
  }

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
            width: 450
          }}
        />

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
  )
}
