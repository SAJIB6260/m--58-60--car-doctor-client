import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
       <div>
         <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">Service</h3>
            <h2 className="text-5xl font-bold">Our Service Area</h2>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
           {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
           }
        </div>
        <div className="text-center">
            <button className="px-6 py-4 text-[#FF3811] border-2 border-[#FF3811] text-lg font-semibold rounded-md">More Services</button>
        </div>
       </div>
    );
};

export default Services;