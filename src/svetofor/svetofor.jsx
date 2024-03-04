import { useEffect, useState } from "react";


const Svetofor = () => {

  const [time, setTime] = useState(15, 3, 15);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((time) => {
         const [red, yellow, green] = time;
          if (red) {
            return [red - 1, yellow, green];
          } else if (yellow) {
            return [red, yellow - 1, green];
         } else if (green) {
            return [red, yellow, green - 1];
         }
        });
     }, 1000);

      return () => {
       clearInterval(interval);
     };
    }, []);

    console.log(time);
}



export default Svetofor