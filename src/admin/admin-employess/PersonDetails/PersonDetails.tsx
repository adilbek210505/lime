import React, {useState} from 'react';
import "./PersonDetails.scss"
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineCheck} from 'react-icons/ai';
import {PiPencilSimpleLineLight} from 'react-icons/pi';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {LiaBirthdayCakeSolid} from 'react-icons/lia';
import {MdEmail} from 'react-icons/md';
import {FiPhone} from 'react-icons/fi';
import {MdPlace} from 'react-icons/md';
import {FaCarSide} from 'react-icons/fa';
import {GiDutchBike} from 'react-icons/gi';
import {RiRunFill} from 'react-icons/ri';


const PersonalDetails = () => {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('No selected file');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    return (
        <div className="personal-details">
            <div className=" detail-right">
                <div className="details-header">
                    <button><AiOutlinePlus/></button>
                    <div className=" header-both">
                        <h3>Personal Details</h3>
                        <h5>Rank: Courier</h5>
                    </div>
                </div>

<div className="img-global">
  <div className="images-details">
      <form onClick={() => {
          const inputField = document.querySelector('.input-field') as HTMLInputElement;
          inputField?.click();
      }}>
          <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={handleImageChange}
          />
          {image ? (
              <img src={image} width="369px" height="470px" alt={fileName} />
          ) : (
              <div className="addFile">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#181818" stroke-opacity="0.5" stroke-width="2"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9997 13.5854L18.9794 13.5651C18.5898 13.1754 18.2537 12.8393 17.9536 12.5864C17.6367 12.3193 17.2917 12.0845 16.8665 11.9562C16.3014 11.7857 15.6986 11.7857 15.1335 11.9562C14.7083 12.0845 14.3633 12.3193 14.0464 12.5864C13.7463 12.8393 13.4102 13.1754 13.0206 13.5651L12.9921 13.5936C12.6852 13.9004 12.5046 14.0795 12.3645 14.1954L12.3443 14.2118L12.3317 14.1891C12.2447 14.0295 12.1435 13.7961 11.9726 13.3972L11.9191 13.2726L11.8971 13.2211L11.897 13.221C11.5411 12.3904 11.2422 11.693 10.9464 11.1673C10.6416 10.6257 10.2618 10.1178 9.66982 9.82106C9.17604 9.57352 8.6235 9.46711 8.07311 9.51356C7.41323 9.56924 6.87197 9.89977 6.38783 10.2894C5.98249 10.6157 5.52754 11.0598 5 11.5859V12.9999C5 13.5166 5.0003 13.9848 5.00308 14.411L6.117 13.2971C6.80615 12.6079 7.26639 12.1497 7.64186 11.8475C8.01276 11.5489 8.17233 11.5123 8.24128 11.5065C8.42475 11.491 8.60893 11.5265 8.77352 11.609C8.83539 11.64 8.96994 11.7333 9.20344 12.1482C9.43981 12.5682 9.69693 13.1646 10.0809 14.0605L10.1343 14.1851L10.1506 14.2232C10.2995 14.5707 10.4378 14.8936 10.5759 15.1468C10.7206 15.412 10.9308 15.7299 11.2847 15.9489C11.702 16.2072 12.1997 16.3031 12.6831 16.2182C13.093 16.1463 13.4062 15.9292 13.6391 15.7367C13.8613 15.5529 14.1096 15.3045 14.3769 15.0371L14.377 15.0371L14.4063 15.0078C14.8325 14.5816 15.1083 14.307 15.3353 14.1157C15.5526 13.9325 15.6552 13.8878 15.7112 13.8709C15.8995 13.8141 16.1005 13.8141 16.2888 13.8709C16.3448 13.8878 16.4474 13.9325 16.6647 14.1157C16.8917 14.307 17.1675 14.5816 17.5937 15.0078L18.9441 16.3582C18.9902 15.6404 18.9983 14.7479 18.9997 13.5854Z" fill="#181818" fill-opacity="0.5"/>
                      <circle cx="16.5" cy="7.5" r="1.5" fill="#181818" fill-opacity="0.5"/>
                  </svg>

                  <h6>Upload photo</h6>
              </div>
          )}
      </form>

  </div>
</div>




                <div className="password">
                    <div className="password-inputs ">
                        <h2> ID:</h2>  <input type="text" placeholder="ID123456 "/>
                    </div>
                    <div className="password-inputs ">
                        <h2>Password : </h2>   <input type="text "/>
                    </div>
                    <div className="password-inputs ">
                        <h2>Login : </h2>   <input type="email"/>
                    </div>
                    <div className="password-inputs ">
                        <h2>Other languages : </h2>   <input type="text"/>
                    </div>
                    <span> <h5>Fixed payment :</h5> <h4> 200 c</h4> </span>
                </div>
            </div>
            <div className="details-left">
                <div className="details-inputs">
                    <span><AiOutlineCheck/></span>
                    <span> <PiPencilSimpleLineLight/></span>
                    <span><AiOutlineDelete/></span>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <BsFillPersonFill/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Name</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <LiaBirthdayCakeSolid/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label">Date of birth</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <MdEmail/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label">E-mail</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <FiPhone/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Number phone</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <MdPlace/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Address</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <FaCarSide/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Model car</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <GiDutchBike/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Bike</label>
                </div>
                <div className="input-container">
                    <span className="input-icon"> <RiRunFill/> </span>
                    <input type="text" className="custom-input"/>
                    <label className="input-label"> Food courier</label>
                </div>

            </div>
        </div>
    );
};

export default PersonalDetails;