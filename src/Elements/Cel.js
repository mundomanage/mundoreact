import React from 'react'
import './cel.css'
import {GiFlexibleLamp} from 'react-icons/gi'
import {ImCalendar} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'

function Cel() {
    return (
        <>
        <div className='text-center ssss'>
            <h2>Вашиот влез во онлајн светот</h2>
            <p className='text-muted'>Зошто да не одберете нас</p>
            <div class="container">
    
    <div class="row">
      
      <div class="col-lg-3">
        <div class="card mb-5 mb-lg-0 fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Иновативни</h5>
            <h6 class="card-price text-center"><GiFlexibleLamp className='ikona'/><span class="period"></span></h6>
            <p>Ја користиме нашата креативност од многуте бројни проекти кои сме ги реализирале</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card fft ffs mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Доверливи</h5>
            <h6 class="card-price text-center"><FaHandsHelping className='ikona'/><span class="period"></span></h6>
            <p>Секогаш среќни и слободни да ви помогнеме во секое можно време со било каков проблем</p>
          </div>
        </div>
      </div>
     
      <div class="col-lg-3">
        <div class="card mb-5 mb-lg-0 fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Флексибилни</h5>
            <h6 class="card-price text-center"><ImCalendar className='ikona'/><span class="period"></span></h6>
            <p>Секогаш на време без задоцнување на реализацијата на вашиот проект</p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3">
        <div class="card fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Доверливи</h5>
            <h6 class="card-price text-center"><FaHandsHelping className='ikona'/><span class="period"></span></h6>
            <p>Секогаш среќни и слободни да ви помогнеме во секое можно време со било каков проблем</p>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <p className='text-muted'>Нашата цел е да го запознаеме вашиот бизнис со голем број на клиенти преку интернетот. На секој бизнис во светот му треба веб страна за да ги присвои своите купувачи</p>
  </div>
        </div>
    </>
    )
}

export default Cel
