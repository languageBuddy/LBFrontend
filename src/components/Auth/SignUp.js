import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  TextField,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  Alert,
  AlertTitle,
  ThemeProvider
} from '@mui/material'

import GoogleButton from 'react-google-button'
import { Link as RLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth';

import RegisterImg from '../../assets/img/Auth/registerImage.svg'

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setmessage] = useState("")


  const actionCodeSettings = {
    url: 'http://localhost:3000/login',
    // This must be true.
    handleCodeInApp: true,
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/dashboard')
    }
  }, [])

  const onSignup = () => {
    setLoading(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            sendEmailVerification(auth.currentUser, actionCodeSettings)
              .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
              })
              .catch(e => setmessage(e.message))
              .finally(() => isSent(true))
            auth.signOut();
          })
          .catch((e) => setmessage(e.message))
        history.push('/verify');
      }).catch((e) => setmessage(e.message))
      .finally(() => setLoading(false))
  }

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        updateProfile(auth.currentUser, { displayName: credential.name })
          .then(() => history.push('/login'))
          .catch((e) => alert(e.message))
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(error.message);
        // ...
      }).finally(() => setLoading(false));

  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/languageBuddy/LBFrontend.git" target="_blank">
          LanguageBuddy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${RegisterImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main', width: 100, height: 100 }} >
              <img src="/logo_30.png" className="img-fluid w-100" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome!
            </Typography>
            <GoogleButton label='Sign up with Google' style={{ marginTop: "15px" }}
              onClick={() => { SignInWithGoogle() }}
            />

            <Typography component="h6" style={{ marginTop: "15px" }}>
              Or
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                placeholder="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={e => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {
                message.length > 0 &&
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong> {message}</strong>
                </Alert>
              }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSignup}
              >
                {loading ? 'Creating user ...' : 'Signup'}
              </Button>
              <Grid container>
                <Grid item>
                  <RLink to="/login">
                    <Link variant="body2">
                      {"Sign In"}
                    </Link>
                  </RLink>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Signup;
