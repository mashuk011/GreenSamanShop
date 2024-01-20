import React , {useState, useEffect} from 'react'
import '../Styles/DealsDay.css'

const DealsDayComp = ({targetDate}) => {
    const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
    
        if (difference <= 0) {
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          clearInterval(intervalRef.current);
        } else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      };
    
      const [days, setDays] = useState(0);
      const [hours, setHours] = useState(0);
      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const intervalRef = React.useRef(null);
    
      useEffect(() => {
        intervalRef.current = setInterval(calculateTimeRemaining, 1000);
            
        return () => clearInterval(intervalRef.current);
      }, []);
  return (
    <>

<div>
      <div>
        <span>{days}</span>
        <span>Days</span>
      </div>
      <div>
        <span>{hours}</span>
        <span>Hours</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>Minutes</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
      
    </>
  )
}

export default DealsDayComp
