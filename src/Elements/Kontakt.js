import React from 'react'
import {FaPhoneSquareAlt, FaInstagramSquare, FaFacebookF} from 'react-icons/fa'
import {FcContacts} from 'react-icons/fc'
import {ImFacebook2} from 'react-icons/im'
import fbc from './download.png'
import inc from './instagram.png.crdownload'
import ema from './email.png'
import twi from './twitter.png'
import './kontakt.css'

function Kontakt() {


    return (
        <div className='text-center mt-5 hahap'>
            <h2 className='mt-5'>24/7 Подршка. Слободни во секое време</h2>
            <hr className='hr'/>
            <div className='row ssv'>
            <div class="col-sm mt-5">
                <FcContacts className='ikona'/><br/>
                <p><strong>Контактирајте не</strong></p>
                <p>(+389)78-265-509</p>
            </div>
            <div class="col-sm mt-5">
                <img src={fbc} width='50px'/><br/>
                <p><strong>Заследете не</strong></p>
                <a href='https://www.facebook.com/mundomojwebsite' target='_blank'>www.facebook.com</a>
            </div>
            <div class="col-sm mt-5">
                <img src={inc} width='50px'/><br/>
                <p><strong>Заследете не</strong></p>
                <a href=''>www.instagram.com</a>
            </div>
            </div>
            <div className='row ssv'>
            <div class="col-sm mt-5">
                <img src={ema} width='50px'/><br/>
                <p><strong>Контактирајте не</strong></p>
                <p>mundo@manage.com</p>
            </div>
            <div class="col-sm mt-5">
                <img src={twi} width='50px'/><br/>
                <p><strong>Заследете не</strong></p>
                <a href=''>www.twitter.com</a>
            </div>
            </div>
        </div>
    )
}

export default Kontakt
