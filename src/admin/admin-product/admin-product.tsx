// import React, {useState} from 'react';
//
// import "./admin-product.scss"
// import { AiOutlinePlus } from 'react-icons/ai';
// import apple from "../img/apple.png"
// import grocery from "../img/Grocery.png"
// import galary from "../img/galary1.png"
//
// interface Photo {
//     id: number;
//     url: string;
// }
//
// const photos: Photo[] = [
//     { id: 1, url: apple },
//     { id: 2, url: grocery },
//     { id: 3, url: apple },
// ];
// interface Block {
//     selectedPhoto: Photo | null;
//     photoTitle: string;
// }
//
// const AdminProduct: React.FC = () => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [blocks, setBlocks] = useState<Block[]>([]);
//
//
//
//     const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
//     const [photoTitle, setPhotoTitle] = useState<string>('');
//
//     const handlePhotoSelect = (photo: Photo) => {
//         setSelectedPhoto(photo);
//     };
//     const handleOpenButtonClick = () => {
//         setIsExpanded(!isExpanded);
//     };
//     const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPhotoTitle(event.target.value);
//     };
//
//
//     return (
//         <div className="product-list">
//             <div className="product-list-both">
//                 <div className="just">
//                     <img src={apple} alt=""/>
//                     <h1>Vegetables, fruits</h1>
//                 </div>
//             </div>
//             <div className="product-list-both">
//                 <div className="just">
//                     <img src={apple} alt=""/>
//                     <h1>Cosmetics,hygiene</h1>
//                 </div>
//             </div>
//             <div className="product-list-both">
//                 <div className="just">
//                     <img src={apple} alt=""/>
//                     <h1>For kids</h1>
//                 </div>
//             </div>
//             <div className="product-list-both">
//                 <div className="just">
//                     <img src={apple} alt=""/>
//                     <h1>Grocery</h1>
//                 </div>
//             </div>
//             <div className="product-list-both">
//                 <div className="just">
//                     <img src={apple} alt=""/>
//                     <h1>Juices</h1>
//                 </div>
//             </div>
//             {isExpanded && (
//                 <div className="product-list-both">
//                     {selectedPhoto ? (
//                         <div className="new-photo">
//                             <img src={selectedPhoto.url} alt="Выбранное фото" />
//                             <p> {photoTitle}</p>
//                         </div>
//                     ) : (
//                         <div className=" add-photo-page">
//
//                             <div className="photo-three">
//                                 {photos.map((photo) => (
//                                     <img
//                                         key={photo.id}
//                                         src={photo.url}
//                                         alt={`Фото ${photo.id}`}
//                                         onClick={() => handlePhotoSelect(photo)}
//                                     />
//                                 ))}
//                             </div>
//                             <div  className="photo-input">
//                                 <img src={galary} alt=""/>
//                                 <input
//                                     type="text"
//                                     placeholder=" Name of category"
//                                     value={photoTitle}
//                                     onChange={handleTitleChange}
//                                 />
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )}
//             <div className="product-list_btn">
//                 <button className="open" onClick={handleOpenButtonClick}>
//                     <span> <AiOutlinePlus/></span>
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default AdminProduct;
//
//
//

import React, {useState} from 'react';

import "./admin-product.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import apple from "../img/apple.png"
import grocery from "../img/grocery.png"
import galary from "../img/galary1.png"
import cosmetic from "../img/cosmetic.png"
import kids from "../img/kids.png"
import juice from "../img/juice.png"
import {NavLink} from "react-router-dom";

interface Photo {
    id: number;
    url: string;
}

const photos: Photo[] = [
    { id: 1, url: apple },
    { id: 2, url: grocery },
    { id: 3, url: apple },
];

interface Block {
    selectedPhoto: Photo | null;
    photoTitle: string;
}

const AdminProduct: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [blocks, setBlocks] = useState<Block[]>([]);


    const handlePhotoSelect = (photo: Photo, blockIndex: number) => {
        const updatedBlocks = [...blocks];
        updatedBlocks[blockIndex].selectedPhoto = photo;
        setBlocks(updatedBlocks);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>, blockIndex: number) => {
        const updatedBlocks = [...blocks];
        updatedBlocks[blockIndex].photoTitle = event.target.value;
        setBlocks(updatedBlocks);
    };

    const handleToggle = () => {
        setBlocks(prevBlocks => {
            const newBlock: Block = {
                selectedPhoto: null,
                photoTitle: '',
            };
            return [...prevBlocks, newBlock];
        });
        setIsExpanded(!isExpanded);
    };


    return (
        <div className="product-list">
            <NavLink to="/product-list">
                <div className="product-list-both">
                    <div className="just">
                        <img src={apple} alt=""/>
                        <h1>Vegetables, fruits</h1>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/product-list">
                <div className="product-list-both">
                    <div className="just">
                        <img src={ grocery} alt=""/>
                        <h1>Cosmetics,hygiene</h1>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/product-list">
                <div className="product-list-both">
                    <div className="just">
                        <img src={cosmetic} alt=""/>
                        <h1>For kids</h1>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/product-list">
                <div className="product-list-both">
                    <div className="just">
                        <img src={juice} alt=""/>
                        <h1>Grocery</h1>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/product-list">
                <div className="product-list-both">
                    <div className="just">
                        <img src={kids} alt=""/>
                        <h1>Juices</h1>
                    </div>
                </div>

            </NavLink>


               {isExpanded && (
                   <div>
                       {blocks.map((block, index) => (
                           <div className="product-list-both" key={index}>
                               {block.selectedPhoto ? (
                                   <div className="new-photo">
                                       <img src={block.selectedPhoto.url} alt="Выбранное фото" />
                                       <p>{block.photoTitle}</p>
                                   </div>
                               ) : (
                                   <div className="add-photo-page">
                                       <div className="photo-three">
                                           {photos.map((photo) => (
                                               <img
                                                   key={photo.id}
                                                   src={photo.url}
                                                   alt={`Фото ${photo.id}`}
                                                   onClick={() => handlePhotoSelect(photo, index)}
                                               />
                                           ))}
                                       </div>
                                       <div className="photo-input">
                                           <img src={galary} alt="img" />
                                           <input
                                               type="text"
                                               placeholder=" Name of category"
                                               value={block.photoTitle}
                                               onChange={(event) => handleTitleChange(event, index)}
                                           />
                                       </div>
                                   </div>
                               )}
                           </div>
                       ))}
                   </div>
               )}

            <div className="product-list_btn">
                <button className="open" onClick={handleToggle}>
                    <span> <AiOutlinePlus /></span>
                </button>
            </div>


        </div>
    );
};

export default AdminProduct;