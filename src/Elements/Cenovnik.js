import React from 'react'
import Background from './trianglify-v1-cs85g_cc5d2i.jpg'
import './cenovnik.css'
import {Particles} from 'react-particles-js'
import ScrollIntoView from 'react-scroll-into-view'

function Cenovnik() {
    return (
        <>
        {/* <h1 className='text-center'>Ценовник</h1> */}
        <section class="pricing py-5 mt-5">
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
	}} className='hahah'/>
  <div class="container">
    <h2 className='text-center text-white'>Ценовник</h2>
    <hr className='vsk'/>
    
    <div class="row">
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 fft shush">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Веб Страна</h5>
            <h6 class="card-price text-center">17.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен дизајн</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија (React.js)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Компатибилна за сите уреди</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Гратис Домен + Хостинг/1 година</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Можност за ажурирање</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Без база на податоци</li>
            </ul>
            <ScrollIntoView selector=".hahap">
              <a class="btn btn-block btn-primary text-uppercase shash">Нарачај</a>
            </ScrollIntoView>
          </div>
        </div>
      </div>
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 shush">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Веб Апликација</h5>
            <h6 class="card-price text-center">21.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен дизајн</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија (React.js и Node.js)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Компатибилна за сите уреди</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Гратис Домен + Хостинг/1 година</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Можност за ажурирање</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>База на податоци</li>
            </ul>
            <ScrollIntoView selector=".hahap">
              <a class="btn btn-block btn-primary text-uppercase shash">Нарачај</a>
            </ScrollIntoView>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card fft shush">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Мобилна Апликација</h5>
            <h6 class="card-price text-center">22.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Прикачување на App store и Google play</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Можност за тестирање</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен Дизајн</li>
            </ul>
            <ScrollIntoView selector=".hahap">
              <a class="btn btn-block btn-primary text-uppercase shash">Нарачај</a>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Cenovnik
