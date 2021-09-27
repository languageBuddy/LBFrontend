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

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleButton from 'react-google-button'
import { Link as RLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import RegisterImg from '../../assets/img/Auth/registerImage.svg'

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          .then(() => history.push('/login'))
          .catch((e) => alert(e.message))
      }).catch((e) => alert(e.message))
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome!
            </Typography>
            <GoogleButton style={{ marginTop: "15px" }}
              onClick={() => { console.log('Google button clicked') }}
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
                label="Email Address"
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
                label="Password"
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
