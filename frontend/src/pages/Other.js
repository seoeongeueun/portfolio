import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

function Other() {

    const [checked, setChecked] = useState(false);

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='otherPage'>
                <div className='otherPageIntro'>
                    <p>Other</p>
                </div>
                <div className='gameboyContainer'>
                  <div className='gameboyHead'>
                    <div className='gameboyHeadLeft'/>
                    <div className='gameboyHeadMiddle'>
                      <div className='gameboySwitch'>
                          <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={() => setChecked(!checked)}/>
                          {checked ? <span>ON</span> : <span>OFF</span>}
                      </div>
                    </div>
                    <div className='gameboyHeadRight'/>
                  </div>
                  
                  <div className='gameboy'>
                      <div className='gameboyScreen'>
                          <div className='gameboyTopDeco'>
                              <div className='gameboyLines'>
                                  <div className='gameboyLine1' style={{width: '14rem', marginLeft: '2rem', marginRight: '0.5rem'}}/>
                                  <div className='gameboyLine2' style={{width: '14rem', marginLeft: '2rem', marginRight: '0.5rem'}}/>
                              </div>
                              <span>OTHER PROJECTS I WORKED ON BEFORE</span>
                              <div className='gameboyLines'>
                                  <div className='gameboyLine1'/>
                                  <div className='gameboyLine2'/>
                              </div>
                          </div>
                          <div className='gameboyBottomDeco'>
                              <div className='gameboyLight'>
                                  {checked ? <div className='redLighting'/> : <div className='redLightingOff'/>}
                                  <span>BATTERY</span>
                              </div>
                              <div className='gameboyGreen'/>

                          </div>
                      </div>
                      <div className='gameboyTitle'>
                        <span className='title1'>Nintendo</span>
                        <span className='title2'>GAMEBOY</span>
                      </div>
                      <div className='gameboyButtons'>
                          <div className='buttonMoveContainer'>
                              <div className='buttonMove'/>
                              <div className='buttonMoveBox'/>
                              <div className='buttonMoveCircle'/>
                          </div>
                          <div className='miniButtons'>
                              <div className='buttonA'/>
                              <div className='buttonB'/>
                          </div>
                      </div>

                  </div>
                </div>
            </div>
        </main>
    )
}
export default Other;