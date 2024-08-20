import { getProductName } from "../../../components/utils/getProductName";

const productName = getProductName('UU')
const faqs = [
  {
    question: 'What is an upholstered bed frame?',
    answer: 'Upholstered bed frames feature padding and either a textile or fabric overlay around the frame. The variations in design offer tufted and untufted headboards, for a sophisticated or more minimalist feel.'
  },
  {
    question: 'Does the ' + productName + ' require any tools for assembly?',
    answer: 'All of the tools and hardware needed to put the ' + productName + ' together are included in your shipment—simply follow our step-by-step instructions for safe and easy assembly.'
  },
  {
    question: 'What is the ' + productName + ' made of?',
    answer: <>
              <div class='chart-head row'>
                <div class='col-xs-6'><p>Component</p></div>
                <div class='col-xs-6'><p>Material</p></div>
              </div>
              <div class='chart-body row'>
                <div class='col-xs-6'><p>Headboard</p></div>
                <div class='col-xs-6'><p>Wood</p></div>
                <div class='col-xs-6'><p>Rails</p></div>
                <div class='col-xs-6'><p>Wood</p></div>
                <div class='col-xs-6'><p>Slats</p></div>
                <div class='col-xs-6'><p>Wood</p></div>
                <div class='col-xs-6'><p>Fabric</p></div>
                <div class='col-xs-6'><p>Polyester</p></div>
                <div class='col-xs-6'><p>Center Beam</p></div>
                <div class='col-xs-6'><p>Steel</p></div>
                <div class='col-xs-6'><p>Corner Joint</p></div>
                <div class='col-xs-6'><p>Steel</p></div>
                <div class='col-xs-6'><p>Legs</p></div>
                <div class='col-xs-6'><p>Plastic</p></div>
                <div class='col-xs-6'><p>Screw</p></div>
                <div class='col-xs-6'><p>Steel</p></div>
              </div>
            </>
  }
];

export { faqs }