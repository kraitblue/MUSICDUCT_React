import React, {useState, useEffect} from 'react'
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Contact from "../components/Contact";


const Home = () => {
    const [ setUserName] = useState('');
    const [ setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div>
            <Slider />
            <Categories />
            <Contact />    
            </div>
            
        </>
    )
}

export default Home
