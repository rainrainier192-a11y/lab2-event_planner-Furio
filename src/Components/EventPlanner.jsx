import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">

                
                <h1>Welcome to Event Planner</h1>
            
          
            <section className="description">

                <p>
                    Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.
                </p>
                <button className="get-started-button">Get Started</button>
            </section> 

            
            <section className="events_categories"> 
            
                <ul>
                   
                    <h2>Social Events:</h2>                   
                        <li>Birthday Parties</li>
                        <li>Anniversary Celebrations</li>
                        <li>Wedding Receptions</li>
                        <li>Baby Showers</li>
                        <li>Graduation Parties</li>
                        <li>Family Reunions</li>
                </ul>
                    
                <ul>
                    <h2>Entertainment Events:</h2>                                      
                        <li>Concerts</li>
                        <li>Music Festivals</li>
                        <li>Film Screening</li>
                        <li>Comedy Shows</li>
                        <li>Art Exhibitions</li>
                        <li>Cultural Events</li>
                </ul>
                    
                <ul>
                    <h2>Community Events:</h2>       
                        <li>Fundraising Events</li>
                        <li>Charity Galas</li>
                        <li>Volunteer Drives</li>
                        <li>Neighborhood Block Parties</li>
                        <li>Community Festivals</li>
                        <li>Cultural Celebrations</li>
                </ul>               
            </section>

            
            <section className="features">  
               
                <h2>Features</h2> 

                <ul>
                    <li>Easy event creation and management</li>    
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>  
            </section>


            <section className="testimonials">
                <h2>Testimonials</h2>
                
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>

                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>  

            
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;