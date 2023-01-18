import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <div className='bg-purple-400 m-5 rounded-lg p-10'>
                <div>
                <p>Farjana Islam</p>
                <p>Contact Number:+88 01515607384</p>
                <p>Gmail: farjanaanika2@gnail.com</p>
                </div>
               <div className='flex gap-3 mt-5'>
               
               <h2><FaGithub></FaGithub> </h2>
                <h2><FaFacebook></FaFacebook> </h2>
                <h2><FaLinkedin></FaLinkedin></h2>
               </div>
                

            </div>
        </div>
    );
};

export default Profile;