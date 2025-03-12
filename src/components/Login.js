import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
} from '@mui/material';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [stage, setStage] = useState('email'); // 'email' or 'otp'
    const [email, setEmail] = useState(''); // Store the email

    // Placeholder for sending OTP (replace with actual API call later)
    const handleSendOTP = async (data) => {
        console.log('Sending OTP to:', data.email);
        setEmail(data.email); // Store email
        setStage('otp'); // Move to OTP stage
    };

    // Placeholder for verifying OTP (replace with actual API call later)
    const handleVerifyOTP = async (data) => {
        console.log('Verifying OTP:', data.otp, 'for email:', email);
        // Simulate successful login
        alert('Login Successful!'); // Replace with actual navigation
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                {stage === 'email' && (
                    <Box component="form" onSubmit={handleSubmit(handleSendOTP)} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send OTP
                        </Button>
                    </Box>
                )}
                {stage === 'otp' && (
                    <Box component="form" onSubmit={handleSubmit(handleVerifyOTP)} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="otp"
                            label="OTP"
                            name="otp"
                            autoFocus
                            {...register('otp', {
                                required: 'OTP is required',
                                pattern: {
                                    value: /^[0-9]{6}$/, // Assuming 6-digit OTP
                                    message: 'Invalid OTP format',
                                },
                            })}
                            error={!!errors.otp}
                            helperText={errors.otp?.message}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify OTP
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Login;