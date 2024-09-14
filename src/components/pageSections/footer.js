import React from 'react';
import { social, products, research, support, resources, company } from '../data/footerLinks';
import { preventDefault } from '../utils/preventDefault';
import '../../scss/footer.scss'

function Footer(props) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='footer-contact col-xs-12 col-md-4'>
            <div className='row'>
              <div className='footer-here-to-help col-xs-12 col-sm-5 col-sm-offset-1 col-md-12 col-md-offset-0'>
                <h4>We're Here to Help</h4>
                <p>Monday–Saturday, 6am to 6pm PST</p>
              </div>
              <div className='footer-call-email col-xs-12 col-sm-5 col-md-12'>
                <div className='row'>
                  <div className='col-xs-6'>
                    <a href='tel:+18005015845' className='text' tabIndex='0' rel='nooopener noreferrer' onClick={ preventDefault }>
                      <h5>Call or Text</h5>
                      <p>1-800-501-5845</p>
                    </a>
                  </div>
                  <div className='col-xs-6'>
                    <a href='#' tabIndex='0' onClick={ preventDefault }>
                      <h5>Email</h5>
                      <p>support@lull.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='footer-social col-xs-7 col-sm-5 col-sm-offset-1 col-md-12 col-md-offset-0'>
                <ul>
                  { social.map((item, index) =>
                    <React.Fragment key={ `social-${ index }` }>
                      <li>
                        <a href={ item.link } 
                          className={ item.className } 
                          aria-label={ item.title } 
                          target='_blank' 
                          rel='noreferrer' 
                          tabIndex='0'
                          onClick={ preventDefault }
                        >
                          { item.title }
                        </a>
                      </li>
                      { index === 3 &&
                        <br className='hidden-lg' />
                      }
                    </React.Fragment>
                  )}
                </ul>
              </div>
              <div className='footer-brand col-xs-5 col-sm-5 col-md-12 col-md-offset-0'>
                <a href='https://lull.com' className='footer-logo-lull' role='img' aria-label='Lull home' tabIndex='0'>
                  <span className='sr-only'  onClick={ preventDefault }>Lull</span>
                </a>
                <a href='http://www.bbb.org/santa-barbara/business-reviews/mattresses/lull-in-santa-barbara-ca-92014258/' target='_blank' className='footer-bbb' rel='noreferrer' role='img' aria-label='Lull on the Better Business Bureau' onClick={ preventDefault }>
                  <span className='sr-only'>Better Business Bureau</span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-0'>
            <div className='row'>
              <div className='col-xs-6 col-sm-4'>
                <h6>Products</h6>
                <ul className='products'>
                  { products.map((item, index) =>
                    <li key={ `products-${ index }` }><a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a></li>
                  )}
                </ul>
              </div>
              <div className='center-col col-xs-6 col-sm-4'>
                <h6>Research</h6>
                <ul className='research'>
                  { research.map((item, index) =>
                    <li 
                      className={ index > 3 ? 'visible-xs' : undefined}  
                      key={ `research-${ index }` }
                    >
                      <a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a>
                    </li>
                  )}		
                </ul>
                <h6 className='hidden-xs'>Support</h6>
                <ul className='hidden-xs'>				
                  { support.map((item, index) =>
                    <li key={ `support-a-${ index }` }>
                      <a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a>
                    </li>
                  )}		
                </ul>
              </div>
              <div className='right-col hidden-xs col-sm-4'>
                <h6>Resources</h6>
                <ul className='products'>
                  { resources.map((item, index) =>
                    <li key={ `resources-${ index }` }><a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a></li>
                  )}
                </ul>
                <h6>Company</h6>
                <ul>
                  { company.map((item, index) =>
                    <li key={ `company-${ index }` }><a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a></li>
                  )}
                </ul>
              </div>
            </div>
            <div className='footer-company row visible-xs'>
              <div className='col-xs-6 col-sm-4'>
                <h6>Support</h6>
                <ul>
                  { support.map((item, index) =>
                    <li key={ `support-b-${ index }` }><a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a></li>
                  )}	
                </ul>
              </div>
              <div className='col-xs-6 col-sm-4'>
                <h6>Company</h6>
                <ul>
                  { company.map((item, index) =>
                    <li key={ `company-b-${ index }` }><a href={ item.link } tabIndex='0' onClick={ preventDefault }>{ item.title }</a></li>
                  )}
                </ul>
              </div>
            </div>	
          </div>
        </div>
        <div id='copyright'>
          &copy;<span id='year'>{ currentYear }</span> Lull
        </div>
      </div>
    </footer>
  )
}

export default Footer