import React, { useState } from 'react'
import { Image } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';

import cover from './cover.jpg'
import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import './contactuscss.css'
const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`mailto:envoi.online@gmail.com?subject=Sample&body=${body}`)
    }
    return (

        <div className="contactUs">
            <Helmet>
                <title>Contact us</title>
            </Helmet>
        <div className="headinggh">
           
            <div className="text">
                <h2>Contact us</h2>  
            </div>
              
        </div>
        
        <br></br>
        <br></br>

        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement       pointerEvents="none"  children={<BsEnvelope className = 'envolope' color="gray.300" />}/>
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" placeholder="Your Email Address"/>
                        </InputGroup>
                        
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>Sri Venkateswara college of Engineering,
                            Pennalur, Sriperumbudur - 602117</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Lets Talk</h3>
                        <p className="infoCtn">(+91) 9080372115</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Sale Support</h3>
                        <p className="infoCtn">envoi.online@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Contactus
