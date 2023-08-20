import React from 'react';
import "./NewPage.scss"
import {useLocation} from 'react-router-dom';
const NewPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const email = queryParams.get('email');
    const phone = queryParams.get('phone');
    const street = queryParams.get('street');
    const house = queryParams.get('house');
    const apartment = queryParams.get('apartment');

    return (
        <div className="new-page">
            <h5>Personal Details</h5>
            <p>
                 <span className="input-icons">
            <svg width="38" height="33" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                     d="M32.435 4.83273C28.8465 1.71632 24.075 0 19 0C13.9247 0 9.15355 1.71632 5.56496
              4.83273C1.97636 7.94913 0 12.0925 0 16.5C0 20.9072 1.97636 25.0509 5.56496 28.1673C9.15355 31.2837 13.9247 33 19 33C24.075 33 28.8465 31.2837 32.435 28.1673C36.0236 25.0509 38 20.9072 38 16.5C38 12.0925 36.0236 7.94913 32.435 4.83273ZM16.2701 30.8734C12.002 30.2638 9.98836 25.0812 13.7414 22.9591C15.2564 22.1025 17.065 21.6089 19 21.6089C20.9351 21.6089 22.7437 22.1025 24.2587 22.9591C28.0117 25.0811 25.998 30.2638 21.7299 30.8734C20.8413 31.0004 19.9294 31.0664 19 31.0664C18.0706 31.0664 17.1587 31.0004 16.2701 30.8734ZM12.9587 14.4289C12.9587 11.5359 15.6689 9.18256 19 9.18256C22.3311 9.18256 25.0413 11.5361 25.0413 14.4289C25.0413 17.3218 22.3311 19.6753 19 19.6753C15.6689 19.6753 12.9587 17.3218 12.9587 14.4289ZM34.2456 22.5712C32.8817 25.1431 29.2347 24.1318 26.9458 22.333C25.7317 21.3787 25.5267 19.0768 26.3258 17.7554C26.9275 16.7604 27.2681 15.6286 27.2681 14.4289C27.2681 10.4699 23.5589 7.24896 19 7.24896C14.4411 7.24896 10.7321 10.4699 10.7321 14.4289C10.7321 15.6286 11.0728 16.7604 11.6744 17.7553C12.4735 19.0769 12.2684 21.3784 11.0542 22.3328C8.76544 24.1318 5.11832 25.1429 3.75436 22.571C2.77382 20.722 2.22656 18.6656 2.22656 16.5C2.22656 8.46803 9.75107 1.93359 19 1.93359C28.2489 1.93359 35.7734 8.46803 35.7734 16.5C35.7734 18.6657 35.2262 20.7222 34.2456 22.5712Z"
                     fill="#969696"/>
              </svg>
                </span>
                <h2>  {name} </h2>
            </p>

            <p>
                <span className="input-icons">
           <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M21.6978 0.556641H2.39966C1.26637 0.556641 0.341797 1.48178 0.341797 2.618V16.3604C0.341797 17.4928 1.26226 18.4218 2.39966 18.4218H21.6978C22.8283 18.4218 23.7557 17.4997 23.7557 16.3604V2.618C23.7557 1.48563 22.8353 0.556641 21.6978 0.556641ZM12.0806 1.93088C15.5273 1.93088 17.2549 6.09672 14.8198 8.53597C13.3124 10.046 10.8672 10.0513 9.3532 8.54774C6.90191 6.11333 8.62588 1.93088 12.0806 1.93088ZM6.38368 11.3979C4.66162 13.1229 1.71371 11.9033 1.71371 9.46589C1.71371 7.03413 4.6499 5.81197 6.37534 7.52553C7.44895 8.59174 7.45269 10.3271 6.38368 11.3979ZM9.30337 17.0475C6.85877 17.0475 5.63344 14.0929 7.36056 12.3628C8.42975 11.2918 10.164 11.2881 11.2378 12.3544L11.6116 12.7256C11.8797 12.992 12.3125 12.9911 12.5795 12.7235L12.9085 12.3941C13.9738 11.3269 15.7029 11.3269 16.7681 12.3941C18.4838 14.1126 17.2666 17.0475 14.8383 17.0475H9.30337ZM22.3838 9.4892C22.3838 11.918 19.4463 13.1333 17.7303 11.4144C16.6683 10.3506 16.6683 8.62778 17.7303 7.56398C19.4463 5.84508 22.3838 7.06037 22.3838 9.4892Z"
    fill="#868889"/>
</svg>

                </span>
                <h2>  {email}</h2>
            </p>
            <p>
                <span className="input-icons">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.60878 15.9129C7.9082 18.6558 10.6762 20.8155 13.8355 22.3436C15.0383 22.9124 16.6469 23.5873 18.4391 23.703C18.5502 23.7078 18.6565 23.7127 18.7676 23.7127C19.9705 23.7127 20.9366 23.2981 21.724 22.4448C21.7289 22.44 21.7385 22.4304 21.7433 22.4207C22.0235 22.0833 22.3424 21.7796 22.6757 21.4566C22.9027 21.2397 23.1346 21.0131 23.3568 20.7817C24.3857 19.7115 24.3857 18.3521 23.3471 17.3157L20.4439 14.4185C19.9512 13.9075 19.3618 13.6375 18.7435 13.6375C18.1251 13.6375 17.531 13.9075 17.0237 14.4136L15.2943 16.1394C15.1349 16.0478 14.9707 15.9659 14.8161 15.8888C14.6229 15.7923 14.4441 15.7008 14.2847 15.5995C12.7099 14.6017 11.28 13.3001 9.91294 11.6273C9.22215 10.7548 8.7584 10.022 8.43474 9.27484C8.88883 8.86509 9.31393 8.43605 9.72454 8.01665C9.86946 7.86721 10.0192 7.71777 10.169 7.56833C10.6907 7.0477 10.9709 6.44512 10.9709 5.8329C10.9709 5.22068 10.6955 4.6181 10.169 4.09747L8.72942 2.66092C8.56034 2.49219 8.40093 2.32829 8.23668 2.15957C7.91786 1.83177 7.58454 1.49432 7.25605 1.19062C6.75849 0.703736 6.17397 0.448242 5.55564 0.448242C4.94214 0.448242 4.35279 0.703736 3.83591 1.19544L2.02922 2.99836C1.37225 3.65397 1.00028 4.44938 0.92299 5.37012C0.831206 6.52225 1.04376 7.7467 1.59446 9.22663C2.43983 11.5164 3.71514 13.6423 5.60878 15.9129ZM2.10168 5.47135C2.15965 4.83021 2.40602 4.29512 2.86977 3.83233L4.66679 2.03905C4.94697 1.7691 5.25614 1.6293 5.55564 1.6293C5.85031 1.6293 6.14982 1.7691 6.42517 2.0487C6.74882 2.34758 7.05316 2.66092 7.38165 2.99354C7.54589 3.16226 7.71497 3.33099 7.88404 3.50453L9.32359 4.94108C9.6231 5.23996 9.77768 5.54366 9.77768 5.84254C9.77768 6.14142 9.6231 6.44512 9.32359 6.744C9.17384 6.89344 9.02409 7.0477 8.87434 7.19714C8.42508 7.65028 8.00481 8.07932 7.54106 8.48908C7.5314 8.49872 7.52657 8.50354 7.51691 8.51318C7.11596 8.91329 7.17876 9.29412 7.27537 9.58336C7.2802 9.59782 7.28503 9.60746 7.28986 9.62193C7.66183 10.5137 8.17872 11.3622 8.98544 12.3745C10.4347 14.1582 11.9612 15.5417 13.6422 16.607C13.85 16.742 14.0722 16.8481 14.2799 16.9541C14.4731 17.0505 14.6519 17.1421 14.8113 17.2434C14.8306 17.253 14.8451 17.2626 14.8644 17.2723C15.0238 17.3542 15.1784 17.3928 15.333 17.3928C15.7195 17.3928 15.9706 17.147 16.0528 17.065L17.8595 15.2621C18.1396 14.9825 18.444 14.833 18.7435 14.833C19.1106 14.833 19.4101 15.0596 19.5985 15.2621L22.5114 18.1641C23.0911 18.7426 23.0863 19.3693 22.4969 19.9815C22.294 20.1984 22.0815 20.4057 21.8545 20.6226C21.5163 20.9504 21.1637 21.2879 20.8448 21.6687C20.2893 22.2665 19.6275 22.5461 18.7725 22.5461C18.6903 22.5461 18.6034 22.5413 18.5213 22.5364C16.9368 22.4352 15.4634 21.8182 14.3572 21.2927C11.3525 19.8417 8.71492 17.7833 6.52661 15.1705C4.72476 13.006 3.51225 10.991 2.71035 8.83134C2.21279 7.50566 2.02439 6.4403 2.10168 5.47135Z" fill="#868889"/>
</svg>
                </span>
                <h2>{phone}</h2>

            </p>
            <p>
                        <span className="input-icons">
                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0319 0C4.94886 0 0 4.3466 0 9.68928C0 16.3197 9.87243 26.0535 10.2928 26.4647C10.6876 26.8509 11.3769 26.8502 11.771 26.4647C12.1913 26.0535 22.0637 16.3197 22.0637 9.68928C22.0636 4.3466 17.1148 0 11.0319 0ZM11.0319 24.5453C7.70928 21.0788 1.98663 14.2399 1.98663 9.68938C1.98663 5.30871 6.04427 1.74487 11.0319 1.74487C16.0194 1.74487 20.0771 5.30871 20.0771 9.68933C20.077 14.24 14.3553 21.0778 11.0319 24.5453Z" fill="#868889"/>
<path d="M11.0323 4.81543C7.97177 4.81543 5.48193 7.00232 5.48193 9.69038C5.48193 12.3784 7.97183 14.5653 11.0323 14.5653C14.0927 14.5653 16.5826 12.3784 16.5826 9.69038C16.5826 7.00232 14.0927 4.81543 11.0323 4.81543ZM11.0323 12.8205C9.06718 12.8205 7.46857 11.4163 7.46857 9.69038C7.46857 7.96442 9.06724 6.5603 11.0323 6.5603C12.9973 6.5603 14.596 7.96442 14.596 9.69038C14.596 11.4163 12.9973 12.8205 11.0323 12.8205Z" fill="#868889"/>
</svg>
</span>
<h2> { street} {house} {apartment}</h2>
            </p>
        </div>
    );
};

export default NewPage;
