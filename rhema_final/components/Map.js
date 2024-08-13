import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
        <div id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.130864626718!2d36.81618457752322!3d-1.2832532552386425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1128b0d8e4d3%3A0xe7b75f40c8f2a2f1!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1691872604690!5m2!1sen!2sus" className="map" allowFullScreen="">
            </iframe>
        </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
