import './testimonial-card.css'
import QuotationMark from '../../assets/icons/bg-pattern-quotation.svg'

function TestimonialCard(props) {
  return (
    <div className={'testimonial-container ' + 'testimonial-container__'+props.testimonial.theme}>
      <img className={props.testimonial.theme == 'purple' ? 'quotation-mark' : 'hide'} src={QuotationMark} />
      <div className='padding-small'>
        <div className='testimonial__header'>
          <div className='testimonial__header--name'>
            {props.testimonial.name}
          </div>
          <div className='testimonial__header--role'>
            {props.testimonial.role}
          </div>
        </div>
        <div className='testimonial__body'>
          <div className='testimonial__body--heading'>
            {props.testimonial.heading}
          </div>
          <div className='testimonial__body--content'>
            {props.testimonial.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
