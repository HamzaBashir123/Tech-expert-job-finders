import React from 'react'
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cvImg2 from "../../assets/templates/cv-template-02.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import RatingStars from '../components/RatingStars'
// import PromotionBadge from './PromotionBadge';
import DownloadIcon from '@mui/icons-material/Download';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";

const DashResumeCard = ({data}) => {
    const {amount , name , src} = data;
 
    return (
        <Card
            style={{ width: '200px', height: "" }}
            className="group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
        >
            <div className=" object-contain overflow-hidden">
                <div className="wrapper bg-white p-4 object-cover w-[220px]">
                    <Card.Img
                        variant="top"
                        src={src}
                        className="object-contain rounded-lg  w-[100%] "
                    />
                 
                </div>
            </div>
            <div className='relative flex justify-center'>
       <div className='flex gap-2  absolute  top-[-3rem] '>
       <PiShoppingCartSimpleFill className='text-5xl p-2 rounded-full  bg-theme-red text-white'/>
       <FaEye className='text-5xl rounded-full p-2 bg-theme-red  text-white'/>
     

       </div>
     
       <div className='relative text-center'>
        <p className='text-3xl pt-2 text-yellow-300'>{name}</p>
        <p className='text-2xl text-theme-red'>{amount}</p>
     </div>
     </div>
      
        </Card>
    )
}

export default DashResumeCard

