import React, { useState, useContext  } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import '../../../scss/promotion-value-propositions.scss'

function ContextAwareToggle({ children, eventKey, setActiveIndex }) {
  const { activeEventKey } = useContext(AccordionContext);
  const handleClick = useAccordionButton (
    eventKey,
    setActiveIndex(activeEventKey)
  );
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <h4
      type='button'
      style={{ pointerEvents: isCurrentEventKey ? 'none' : 'all', 
                color: isCurrentEventKey ? '#5f8095' : '#0b2836' }}
      onClick={ handleClick  }
      key={ `btn${ eventKey }`}
    >
      {children}
    </h4>
  );
}

function MadeSimple(props) {
  const items = [
    {
      title: 'Free Shipping & Easy Returns',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi a euismod bibendum. Sed congue sem at aliquet interdum.'
    },
    {
      title: '365 Night Trial',
      details: 'Donec vehicula porta metus, id malesuada massa ornare in. Vivamus vitae nisi aliquet, luctus urna sed, viverra leo.'
    },
    {
      title: 'Lifetime Warranty',
      details: 'Ut pellentesque id nisi vitae bibendum. Proin a consectetur magna. Nam sit amet metus ac metus condimentum aliquet.'
    },
    {
      title: 'Easy Financing Available',
      details: 'Aliquam erat volutpat. Suspendisse vitae lectus id massa tristique mattis. Nunc consectetur luctus augue sed'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='made-simple'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1'>
            <h2>Mattress Buying<br /> Made Simple</h2>
            <div className='frame' data-current={ activeIndex }>
              <div className='stage'>
                <Accordion defaultActiveKey={ 0 } flush  key={ `accordion`}>
                  { items.map((item, index) =>
                    <React.Fragment key={ `accordion${ index }`}>
                      <Card>
                        <Card.Header>
                          <ContextAwareToggle 
                            eventKey={ index }
                            setActiveIndex={ setActiveIndex }
                          >{ item.title }</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={ index }>
                          <Card.Body>
                            <div className='content'>
                              <p>{ item.details }</p>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </React.Fragment>
                  )}
                </Accordion>
              </div>
              <div className='dots'>
                { items.map((item, index) =>
                  <button data-slide={ index } 
                    data-active={ index === activeIndex } 
                    tabIndex='0'
                    key={ `dot${ index }`}
                    >
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MadeSimple