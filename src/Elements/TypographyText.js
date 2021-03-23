import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import './Typo.css'
import Particles from 'react-particles-js'

function TypographyText() {

    return (
        <div className='Overflowce'>
        <Jumbotron className=' text-center ptpt' style={{backgroundColor: "white"}}>
            <img className='planetka' src='https://cdn.discordapp.com/attachments/416272635199225861/821854794225287188/2cf30ffdbfa3db621d303e9575ff9e47.gif' alt='sd'/>
			<h1 className='mt-4 testerce text-center'>
				
            <Typewriter
                options={{
                    strings: ['Прецизност', 'Перфекција', 'Уникатност'],
                    autoStart: true,
                    loop: true,
                }}
                />
				<hr className='linija1'/>
				
            </h1>
			
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 350,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
            </Jumbotron>
            </div>
    )
}

export default TypographyText
