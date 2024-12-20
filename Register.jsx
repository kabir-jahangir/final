// ==============import part start
import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification, updateProfile} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import {Bounce,toast} from 'react-toastify'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// ==============import part end

const Register = () => {
    // ==================variable part start
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [show, setshow] = useState(false);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();
    // =================variable part end
    // =================firebase variable part
    const auth = getAuth();
    // =================function part start
    const handleshow = ()=>{
        setshow(!show)
    }
   const handleSubmit = (e)=>{
    setLoading(true)
    e.preventDefault()
    if(!email){
        setemailError('enter your email')
    }
    if(!password){
        setpasswordError('enter your password')
    }else{
            
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User registered:",user)
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    setLoading(false)
                    //==========update
                    updateProfile(auth.currentUser,{
                        
                        email: email, 
                        
                      }).then(() => {
                        
                        toast.success('Email Verification Send!Please Check Your Email And Click On The Link', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                            });
                      // Email verification sent!
                      // ...
                        // Profile updated!
                        // ...
                      })                    
});  
          })
          .catch((error) => {
            setLoading(false)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('this is cde',errorCode,'this is msg',errorMessage)
            if(errorCode == 'auth/email-already-in-use'){
                toast.error('Email Has Already Taken!!!Please Use Proper Email.Thank You!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
            // ..
          });
    }
   }
       // =========================google sign in button
       const handleGoogle = ()=>{
        signInWithPopup(auth, provider)
             .then((result) => {
               // This gives you a Google Access Token. You can use it to access the Google API.
               const credential = GoogleAuthProvider.credentialFromResult(result);
               const token = credential.accessToken;
               // The signed-in user info.
               const user = result.user;
               // IdP data available using getAdditionalUserInfo(result)
               // ...
                        }).catch((error) => {
               // Handle Errors here.
               const errorCode = error.code;
               const errorMessage = error.message;
                          // The email of the user's account used.
                          const email = error.customData.email;
               // The AuthCredential type that was used.
               const credential = GoogleAuthProvider.credentialFromError(error);
               // ...
             });
            
               }
   //==================function part end
  return (
    <>
        <div className = 'login justify-items-center '>
            <div className = 'container'>
                <div className = 'container_row flex gap-[10px] lg:gap-[80px] flex'>
                    <div className = 'container_text pt-[108px]'>
                        <h2 className='text-[22px]  lg:text-[44px] font-extrabold font-Overpass text-[#444B59] ' >WELCOME BACK!</h2>
                        <h2 className='text-[18px] lg:text-[24px] text-[#444B59] font-normal font-Nunito mt-[12px] mb-[64px]'>Dont't have a account,<span className = 'text-[18px] lg:text-[24px] font-bold font-Nunito'>  Sign up</span></h2>
                        {/* ==================email input part================== */}
                        <h2 className='text-[18px] lg:text-[28px] text-[#444B59] font-semibold font-Nunito  mb-[16px]'>Username</h2>
                        <input onChange = {(e) =>{setemail(e.target.value),setemailError('')}} className = 'w-[290px] h-[40px] text-[13px] pl-[10px] pr-[15px] py-[10px] lg:w-[640px] lg:h-[90px] border-2 border-[#8699DA] rounded-[80px] input_email lg:text-[24px] text-[#C8D3F9] font-normal font-Nunito mb-[36px] lg:pl-[32px] lg:pr-[220px] lg:py-[24px]' type='email' placeholder='deniel123@gmail.com'></input>
                        <p className = 'text-red-800 font-Poppins'>{emailError}</p>
                        {/* ===================password input part================ */}
                        <h2 className='text-[18px] lg:text-[28px] text-[#444B59] font-normal font-Nunito  mb-[16px]'>Password</h2>
                        <div className=' relative'>
                             <input onChange = {(e) =>{setpassword(e.target.value),setpasswordError('')}} className = 'w-[290px] h-[40px]  text-[13px] pl-[10px] pr-[15px] py-[10px] relative lg:w-[640px] lg:h-[90px] border-2 border-[#8699DA] rounded-[80px] input_password text-[24px] text-[#C8D3F9] font-normal font-Nunito mb-[36px] lg:pl-[32px] lg:pr-[220px] lg:py-[24px] lg:relative' type={show?'text':'password'} placeholder=' '  required></input>
                             <p className = 'text-red-800 font-Poppins'>{passwordError}</p>
                             <FaRegEyeSlash onClick = {handleshow} className='absolute left-[260px] top-[10px] lg:absolute lg:left-[610px] lg:top-[43px]'/>
                        </div>
                        {/* ==================remember part====================== */}
                        <div className = 'flex gap-[120px] mb-[55px] lg:flex lg:gap-[234px] lg:mb-[55px]'>
                            <div className = 'flex gap-[4px] items-center lg:flex lg:gap-[20px] lg:items-center'>
                                <input type ='radio' id='remember'></input>
                                <label for ='remember' className = 'text-[#444B59] text-[10px] font-normal font-Nunito lg:text-[#444B59] lg:text-[20px] lg:font-normal lg:font-Nunito'>Remember me</label>
                            </div>
                            <h2 className = 'text-[#8699DA] text-[10px] font-semibold font-Nunito place-self-center  lg:text-[#8699DA] lg:text-[20px] lg:font-semibold lg:font-Nunito lg:place-self-center'>Forget password?</h2>
                        </div>
                        {/* =================sign in button part=================== */}
                        <div className='mb-[36px]'>
                            {
                                loading?(
                                    <button className='w-[290px] h-[40px]  lg:w-[640px] lg:h-[160px]' onClick={handleSubmit}  ><h2 className= 'text-[#FFF] text-[12px] px-[65px] py-[12px] lg:text-[#fff] lg:text-[32px] font-extrabold font-Nunito bg-[#8699DA] lg:px-[265px] lg:py-[24px] rounded-[50px]'><ClipLoader hover:color = 'fff' /></h2></button>

                                )
                                :
                                ( <button className='w-[290px] h-[40px]  lg:w-[640px] lg:h-[160px]' onClick={handleSubmit}><h2 className= 'text-[#FFF] text-[12px] px-[65px] py-[12px] lg:text-[#fff] lg:text-[32px] font-extrabold font-Nunito bg-[#8699DA] lg:px-[265px] lg:py-[24px] rounded-[50px]'>Sign in</h2></button>)
                            }
                            
                        </div>
                        {/* =================continue with google facebook apple part=================== */}
                        <div className='mb-[16px] place-self-center '>
                            <img src='Images/1.png' className='w-[200px] h-[20px]   lg:w-[480px] lg:h-[43px]' ></img>
                        </div>
                        <div className = 'flex place-self-center gap-[3px] mb-[109px] lg:flex lg:gap-[16px] lg:place-self-center lg:mb-[109px] '>
                            <button onClick = {handleGoogle}><img src='Images/google.png' className='w-[80px] h-[50px] lg:w-[150px] lg:h-[100px]'></img></button>
                            <button><img src='Images/facebook.png' className='w-[80px] h-[50px] lg:w-[150px] lg:h-[100px]'></img></button>
                            <button><img src='Images/apple.png' className='w-[80px] h-[50px] lg:w-[150px] lg:h-[100px]'></img></button>
                            
                        </div>
                    </div>
                    {/* =====================login page image part======================================== */}
                    <div className = 'login_image pt-[155px]  lg:pt-[155px]'>
                        <img className='w-[660px] h-[388px]   lg:w-[960px] lg:h-[648px]'src='Images/logo.png'></img>
                    </div>
                </div>
            </div>
        </div>  
    </>
)
}
export default Register

