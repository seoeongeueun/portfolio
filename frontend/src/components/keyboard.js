import {useEffect, useState} from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

function Keyboard(){

    return (
        <div class="keyboard">
            <div class="row">
                <div class="key key__esc">
                    <HomeOutlinedIcon sx={{color: 'white'}}/>
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                   
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                   
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__delete key__icon">
                    <SentimentSatisfiedAltOutlinedIcon sx={{color: 'white'}}/>
                </div>
            </ div>
            <div class="row">
                <div class="key key__oneandhalf">
                    <i data-feather="log-in"></i>
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols">
                    
                </div>
                <div class="key key__symbols key__oneandhalf">
                    
                </div>
            </div>
              
            <div class="row">
                <div class="key key__caps">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key">
                  
                </div>
                <div class="key key__symbols">
                  
                </div>
                <div class="key key__symbols">
                  
                </div>
                <div class="key key__enter">
                    
                </div>
            </div>

            <div class="row">
              <div class="key key__shift-left">
                <DesktopWindowsOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key key__symbols">
                
              </div>
              <div class="key key__symbols">
                
              </div>
              <div class="key key__symbols">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key key__arrow">
                <ArrowUpwardOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key">
                
              </div>
            </div>

            <div class="row">
              <div class="key key__bottom-funct">
                <InsertPhotoOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key key__bottom-funct">
                <FavoriteBorderOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key key__bottom-funct2">
                <ContactSupportOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key key__spacebar">
              </div>
              <div class="key">
                
              </div>
              <div class="key">
                
              </div>
              <div class="key key__arrow">
                <ArrowBackOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key key__arrow">
                <ArrowDownwardOutlinedIcon sx={{color: 'white'}}/>
              </div>
              <div class="key key__arrow">
                <ArrowForwardOutlinedIcon sx={{color: 'white'}}/>
              </div>
            </div>
    </div>

    )
}
export default Keyboard;