import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>

        <img src={logo} alt="news logo" /> 

        <h5 className='mt-4 poppins-regular text-xl'>Journalism Without Fear or Favour</h5>  
        <h5 className='mt-4 poppins-regular text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h5>  
        </div>
    );
};

export default Header;