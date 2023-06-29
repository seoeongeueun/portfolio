import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Project1 from '../icons/project1.png';
import Project2 from '../icons/project2.png';
import Project3 from '../icons/project3.png';
import Project4 from '../icons/project4.png';
import Project5 from '../icons/project5.png';
import Project6 from '../icons/project6.png';
import Loading from '../music/mixkit-arcade-bonus-alert-767.wav';

function Other() {
    const [checked, setChecked] = useState(false);
    const [page, setPage] = useState(0);
    const [lang, setLang] = useState('English');
    const [loading, setLoading] = useState(true);
    const [audio] = useState(new Audio(Loading))
    const projectPics = [Project1, Project2, Project5, Project3, Project4, Project6];

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 55,
        height: 20,
        padding: 1,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(33px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#E6DFE3',
              opacity: 1,
              border: 0,
              marign: 2,
              borderBottom: '3px solid #F5F0F0',
              borderRight: '3px solid #F5F0F0',

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
          width: 17,
          height: 17,
          color: '#817294'
        },
        '& .MuiSwitch-track': {
          borderRadius: 17 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E6DFE3' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
          boxShadow: '2px 1px 2px 1px rgb(190, 182, 188) inset',
          borderBottom: '3px solid #F5F0F0',
          borderRight: '3px solid #F5F0F0'
        },
      }));

      useEffect(() => {
        if (checked && loading) {
          audio.play()
          setInterval(() => {
            setLoading(false);
          }, 3000);
        } else if (!checked) {
          setPage(0)
        }
      }, [checked, loading, audio]);

      useEffect(() => {
        if (!checked) {
          setLoading(true);
        }
      }, [checked])

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='otherPage'>
                <div className='otherPageIntro'>
                    <p>Other</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='otherPageBody'>
                    {checked ? <div className='otherPageDesc'>
                        {lang === 'Korean' ? <div className='descTitle'>
                                                <span>설명</span>
                                                <div className='descBody'>
                                                    <span>내용</span>
                                                </div>
                                              </div>
                            : <div className='descTitle'>
                                <span>3D Game Items</span>
                                <div className='descBody'>
                                    {page === 0 && <span>Programs Used: Blender, Marvelous Designer, Milkshape, and Adobe Photoshop<br></br>
                                      I used to make Custom Content (cc) items for The Sims 3 and Second Life, and shared them online.</span>}
                                    {page === 2 && <span>These are some of the promotional images for my items. </span>}
                                     {page === 3 && <span>Mostly I made clothing items, but sometimes decorative objects too.</span>}
                                    {page === 4 && <span>I had a lot of fun designing and creating meshes, making promotional images, and connecting with other users.</span>}
                                </div>
                            </div>}
                    </div>
                    : <div className='otherPageDesc'>
                        <div className='otherPageInstruction'>
                          <span style={{fontSize: '3rem', color: 'cyan', marginBottom: '1rem'}}>HELP</span>
                            <div className='instructionsContent'>
                              <div className='instructionsButtons'>
                                <div className='cylinder'>
                                  <div className='innerCircle'/>
                                </div>
                              </div>
                              <div className='instructionsButtons' style={{marginRight: '1.5rem'}}>
                                <div className='cross'/>
                                <dic className='buttonAB'>
                                  <div class='circle1'/>
                                  <div class='circle2'/>
                                </dic>
                              </div>
                              
                            </div>
                            <div className='steps'>
                              <span>Turn on the switch</span>
                              <span>Click on any button</span>
                            </div>
                        </div>
                      </div>}
                <div className='gameboyContainer'>
                  <div className='gameboyHead'>
                    <div className='gameboyHeadDeco'/>
                    <div className='gameboyHeadLeft'/>
                    <div className='gameboyHeadMiddle'>
                      <div className='gameboySwitch'>
                          <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={() => {checked && setLoading(true); setChecked(!checked);}}/>
                          {checked ? <span style={{color: '#AA9BA5'}}>ON</span> : <span style={{color: '#AA9BA5'}}>OFF</span>}
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
                              <div className='gameboyGreen'>
                                  {(checked && loading) && <div className='loading'><span>LOADING..</span></div>}
                                  {(checked && !loading) && <div className='screenImages'>
                                      {page === 1 ? setPage(page+1) : <img src={projectPics[page]} alt='projectPic'/>}
                                    {(page !== 2 || page !== 3) && <img src={page+1 >= projectPics.length ? projectPics[0] : projectPics[page+1]} alt='project1'/>}
                                    <div className='shadow'/>
                                  </div>}
                              </div>
                          </div>
                      </div>
                      <div className='gameboyTitle'>
                        <span className='title1' style={{fontSize: '1.7rem'}}>Minitendo</span>
                        <span className='title2'>GAME TOY</span>
                      </div>
                      <div className='gameboyButtons'>
                          <div className='buttonMoveContainer' onClick={() => setPage(page >= projectPics.length-1 ? 0 : page+1)}>
                              <div className='buttonMove'/>
                              <div className='buttonMoveBox'/>
                          </div>
                          <div className='miniButtons'>
                              <div className='buttonA'/>
                              <div className='buttonB'/>
                          </div>
                      </div>

                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Other;
