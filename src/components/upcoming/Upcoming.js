import React from "react";
import './Upcoming.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gradient from '../../assets/Gradient.png';
import PESlogo from '../../assets/PESlogo.png';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Upcoming = () => {
    return (
        <div className="upcoming">

            <div className="upcoming-heading">
                <h1>ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು</h1>
            </div>

            <div className="eventcards">
                    
                    {/* this cards can be easily edited. */}
                    {/* this is for odugoodu */}
                    <Card style={{ width: '353px', height:'360px', background:'#FFFDE7',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:'5px' }}>
                        
                        <Card.Body>
                            <Card.Img variant="top" src={image1} style={{height:'200px', width:'320px',}} />
                            
                            <Card.Text variant="bottom" style={{alignContent:'center',position:"absolute",width:'320px',height:'130px',background:'#FFE072',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:' 0px 0px 5px 5px'}} >
                                <h3 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'1700px',fontSize:'32px',lineHeight:'44px',color:'#291901'}}>ಕನ್ನಡ ಓದುಗೂಡು</h3>
                                <h5 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'700px',fontSize:'24px',lineHeight:'29px',color:'#291901'}}>೨೫ - ೦೩ - ೨೦೨೩</h5>
                            </Card.Text>
    
                        </Card.Body>
                    </Card>
                
                    {/* for ideathon */}

                    <Card style={{ alignItems:"stretch",margin:'10px', width: '353px', height:'360px', background:'#FFFDE7',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:'5px' }}>
                        
                        <Card.Body>
                            <Card.Img variant="top" src={image2} style={{height:'200px', width:'320px'}} />
                            
                            <Card.Text variant="bottom" style={{alignContent:'center',position:"absolute",width:'320px',height:'130px',background:'#FFE072',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:' 0px 0px 5px 5px'}} >
                                <h3 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'1700px',fontSize:'32px',lineHeight:'44px',color:'#291901'}}>ಕನ್ನಡ ಐಡಿಯಾಥಾನ್</h3>
                                <h5 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'700px',fontSize:'24px',lineHeight:'29px',color:'#291901'}}>೨೫ - ೦೩ - ೨೦೨೩</h5>
                            </Card.Text>
    
                        </Card.Body>
                    </Card>


                    {/* for kannada dina during AT. */}
                    <Card style={{ alignItems:"stretch",margin:'10px', width: '353px', height:'360px', background:'#FFFDE7',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:'5px' }}>
                        
                        <Card.Body>
                            <Card.Img variant="top" src={image3} style={{height:'200px', width:'320px'}} />
                            
                            <Card.Text variant="bottom" style={{alignContent:'center',position:"absolute",width:'320px',height:'130px',background:'#FFE072',boxShadow : '4px 3px 6px rgba(0, 0, 0, 0.25)',borderRadius:' 0px 0px 5px 5px'}} >
                                <h3 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'1700px',fontSize:'32px',lineHeight:'44px',color:'#291901'}}>ಎ ಟಿ ಕನ್ನಡ ದಿನ</h3>
                                <h5 style={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'700px',fontSize:'24px',lineHeight:'29px',color:'#291901'}}>೨೫ - ೦೩ - ೨೦೨೩</h5>
                            </Card.Text>
    
                        </Card.Body>
                    </Card>



                   

            </div>
        </div>
    )
}

export default Upcoming;