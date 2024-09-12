import React, { useState, useContext  } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import '../../../scss/promotion-value-propositions.scss'

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
  
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const handleClick = useAccordionButton (
      eventKey,
      () => callback && callback(eventKey),
      setActiveIndex(activeEventKey)
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <h4
          type="button"
          style={{ pointerEvents: isCurrentEventKey ? 'none' : 'all', 
                   color: isCurrentEventKey ? '#5f8095' : '#0b2836' }}
          onClick={ handleClick  }
          key={ `btn${ eventKey }`}
        >
          {children}
        </h4>
    );
  }

  const [active, setActive] = useState(0)

  return (
    <section class="made-simple">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1">
            <h2>Mattress Buying<br /> Made Simple</h2>
            <div class="frame" data-current={ active }>
              <div class="stage">
                <Accordion defaultActiveKey={ 0 } flush  key={ `accordion`}>
                  { items.map((item, index) =>
                    <React.Fragment key={ `accordion${ index }`}>
                      <Card>
                        <Card.Header>
                          <ContextAwareToggle eventKey={ index }>{ item.title }</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={ index }>
                          <Card.Body>
                            <div class="content">
                              <p>{ item.details }</p>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </React.Fragment>
                  )}
                </Accordion>
              </div>
              <div class="dots">
                { items.map((item, index) =>
                  <button data-slide={ index } 
                    data-active={ index === activeIndex } 
                    tabIndex="0"
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