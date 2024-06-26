import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);



        //caeate user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.error(error))
       
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl my-10 text-center poppins-medium ">Please Register  Here</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:1/2 mx-auto">
                            <div className="form-control">

                                <label className="label poppins-semibold">
                                    <span className="label-text">Full Name</span>
                                </label>

                                <input name="name" type="text" placeholder="Enter your full name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">

                                <label className="label poppins-semibold">
                                    <span className="label-text">Photo URL</span>
                                </label>

                                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control">

                                <label className="label poppins-semibold">
                                    <span className="label-text">Email address</span>
                                </label>

                                <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>

                            <div className="form-control">

                                <label className="label poppins-semibold">
                                    <span className="label-text">Password</span>
                                </label>

                                <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary outline-none bg-[#403F3F]">Login</button>

                                <p className="text-center mt-2 poppins-medium">Have You Already Registered ? <Link className="text-red-500" to='/login'>Register</Link></p>

                            </div>
                        </form>

            
        </div>

    );
};

export default Register;