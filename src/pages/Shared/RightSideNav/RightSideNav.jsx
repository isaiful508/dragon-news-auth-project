import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className="p-2 space-y-3 mb-6">
                <h2 className="text-3xl poppins-semibold">Login With</h2>
                <button className="btn w-full btn-outline  ">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <div>

                    <button className="btn w-full btn-outline">
                        <FaGithub></FaGithub>
                        Login With Github
                    </button>
                </div>
            </div>

            <div className="p-2  mb-6">
                <h2 className="text-3xl mb-4 poppins-semibold">Find Us On</h2>


                <a className="flex p-4 items-center gap-5 text-lg poppins-medium border-2 rounded-t-lg " href="">

                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center gap-5 text-lg poppins-medium border-x-2  " href="">

                    <IoLogoTwitter></IoLogoTwitter>
                    Twitter
                </a>
                <a className="flex p-4 items-center gap-5 text-lg poppins-medium border-2 rounded-b-lg " href="">

                    <FaInstagram></FaInstagram>
                    Facebook
                </a>


            </div>
            {/* Q zone */}

            <div className="p-2 space-y-3 mb-6">
                <h2 className="text-3xl poppins-semibold">Q-Zone</h2>
                
               <div className="p-2 border-dashed border-2">
               <img src={qzone1} alt="" />
               </div>

               <div className="p-2 border-dashed border-2">
               <img src={qzone2} alt="" />
               </div>

                <div className="p-2 border-dashed border-2">
                <img src={qzone3} alt="" />
                </div>
            </div>


        </div>
    );
};

export default RightSideNav;