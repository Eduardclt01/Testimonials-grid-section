import TestimonialCard from '../testimonialCard/TestimonialCard'
import './testimonial-grid.css'

function TestimonialGrid(props) {
  return (
    <div className={props.className}>
      <div class="testimonial-grid">
        <div class="testimonial-grid-item testimonial-grid-item--1">
          <div class="testimonial-card">
            <TestimonialCard testimonial={props.testimonials[0]}></TestimonialCard>
          </div>
        </div>
        <div class="testimonial-grid-item testimonial-grid-item--2">
          <div class="testimonial-card">
            <TestimonialCard testimonial={props.testimonials[1]}></TestimonialCard>
          </div>
        </div>
        <div class="testimonial-grid-item testimonial-grid-item--3">
          <div class="testimonial-card">
            <TestimonialCard testimonial={props.testimonials[2]}></TestimonialCard>
          </div>
        </div>
        <div class="testimonial-grid-item testimonial-grid-item--4">
          <div class="testimonial-card">
            <TestimonialCard testimonial={props.testimonials[3]}></TestimonialCard>
          </div>
        </div>
        <div class="testimonial-grid-item testimonial-grid-item--5">
          <div class="testimonial-card">
            <TestimonialCard testimonial={props.testimonials[4]}></TestimonialCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialGrid;
