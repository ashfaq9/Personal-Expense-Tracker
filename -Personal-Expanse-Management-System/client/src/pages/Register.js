import React,{useState,useEffect} from 'react';
import {Form,Input,message} from 'antd';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
const Register = () => {

const navigate = useNavigate();
const [loading,setLoading] = useState(false);


    //form submit

    const submitHandler = async (values) => {
        try {
            setLoading(true);
          await axios.post("/users/register", values);
       message.success('Registration Successfull');
       setLoading(false);
       navigate("/login");
        } catch (error) {
            setLoading(false);
            message.error('something went wrong')
        }
    };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
    <div style={{backgroundImage:"url('a1.jpg')",backgroundSize:"cover"}}>
      <div className="register-page ">
        {loading && <Spinner/>}
        <div style={{backgroundColor:"rgba(56, 55, 72, 0.5) "}} className='card p-5'>
        <Form layout='vertical' onFinish={submitHandler}>
            <h1>Register Form</h1>
            <Form.Item label="Name" name="name"> 
                <Input/>
            </Form.Item>
            <Form.Item label="Email" name="email"> 
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name="password"> 
                <Input type='Password'/>
            </Form.Item>
            <div className='d-flex justify-content-center text-white'>
                
                <button className="btn btn-primary">Register</button>
            </div><br/>
            <Link style={{color:"white"}} to="/login">Already Register ? Click Here to login</Link>

        </Form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
