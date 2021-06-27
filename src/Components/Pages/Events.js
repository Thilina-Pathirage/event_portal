import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        Axios.get("https://event-portal-thilina.herokuapp.com/events").then(res => {
            setEvents(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])



    const eventItem = events.slice(0).reverse().map((i, k) => {
        return (

            <div>
                <div className="inner2" key={k}>
                    <h3 className="topic2">{i.title}</h3>
                    <br />
                    <h5>{i.start_date} @ {i.start_time} in {i.location}</h5>
                    <p>
                        {i.description}
                    </p>
                    <div title="Add to Calendar" className="addeventatc">
                        Add to Calendar
                        <span className="start">{i.start_date} {i.start_time}</span>
                        <span className="end">{i.end_date} {i.end_time}</span>
                        <span className="timezone">{i.timezone}</span>
                        <span className="title">{i.title}</span>
                        <span className="description">{i.description}</span>
                        <span className="location">{i.location}</span>
                    </div>
                    {i.online_link ? <a className="btn-grad btn my-button2 " href={i.online_link}>Join now!</a> : ""}
                    <a className="btn-grad3 btn my-button3 " href> <i className="far fa-trash-alt"></i></a>
                </div>
            </div>

        );
    })
    return (
        <div>
            <br />
            {eventItem}
        </div>
    );
}

export default Events;