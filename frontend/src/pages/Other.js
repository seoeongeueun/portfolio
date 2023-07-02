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
import Project7 from '../icons/project7.png';
import Loading from '../music/mixkit-arcade-bonus-alert-767.wav';
import { useForkRef } from '@mui/material';

function Other(props) {
    const [checked, setChecked] = useState(false);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [audio] = useState(new Audio(Loading))
    const projectPics = [Project1, Project2, Project5, Project4, Project3, Project6, Project7];

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
      const svgStyle = {
          textShadow: '0 0 5px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #0077ff, 0 0 10px #00FFFF, 0 0 98px #0077ff',
          fontSize: '60px',
          color: 'white',
      }

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.keyCode === 39) {
            setPage(page < projectPics?.length - 1 ? page + 1 : 0)
          } else if (event.keyCode === 37) {
            if (page === 2) setPage(0)
            else setPage(page > 0 ? page -1 : projectPics?.length - 1)
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [page]);

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
          setPage(0)
        }
      }, [checked]);

      

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='otherPage'>
                <div className='otherPageIntro'>
                    <p>Other</p>
                    <div className='otherPageLang'>
                        <button onClick={() => props.setLang('Korean')} disabled={props.lang === 'Korean'}>한국어</button>
                        <button onClick={() => props.setLang('English')} disabled={props.lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='otherPageBody'>
                    {checked ? <div className='otherPageDesc'>
                        {props.lang === 'Korean' ? <div className='descTitle'>
                                                {page === 0 && <span style={{fontSize: '2.5rem', color: 'cyan'}}>3D 게임 아이템</span>}
                                                <div className='descBody'>
                                                {page === 0 && <span>사용 프로그램: 블렌더, 마블러스 디자이너, 밀크셰이프, 포토샵<br></br>
                                                심즈3와 세컨드라이프 게임 전용 커스텀 제작 아이템 (CC)를 만들어서 배포하는게 취미였습니다.</span>}
                                                {page === 2 && <span>옆의 예시는 제가 제작한 아이템을 홍보하기 위해 만든 이미지의 일부입니다. </span>}
                                                {page === 3 && <span>주로 옷을 제작했지만 가끔 데코 아이템이나 헤어도 만들었습니다.</span>}
                                                {page === 4 && <span>아이템을 디자인하고 3d 메쉬를 제작하고 다른 유저들 교류하며 많이 배우고 다양한 기술을 공부하는 좋은 경험이었습니다.</span>}
                                                {page === 5 && <span>튜토리얼을 찾아보고, 다른 사람들에게 질문하고, 다양한 문제에 부딪히면서, 독학하는 것을 겁내지 않게 되는 첫 계기가 되었습니다.</span>}
                                                </div>
                                                <span style={{float: 'right', marginTop: '1rem'}}>{page === 0 ? 1 : page}/{5}</span>
                                              </div>
                            : <div className='descTitle'>
                                {page === 0 && <span style={{fontSize: '2.5rem', color: 'cyan'}}>3D Game Items</span>}
                                <div className='descBody'>
                                    {page === 0 && <span>Programs Used: Blender, Marvelous Designer, Milkshape, and Adobe Photoshop<br></br>
                                      I used to make Custom Content (cc) items for The Sims 3 and Second Life, and shared them online.</span>}
                                    {page === 2 && <span>These are some of the promotional images I made for my items. </span>}
                                    {page === 3 && <span>Mostly I made clothing items, but sometimes decorative objects too.</span>}
                                    {page === 4 && <span>It was a fun opportunity to study new skills and I had a lot of fun designing and creating meshes, making promotional images, and connecting with other users. </span>}
                                    {page === 5 && <span>Looking up tutorials online, asking other people questions, and going through lots of trial and error helped me get used to studying by myself.</span>}
                                </div>
                                <span style={{float: 'right', marginTop: '1rem'}}>{page === 0 ? 1 : page}/{5}</span>
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
                              <div className='instructionsButtons' style={{marginRight: props.lang === 'Korean' ? '2.5rem' : '1.5rem'}}>
                                <div className='cross'/>
                                <dic className='buttonAB'>
                                  <div class='circle1'/>
                                  <div class='circle2'/>
                                </dic>
                              </div>
                              
                            </div>
                            <div className='steps'>
                              {props.lang === 'English' ? <span>Turn on the switch</span> : <span>스위치를 켜세요</span>}
                              {props.lang === 'English' ? <span>Click on any button</span> : <span>아무 버튼이나 누르세요</span>}
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
                                      {page === 6 && setPage(0)}
                                    {(page !== 2 && page !== 3) && <img src={page+1 >= projectPics.length ? projectPics[0] : projectPics[page+1]} alt='project1'/>}
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
                          <div className='buttonMoveContainer' onClick={() => checked && setPage(page >= projectPics.length-1 ? 0 : page+1)}>
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
