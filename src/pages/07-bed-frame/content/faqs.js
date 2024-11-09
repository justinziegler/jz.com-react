import { getProductName } from "../../../components/utils/getProductName";

const productName = getProductName('UU')
const faqs = [
  {
    question: 'What is an upholstered bed frame?',
    answer: <p>Upholstered bed frames feature padding and either a textile or fabric overlay around the frame. The variations in design offer tufted and untufted headboards, for a sophisticated or more minimalist feel.</p>
  },
  {
    question: 'Does the ' + productName + ' require any tools for assembly?',
    answer: <p>All of the tools and hardware needed to put the ' + productName + ' together are included in your shipment—simply follow our step-by-step instructions for safe and easy assembly.</p>
  },
  {
    question: 'What is the ' + productName + ' made of?',
    answer: <>
              <div className='chart-head row'>
                <div className='col-xs-6'><p>Component</p></div>
                <div className='col-xs-6'><p>Material</p></div>
              </div>
              <div className='chart-body row'>
                <div className='col-xs-6'><p>Headboard</p></div>
                <div className='col-xs-6'><p>Wood</p></div>
                <div className='col-xs-6'><p>Rails</p></div>
                <div className='col-xs-6'><p>Wood</p></div>
                <div className='col-xs-6'><p>Slats</p></div>
                <div className='col-xs-6'><p>Wood</p></div>
                <div className='col-xs-6'><p>Fabric</p></div>
                <div className='col-xs-6'><p>Polyester</p></div>
                <div className='col-xs-6'><p>Center Beam</p></div>
                <div className='col-xs-6'><p>Steel</p></div>
                <div className='col-xs-6'><p>Corner Joint</p></div>
                <div className='col-xs-6'><p>Steel</p></div>
                <div className='col-xs-6'><p>Legs</p></div>
                <div className='col-xs-6'><p>Plastic</p></div>
                <div className='col-xs-6'><p>Screw</p></div>
                <div className='col-xs-6'><p>Steel</p></div>
              </div>
            </>
  }
];

export { faqs }