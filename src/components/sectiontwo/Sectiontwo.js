import React, { Component } from 'react'
import { getText } from '../../locales'

export default class Sectiontwo extends Component {
  render() {
    return (
        <>
            <div className='container'>
                <div className='section-two'>
                    <div className='title'>
                            {getText('SECTIONTWO_TITLE')}
                    </div>
                    <div  className="for-imgs">
                        <div className='img-box'>
                            <img alt='img' src='images/img1.png' />
                            <div className='des'>{getText('IMG1')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img2.png' />
                            <div className='des'>{getText('IMG2')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img3.png' />
                            <div className='des'>{getText('IMG3')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img4.png' />
                            <div className='des'>{getText('IMG4')}</div>
                        </div>
                    </div>
                    <div className="for-imgs">
                        <div className='img-box'>
                            <img alt='img' src='images/img5.png' />
                            <div className='des'>{getText('IMG5')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img6.png' />
                            <div className='des'>{getText('IMG6')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img7.png' />
                            <div className='des'>{getText('IMG7')}</div>
                        </div>
                        <div className='img-box'>
                            <img alt='img' src='images/img8.png' />
                            <div className='des'>{getText('IMG8')}</div>
                        </div>
                    </div>
                    <button className='secBtn'>{ getText('SEEALL')}<img alt='arrowimg' src='images/arrow.png'/></button>
                </div>
            </div>
      </>
    )
  }
}
