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
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import LoginImg from '../../assets/img/Auth/loginImage.svg'
import FavoriteIcon from '@material-ui/icons/Favorite';

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, isSent] = useState(false);

  const actionCodeSettings = {
    url: 'http://localhost:3000/login',
    // This must be true.
    handleCodeInApp: true,
  };

  const reset = () => {
    isSent(false);
    const auth = getAuth();
    sendPasswordResetEmail(auth, email, actionCodeSettings)
    .then(() => {
        isSent(true);
        alert(`Password reset instructions sent to your email: ${email}. Check your inbox to reset your account password.`)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error Code: ${errorCode}\nMessage: ${errorMessage}`);
    })
    .finally(()=>isSent(true));
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <strong> Made with <FavoriteIcon style={{ fontSize: 20 }} color="secondary"/> by Language Buddy Team</strong>
      </Typography>
    );
  }

  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email')
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
              Password Reset
            </Typography>

            <Typography component="h6" style={{ marginTop: "15px" }}>
              Enter Your Registered Email Id
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={reset}
              >
                {sent ? 'Sent Password Reset Email' : 'Reset'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    Sign In
                  </Link>
                </Grid>
                <Grid item>
                  <Rlink to="/register">
                    <Link variant="body2">
                      {"Sign Up"}
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

export default ForgotPassword;


