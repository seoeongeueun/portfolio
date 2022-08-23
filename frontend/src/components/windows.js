import {useEffect, useState} from 'react';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

function Windows(){

    useEffect(() => {

    }, [])

    return(
        <div className='windows'>
            <div className='window'>
                <div className='window-header'>

                </div>
                <div className='window-body'>
                    <SentimentSatisfiedAltOutlinedIcon sx={{fontSize: '2rem', marginBottom: '1rem'}}/>
                    <span>Introduction</span>
                </div>
            </div>

            <div className='window'>
                <div className='window-header'>

                </div>
                <div className='window-body'>
                    <DesktopWindowsOutlinedIcon sx={{fontSize: '2rem', marginBottom: '1rem'}}/>
                    <span>Projects</span>
                </div>
            </div>

            <div className='window'>
                <div className='window-header'>

                </div>
                <div className='window-body'>
                    <InsertPhotoOutlinedIcon sx={{fontSize: '2rem', marginBottom: '1rem'}}/>
                    <span>Other</span>
                </div>
            </div>

            <div className='window'>
                <div className='window-header'>

                </div>
                <div className='window-body'>
                    <FavoriteBorderOutlinedIcon sx={{fontSize: '2rem', marginBottom: '1rem'}}/>
                    <span>Interests</span>
                </div>
            </div>
            
            <div className='window'>
                <div className='window-header'>

                </div>
                <div className='window-body'>
                    <ContactSupportOutlinedIcon sx={{fontSize: '2rem', marginBottom: '1rem'}}/>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}
export default Windows;