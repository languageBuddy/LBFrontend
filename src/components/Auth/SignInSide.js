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
  ThemeProvider
} from '@mui/material'
import GoogleButton from 'react-google-button'
import { Link as Rlink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import LoginImg from '../../assets/img/Auth/loginImage.svg'

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const SignInWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((userCredential) => {
      localStorage.setItem('token', userCredential._tokenResponse.idToken);
      history.push('/dashboard')
    })
    .catch(e => alert(e.message))
    .finally(() => setLoading(false))

  }
  const onLogin = () => {
    setLoading(true)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token', userCredential._tokenResponse.idToken);
        if(auth.currentUser.emailVerified){history.push('/dashboard')}
        else {alert(`Your email is not verfied. Please check inbox of your email: ${email} for verification before proceeding forward.`);
        auth.signOut();}
      })
      .catch(e => alert(e.message))
      .finally(() => setLoading(false))
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
            backgroundImage: `url(${LoginImg})`,
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
              Welcome back!
            </Typography>
            <GoogleButton style={{ marginTop: "15px" }}
              onClick={() => { SignInWithGoogle(); }}
            />

            <Typography component="h6" style={{ marginTop: "15px" }}>
              Or
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onLogin}
              >
                {loading ? 'Logging you in ...' : 'Login'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Rlink to="/register">
                    <Link variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Rlink>
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

export default Login;
