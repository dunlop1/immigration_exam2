import React from 'react';
import './About.css';

import reviewStars from '../../resources/review-stars.png'

function About() {
    return (
        <div className="about-container" id="about">
            <div className="left-about">
                <div className="left-about-info">
                    <h2>We do immigration exams for
                        anyone who currently lives in
                        Canada.
                    </h2>
                </div>
                <div className="left-about-note">
                    <p>To book an appointment, please call or email our clinic today. </p>
                </div>
                <div className="left-about-call-box">
                    <div className="left-about-call-box1 btn-red">
                        <p>CALL NOW TO BOOK</p>
                        <p>604.356.3617</p>
                        <p><span>(8 am till 8pm)</span></p>
                    </div>
                    <div className="left-about-call-box2 btn-red">
                        <p>Schedule</p>
                        <p>Appointment</p>
                    </div>
                </div>
                <div className="left-about-clinic-hours">
                    Clinic hours:<br/>
                    Monday to Friady from 9 am till 5pm,<br/>
                    Saturday: 9 am till 1pm.
                </div>
                <div className="left-about-reviews">
                    <h2 className="review-title">Reviews</h2>
                    <div className="review">
                        <img  className="review-stars" src={reviewStars} alt="reviewStars"/>
                        <div className="review-initial">G</div>
                        <p>The doctor's exam involves a health questionnaire plus a
                        general physical examination.</p>
                    </div>
                    <div className="review">
                        <img className="review-stars" src={reviewStars} alt="reviewStars"/>
                        <div className="review-initial">G</div>
                        <p>The doctor's exam involves a health questionnaire plus a
                        general physical examination.</p>
                    </div>
                </div>
            </div>
            <div className="right-about" >
                <div className="about-exam">
                    <div className="exam-title">
                        About exam
                    </div>
                    <p className="exam-paragraph">
                    The doctor's exam involvesa health questionnaire plus a general physical <br/>
                    examination. Doctor will listen to your heart and lungs, and check your skin,<br/>
                    among other things. This requires removing some clothing. <br/></p>
                    <h2 className="exam-subtitle">
                    Any other required testing depends on the age of the applicant:
                    </h2>
                    <li className="exam-paragraph">
                    ●Urine test (age 5 and older)
                    </li>
                    <li className="exam-paragraph">
                    ●Chest x-ray (age 11 or older). If you are pregnant, you may need to return for <br/>
                    an x-ray when it is safer for the growing baby. This is a standard safety <br/>
                    precaution for women who are pregnant. It won't affect the outcome of your <br/>
                    immigration application. 
                    </li>
                    <li className="exam-paragraph">
                    ●Blood tests for syphilis and HIV (age 15 or older).
                    </li>
                    <br/>
                </div>
                <div className="right-checklist">
                    <h2 className="checklist-title">
                    Exam Checklist
                    </h2>
                    <h2 className="checklist-subtitle">
                    What to bring:
                    </h2>
                    <p className="checklist-paragraph">
                    1. Valid identification: Passport or Canadian Driver's License <br/>
                    2. Medical Report - Client Biodata and Summary Form - IMM 1017 (if <br/>
                    applicable. NOT required for upfront exam). <br/>
                    3. All prescription medication, names and dosages (if applicable) <br/>
                    4. Glasses for the vision test (if you wear them) <br/>
                    5. Payment
                    </p>
                </div>
                <div className="about-exam-notes">
                    <li><span className="dot-text-pink">●</span>You don't need to bring photos.</li>
                    <li><span className="dot-text-pink">●</span>No fasting is required.</li>
                </div>
            </div>
        </div>
    );
}

export default About;