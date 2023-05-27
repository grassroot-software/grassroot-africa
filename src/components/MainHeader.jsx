import { useState, useEffect, useRef,} from "react"
import Header from "./Header"

import HeaderImage1 from "../images/background.jpg"
import HeaderImage2 from "../images/background4.jpg" 

const MainHeader = () =>{
        
    const backgrounds =[
        {
            image: HeaderImage1,
            title: "WELCOME TO GRASSROOT",
            subtitle: "Learn behind  bars - Leave ready to  make a difference in the world",
            extra: "Promoting the reintegration of offenders into society through a process of transformative learning"
        },
        {
            image: HeaderImage2,
            title: "WELCOME TO GRASSROOT",
            subtitle: "Learn behind  bars - Leave ready to  make a difference in the world",
            extra: "Promoting the reintegration of offenders into society through a process of transformative learning"
        }
    ]

    // Code to automate transition
    
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);
    const delay = 10000;
    const {image, title, subtitle, extra} = backgrounds[index];
    

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);


    return(

        <>
        <Header style= {{ transform: `translate3d(${-index * 100}%, 0, 0)` }} title = {title} image={image}> 
        <i>{subtitle}</i> <h4>{extra}</h4> 
        </Header>
        </>
    )
}

export default MainHeader;