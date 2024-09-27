import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import '../../scss/sections/faqs.scss'

function Faqs(props) {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h2>Top Questions</h2>
          </div>
          <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
            <Accordion defaultActiveKey={ 0 }>
              { props.faqs.map((faq, index) =>
                <Accordion.Item eventKey={ index } key={ `faq-${ index }` }>
                  <Accordion.Header>{ faq.question }</Accordion.Header>
                  <Accordion.Body>
                    { faq.answer }
                  </Accordion.Body>
                </Accordion.Item>
              )}					
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs