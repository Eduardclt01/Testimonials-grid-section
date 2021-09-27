import TestimonialCard from '../testimonialCard/TestimonialCard'
import './testimonial-grid.css'

function TestimonialGrid(props) {
  return (
    <div className='testimonial-grid grid'>
      <div className='row'>
        <div className='cell-10'>

          <div className='row'>
            <div className='cell-10 padding-xsmall'>
              <TestimonialCard testimonial={props.testimonials[0]}></TestimonialCard>
            </div>
            <div className='cell-2 padding-xsmall'>
              <TestimonialCard testimonial={props.testimonials[1]}></TestimonialCard>
            </div>
          </div>

          <div className='row'>
            <div className='cell-2 padding-xsmall'>
              <TestimonialCard testimonial={props.testimonials[2]}></TestimonialCard>
            </div>
            <div className='cell-10 padding-xsmall'>
              <TestimonialCard testimonial={props.testimonials[3]}></TestimonialCard>
            </div>
          </div>
        </div>

        <div className='cell-2 padding-xsmall'>
          <TestimonialCard testimonial={props.testimonials[4]}></TestimonialCard>
        </div>
      </div>
    </div>
  );
}

export default TestimonialGrid;
