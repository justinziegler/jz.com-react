import React     from 'react'
import Accordion from 'react-bootstrap/Accordion'
import '../../scss/sections/content-accordion.scss'

function ContentAccordion(props) {
  return (
    <>
      { props.accordionContent.map((content, index) =>
        <section className='content-accordion' key={ `accordion-${ index }` }>
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
                          <ul key={ 'bullets' }>
                            { item.contents.map((content, index) =>
                              <li key={ `bullet-${ index }` }>{ content.item }</li>
                            )}
                          </ul>
                          :
                          <p>
                            { item.contents.map((content, index) =>
                              <React.Fragment key={ `item-${ index }` }>
                                { content.item }
                              </React.Fragment>
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