function Faqs(props) {
  const faqs = [
    {
      username: 'lullfan_1',
      question: 'How does the 365-Night Trial work for the Lull mattress?',
      answer: 'After you order your Lull mattress, we\'ll ship it right to your doorstep for free. Try it out in your home for a full year. If you don\'t love it within the first 365 nights, arrange a quick and easy return. We\'ll even send a courier to pick up the mattress for free!',
      date: '2021-01-31'
    },
    {
      username: 'mr_sandman',
      question: 'Does the mattress sleep hot like other memory foam mattresses?',
      answer: 'The Lull mattress is designed to keep you comfortable all night long. The top layer of the mattress is made of 1.5” gel infused viscoelastic memory foam. This layer provides dramatically enhanced air flow and draws heat away from your body.',
      date: '2021-02-01'
    },
    {
      username: 'savy_snoozer',
      question: 'How do I get the mattress back in the box?',
      answer: 'You don\'t. We pick it up fully expanded. If you are not completely satisfied with your sleeping experience within the first 365 nights, we will arrange for a free pickup and removal of your Lull mattress in its expanded form. Lull makes every effort possible to donate returned trial mattresses to charities and organizations in need of beds.',
      date: '2021-02-02'
    },
    {
      username: 'dr_dreamzz',
      question: 'How long before I receive my mattress?',
      answer: 'Lull mattresses typically ships in 1-4 business days following your order. Once your mattress has shipped, we will provide you with information to track your order.',
      date: '2021-02-03'
    }
  ]
  return (
    <section className='faqs' data-active={ props.activeNavItem === 'faqs' }>
      <div className='close' onClick={ props.closeSection }></div>
      <div className='faqs-heading'>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className='container faqs-container'>
        <div className='row'>
          <div className='faqs-content col-xs-12'>
            { faqs.map((faq, index) =>
              <div className='faq-question' key={ `faq-${ index }` }>
                <div className='user icon'></div>
                <h3>{ faq.username }</h3>
                <p>{ faq.question }</p>
                <p className='date'>{ faq.date }</p>
                <div className='faq-answer'>
                  <div className='logo icon'></div>
                  <h3>
                    lull <span className='checkmark icon'></span> 
                    <span className='teal'> <sup>.</sup></span> 
                    <span className='pink'>Creator</span>
                  </h3>
                  <p>{ faq.answer }</p>
                  <p className='date'>{ faq.date }</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs