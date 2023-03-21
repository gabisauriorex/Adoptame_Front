






import React from 'react'

export default function FormLogin() {
  return (
    <div>
       <h2>Form Login</h2>
    </div>
  )
}









/* 








import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Button, Typography } from "@mui/material";

import { Box } from "@mui/system";
import PasswordInput from "./input/PasswordInput";
import { Alert } from "@mui/material";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";

import EmailInput from "./input/EmailInput";
import { loginUser } from "../../../Redux/Thunks/loginUsers";

function FormLogin({ handleChange, handleBlur, handleSubmits, form, errors }) {
  const mode = useSelector((store) => store.theme.mode);
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const clientId =
    "797157267486-rvkpojtcmll1q3n7slbtu09fe4heo7ol.apps.googleusercontent.com";
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const responseGooglesuccess = (response) => {
    const Token = response.accessToken;
    const formGoogle = {};
    formGoogle.firstName = response.profileObj.givenName;
    formGoogle.lastName = response.profileObj.familyName;
    formGoogle.userName =
      response.profileObj.givenName + response.profileObj.familyName + Token;
    formGoogle.email = response.profileObj.email;
    formGoogle.avatar = response.profileObj.imageUrl;
    formGoogle.password = response.Ca;
    formGoogle.country = "Google";
    formGoogle.birthday = "1998-01-01";
    dispatch(loginUser("google", formGoogle, Token));
  };
  const responseGoogleFailure = (response) => {
    console.log(response);
  };
  return (
    <Box className="Form">
      <Typography
        component="h2"
        fontSize="20px"
        sx={{ color: theme[mode].textPrimary, padding: "20px" }}
      >
        Acceder
      </Typography>
      <EmailInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmits={handleSubmits}
        form={form}
        error={errors.email !== undefined}
      />
      {errors.email !== undefined ? (
        <Alert severity="error" sx={{ margin: "10px 0" }}>
          {errors.email}
        </Alert>
      ) : null}
      <PasswordInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmits={handleSubmits}
        form={form}
        error={errors.password !== undefined}
      />
      {errors.password !== undefined ? (
        <Alert severity="error" sx={{ margin: "150x 0" }}>
          {errors.password}
        </Alert>
      ) : null}

      <Box
        sx={{ margin: "5px 0" }}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="secondary"
          className="Form-button login-button"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
          onClick={handleSubmits}
        >
          Acceder
        </Button>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGooglesuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Box>
    </Box>
  );
}

export default FormLogin;







*/