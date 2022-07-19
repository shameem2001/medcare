import React from 'react'

export default function Service() {
  return (
    <>
    <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Healthcare solutions at your fingertips</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Delivery</h4>
                        <p className="text-muted">Get prescribtions delivered from your nearest vendor after consultation.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Online Booking</h4>
                        <p className="text-muted">Choose your pick from registered Doctors and Hospitals.Filter them by their Location or Specialiaztion</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Online Consultation</h4>
                        <p className="text-muted">Meet your doctors from the comfirt of your home.</p>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
