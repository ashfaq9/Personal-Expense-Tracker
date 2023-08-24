// import React ,{useState ,useEffect} from 'react';
// import {Form, Input, message } from 'antd';
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// // import './login.css';



// const Login = () => {

//     const [Loading,setLoading] =useState(false);
//     const navigate = useNavigate();
    


//      //form submit

//      const submitHandler = async(values) => {
//         try {
//             setLoading(true);
//           const { data } = await axios.post('/users/login',values);
//           setLoading(false);
//           message.success("login success");
//           localStorage.setItem('user',JSON.stringify({...data.user,password:''}));
//           navigate('/');
//         }catch (error) {
//             setLoading(false);
//             message.error('something went wrong');
//         }
//     };

    
//   //prevent for login user
//   useEffect(() => {
//     if (localStorage.getItem("user")) {
//       navigate("/");
//     }
//   }, [navigate]);
    
//   return (
//     <>
//     <div style={{backgroundImage:"url('x2.jpg')",backgroundSize:"cover"}}>
//     <div className="background-image">
      
//       <div className='register-page '>
//          {Loading && <Spinner/>}
//          <div style={{backgroundColor:"rgba(56, 55, 72, 0.5) "}} className='card p-5'>
//          <Form layout='vertical' onFinish={submitHandler}>
//              <h1>Login Form</h1>
 
//              <Form.Item label="Email" name="email"> 
//                  <Input type="email" />
//              </Form.Item>
//              <Form.Item label="Password" name="password"> 
//                  <Input type="Password"/>
//              </Form.Item>
//              <div className='d-flex justify-content-between'>
//              <br/>
                
//                  <button className="btn btn-primary">Loginddddd</button>
//              </div>
//              <Link   style={{color:"white"}}to ="/register">Not a user rr ? Click Here to register</Link>
//              </Form>
//          </div>
//        </div>
//      </div>
//     </div>
//        </>
//   );
// }

export default Login;
