import { preventDefault } from '../../../components/utils/preventDefault';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h2>Kiss Bad Sleep <span>Goodbye</span></h2>
            <div className='goodbye'></div>
            <a href='./' className='btn btn-default' onClick={ preventDefault } >See the Mattress</a>
            <ul>
              <li><a href='./' onClick={ preventDefault } >Contact Us</a></li>
              <li><a href='./' onClick={ preventDefault } >Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;