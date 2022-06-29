import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import useAuth from '../../hooks/useAuth'
import apiClient from '../../services/API'

const Login = () => {
    const [Auth, setAuth] = useState(useAuth());
    const accessToken = localStorage.getItem('accessToken')
    console.log("Load " + accessToken)
    const history = useHistory()
    //const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    // Make request to API
    const handleSubmit = async (e) => {
        e.preventDefault()
        var { email, password } = document.forms[0];
        email = email.value;
        password = password.value;
        let postData = { email, password }

        apiClient.get("http://cerman.tahutekno.com/sanctum/csrf-cookie").then(response => {
            apiClient.post("/login", postData).then(response => {
                const accessToken = response?.data?.access_token
                const roles = response?.data?.user_info.roles
                setAuth({ email, password, roles, accessToken })
                setEmail(email)
                setPwd(password)
                localStorage.setItem('accessToken', accessToken);
                // navigate(from, { replace: true })
                console.log("Result " + response?.data?.user_info.roles)
            }).catch((err) => {
                if (!err?.response) {
                    setErrMsg('No Server Response')
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password')
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized')
                } else {
                    setErrMsg('Login Failed')
                }
                console.error(err)
                errRef.current.focus()
            })
        })
        history.push('/admin/Arsip/')
    }

    return (
        <Container fluid style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Row>
                <Col lg={{
                    offset: 3,
                    size: 6
                }} md={{
                    offset: 2,
                    size: 8
                }} sm={{
                    size: 12
                }} >
                    <Card>
                        <CardHeader className='text-center'>
                            Login
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email' ref={emailRef} value="aby@admin.com" name="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type='password' onChange={(e) => setPwd(e.target.value)} placeholder='Password' value="12345678" name="password" />
                                </FormGroup>
                                <Button color='success'>
                                    Login
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login