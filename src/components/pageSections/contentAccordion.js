import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../scss/section-content-accordion.scss'

function ContentAccordion(props) {
  return (
    <>
      { props.accordionContent.map(content =>
        <section className='content-accordion'>
          <div className='container'>
            <div className='row'>
              <div className='heading col-xs-12'>
                <h2>{ content.heading }</h2>
              </div>
              <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
                <Accordion defaultActiveKey={ 0 }>
                  { content.items.map((item, index) =>
                    <Accordion.Item 
                      eventKey={ index } 
                      className={ item.className } 
                      key={ `accordion-${ index }` }
                    >
                      <Accordion.Header className={ item.icon ? 'collapsed icon' : 'collapsed' }>
                        { item.title }
                      </Accordion.Header>
                      <Accordion.Body>
                        { item.bullets ?
                          <ul>
                            { item.contents.map(content =>
                              <li>{ content.item }</li>
                            )}
                          </ul>
                          :
                          <p>
                            { item.contents.map(content =>
                              <>
                                { content.item }
                              </>
                            )}
                          </p>
                        } 
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ContentAccordion