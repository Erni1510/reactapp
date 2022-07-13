import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
import useAuth from '../../hooks/useAuth'
import apiClient from '../../services/API'
import {saveToLocal, getFromLocal, removeFromLocal} from '../../services/Storage'

const Login = () => {
    const [Auth, setAuth] = useState(useAuth());
    //const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    //const history = useHistory()
	//const accessToken = getFromLocal('accessToken')
	
	//console.log("Result "+accessToken)
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
				const name = response?.data?.user_info.nama
                setAuth({ email, password, roles, accessToken })
                setEmail(email)
                setPwd(password)
				
				saveToLocal('Name', name);
				saveToLocal('Roles', roles);
				saveToLocal('accessToken', accessToken);
                window.location.href = "/admin/index"
                // navigate(from, { replace: true }) 
                // console.log("Result "+accessToken)
            }).catch((err) => {
                if (!err?.response) {
                    setErrMsg('No Server Response')
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password')
                } else if (err.response?.status === 401) {
                    setErrMsg('Maaf, Username dan Password tidak ditemukan')
                } else {
                    setErrMsg('Login Failed')
                }
                errRef.current.focus()
            })
        })
    }

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <CardHeader className='text-center'>
                            Login
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </CardHeader>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email' ref={emailRef} name="email" /*value="erni@gmail.com"*/ />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='password' onChange={(e) => setPwd(e.target.value)} placeholder='Password' name="password" /*value="12345678"*//>
                                </InputGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className="text-muted">Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4" color="primary">
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default Login