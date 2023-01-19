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
               <a
            href="https://github.com/Farjanaislam2?tab=repositories"
            target="_blank"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/farjana-islam-anika/"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.facebook.com/Sohelfarjana123"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
              
               </div>
                

            </div>
        </div>
    );
};

export default Profile;