import React, { useState } from 'react';
import axios from './Axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import './Alert.css'
import background from "./picture/floor.png";

//These are the styling for the pop up windows.
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
		backgroundImage: `url(${background})`,
		color: "white",
		position: 'absolute',
		width: 400,
		padding: theme.spacing(2, 4, 3),
	},
}));

//LoginButton is a functional component.
//It returns a button that will submit the reset password request.
function ChangePasswordConfirm({ userID, password, newPassword, reNewPassword, setShow }) {
	const changePassword = async (e) => {
		var canUpdate = false;
		e.preventDefault();
		try {
			//The function will first verify the current password and the new password.
			await axios.post("/findAccount", {
				_id: userID,
				password: password,
			}).then(res => {
				if(res.data.length===0){
					alertify.error('Password is wrong');
				}else if(newPassword.length===0) {
					alertify.error("New password is empty!");
				}else if(newPassword.length<8) {
					alertify.error("New password should contain at least 8 letters!");
				}else if(newPassword!==reNewPassword){
					alertify.error("Re-entered new password is not same to new password!");
				}else {
					canUpdate = true;
				}
			});
			//After verification, it will update the document in database.
			if(canUpdate) {
				await axios.post("/updateAccount", {
					_id: userID,
					password: newPassword,
				}).then(res => {
					if(res.data.ok===1){
						alertify.success('Password is updated');
					}
					setShow(false);
				});
			}
		} catch (error) {
			alertify.error('Internal Error');
		}
	};
	return <Button variant="contained" type="submit" onClick={changePassword}>Confirm</Button>;
}

//LoginButton is a functional component.
//It returns a button that will open a password reset form on a small window.
function ChangePasswordButton({ userID }) {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [reNewPassword, setReNewPassword] = useState("");

	//The inputs are reset when the modal is opened/closed.
	React.useEffect(() => {
		setPassword('');
		setNewPassword('');
		setReNewPassword('');
	}, [show]);
	
	//The components consist of a button and a hidden modal
	return (
		<div>
			<Button variant="contained" color="secondary" onClick={() => setShow(true)}>
				Change password
			</Button>
			<Modal
				open={show}
				onClose={() => setShow(false)}
			>
				<div style={modalStyle} className={classes.paper}>
					<form className="form">
						<h1>Change Password</h1>
						<input
							type = 'password'
							value = {password}
							placeholder = 'Current password'
							onChange = {(e) => setPassword(e.target.value)}
							className = 'formInput'
						/>
						<input
							type = 'password'
							value = {newPassword}
							placeholder = 'New password'
							onChange = {(e) => setNewPassword(e.target.value)}
							className = 'formInput'
						/>
						<input
							type = 'password'
							value = {reNewPassword}
							placeholder = 'Re-enter new password'
							onChange = {(e) => setReNewPassword(e.target.value)}
							className='formInput'
						/>
						<div className="formFooter">
							<ChangePasswordConfirm userID={userID} password={password} newPassword={newPassword} reNewPassword={reNewPassword} setShow={setShow}/>
							<Button onClick={() => setShow(false)}>Cancel</Button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
}

//LoginButton is a functional component.
//It returns a button that will open the user profile on a small window.
function ProfileButton({ userID, username, setUsername }) {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [show, setShow] = useState(false);
	const [score, setScore] = useState(0);

	const showProfile = async () => {
		try {
			//This function will use the userID to retrieve the user's data from the database.
			await axios.post("/findAccount", {
				_id: userID,
			}).then(res => {
				setScore(res.data[0].score);
				setShow(true);
			});
		} catch (error) {
			alertify.error('Connection Error');
		}
	}
	
	//The components consist of a button and a hidden modal.
	return (
		<div>
			<Button onClick={showProfile}>
				Profile
			</Button>
			<Modal
				open={show}
				onClose={() => setShow(false)}
			>
				<div style={modalStyle} className={classes.paper}>
					<div className="form">
						<h1>Player profile</h1>
						<h3>Name: {username}</h3>
						<h3>Score: {score}</h3>
						<div className="formFooter">
							<ChangePasswordButton userID={userID} />
							<Button style = {{color: "white"}} onClick={() => setShow(false)}>Back</Button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export {ProfileButton};