import React, { useState } from 'react';
import axios from './Axios';
import validator from 'validator';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
	},
}));

function Register({ setUserID, setUsername, name, email, password, rePassword }) {
	const register = async (e) => {
		e.preventDefault();
		var canRegister = false;
		if(name.length===0) {
			alert("Name is empty!");
		}else if(email.length===0) {
			alert("Email is empty!");
		}else if(validator.isEmail(email)===false) {
			alert("Email does not exist!");
		}else if(password.length===0) {
			alert("Password is empty!");
		}else if(password.length<8) {
			alert("Password should contain at least 8 letters!");
		}else if(password!==rePassword){
			alert("Re-entered password is not same to new password!");
		}else try {
			await axios.post("/findAccount", {
				email: email,
			}).then(res => {
				if(res.data.length===0){
					canRegister = true;
				} else {
					alert("This email has been used for registration. You may register with another email or login.");
				}
			});
			if(canRegister){
				await axios.post("/createAccount", {
					name: name,
					email: email,
					password: password,
					score: 1000,
				}).then(res => {
					setUserID(res.data._id);
					setUsername(res.data.name);
					sessionStorage.setItem('userID', res.data._id);
					sessionStorage.setItem('username', res.data.name);
					alert('Register successfully');
				});
			}
		} catch (error) {
			alert('Internal error');
		}
	};
	return <Button variant="contained" color="primary" onClick={register}>Register</Button>;
}

function LoginWithEmail({ setUserID, setUsername, email, password}) {
	const loginWithEmail = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/findAccount", {
				email: email,
				password: password,
			}).then(res => {
				if(res.data.length===0){
					alert('Invalid email or password');
				} else {
					setUserID(res.data[0]._id);
					setUsername(res.data[0].name);
					sessionStorage.setItem('userID', res.data[0]._id);
					sessionStorage.setItem('username', res.data[0].name);
					alert('Login successfully');
				}
			});
		} catch (error) {
			alert('Internal Error');
		}
	};
	return <Button variant="contained" onClick={loginWithEmail}>Login</Button>;
}

function LogoutButton({ setUserID, setUsername }) {
	const logout = async () => {
		try {
			setUserID(null);
			setUsername(null);
			sessionStorage.clear();
			alert('Logout successfully');
		} catch (error) {
			alert('Failed to connect');
		}
	};
	return <Button variant="contained" onClick={logout}>Log out</Button>;
}

function LoginForm({ setUserID, setUsername }) {
	const [mode, setMode]  = React.useState('Login');
	const toggleMode = () => {
		setMode((oldMode) => (oldMode === 'Login' ? 'Register' : 'Login'));
	};
	
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [rePassword, setRePassword] = React.useState('');
	
	React.useEffect(() => {
		setName('');
		setEmail('');
		setPassword('');
		setRePassword('');
	}, [mode]);
	
	return (
		<div className='form'>
			<h1>Join us and play!</h1>
			{mode === 'Register'?
			<input
				type = 'name'
				placeholder = 'name'
				value = {name}
				onChange = {(e) => setName(e.target.value)}
				className='formInput'
			/>
			:<></>}
			<input
				type = 'email'
				placeholder = 'email'
				value = {email}
				onChange = {(e) => setEmail(e.target.value)}
				className='formInput'
			/>
			<input
				type = 'password'
				placeholder = 'password'
				value = {password}
				onChange = {(e) => setPassword(e.target.value)}
				className='formInput'
			/>
			{mode === 'Register'?
			<input
				type = 'password'
				placeholder = 'Re-enter password'
				value = {rePassword}
				onChange = {(e) => setRePassword(e.target.value)}
				className='form_input'
			/>
			:<></>}
			{mode === 'Login' ? 
				<LoginWithEmail
					setUserID={setUserID}
					setUsername={setUsername}
					email={email}
					password={password}
				/>
				:
				<Register
					setUserID={setUserID}
					setUsername={setUsername}
					name={name}
					email={email}
					password={password}
					rePassword={rePassword}
				/>
			}
			<div>
				<span>You may also </span>
				<a href='#' onClick={() => {toggleMode();}}>
					{mode === 'Login' ? 'register a new account' : 'go to login'}
				</a>
			</div>
		</div>
	);
}

function LoginButton({ setUserID, setUsername }) {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [show, setShow] = useState(false);

	return (
		<div>
			<Button variant="contained" color="primary" onClick={() => setShow(true)}>
				Login
			</Button>
			<Modal
				open={show}
				onClose={() => setShow(false)}
			>
				<div style={modalStyle} className={classes.paper}>
					<LoginForm setUserID={setUserID} setUsername={setUsername}/>
				</div>
			</Modal>
		</div>
	);
}

export {Register, LoginWithEmail, LogoutButton, LoginForm, LoginButton};