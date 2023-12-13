import { useRef } from 'react';
import emailjs from 'emailjs-com';
import mail from './main.json';
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import { useState } from 'react';

const DirectMessage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ajpv9g', 'template_wi4tlqk', form.current, 'blrROPaNUM-y3X8ir')
            .then((result) => {
                console.log(result.text);
                Swal.fire(
                    'Good job!',
                    'You message already send!',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
            });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id='contact' className='h-[100vh] pt-16'>
            <h3 className='gradient-text text-5xl text-center font-bold'>Contact With Me</h3>
            <div className=' md:flex gap-5 justify-between items-center my-5 mx-auto'>
                <Lottie className='h-[500px]' animationData={mail}></Lottie>
                <form ref={form} onSubmit={sendEmail} className=' custom-border md:w-1/2 w-full mt-2 mx-auto'>
                    
                    <div className="form-control my-3 w-full ">
                        <label htmlFor="name" className="text-white mb-2 font-bold">Name</label>
                        <input type="text" placeholder="Type your name here" onChange={(e) => setName(e.target.value)}  value={name} name='from_name' required className="input input-warning bg-transparent text-white w-full" />

                    </div>
                    <div className="form-control my-3 w-full">
                        <label htmlFor="email" className="text-white block mb-2 font-bold">Email</label>
                        <input type="email" name='from_email' onChange={(e) => setEmail(e.target.value)}  value={email} placeholder="Type your Email here" required className="input input-warning bg-inherit text-white w-full" />

                    </div>

                    <div className="form-control my-3 w-full ">
                        <label htmlFor="message" className="text-white block mb-2 font-bold">Message</label>
                        <textarea name='message' onChange={(e) => setMessage(e.target.value)} placeholder="Type your massage here"  value={message} rows='5' cols='5' required className=" textarea text-black input-warning bg-inherit w-full" >

                        </textarea>

                    </div>

                    <button type="submit" className=' gradient-text custom-btn bg-orange-500 px-1 py-2 rounded-lg'> <span></span> <span></span> <span></span><span></span> Send Mail</button>

                </form>

            </div>


        </div>
    );
};

export default DirectMessage;