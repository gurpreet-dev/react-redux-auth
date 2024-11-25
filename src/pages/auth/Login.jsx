import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Input } from '../../components'
import { authService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/AuthSlice'

function Login() {

	const { register, handleSubmit } = useForm();

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		authService.login(data).then((res) => {
			dispatch(login(res.data));
		}).catch((error) => {
			alert('Something went wrong!')
		})
	}

	return (
		<>
			<Container>
				<Row className="justify-content-md-center">
					<Col md={4}>
						<Card>
							<Card.Header>Login</Card.Header>
							<Card.Body>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Input
										label="Email Address"
										type="email"
										{...register('email')}
									/>
									<Input
										label="Password"
										type="password"
										{...register('password')}
									/>
									{/* <div className="mb-3 form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label" for="exampleCheck1">Check me out</label>
							</div> */}
									<button type="submit" className="btn btn-primary">Submit</button>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Login