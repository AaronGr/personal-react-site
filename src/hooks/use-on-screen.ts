import { useEffect, useState } from "react";

export default function useOnScreen(ref: React.RefObject<Element>) {

    const [isIntersecting, setIntersecting] = useState(false)
  
  
    useEffect(() => { 
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {threshold: .5}
      );

        if (ref.current != null) {
            observer.observe(ref.current);
        }
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [ref]);
  
    return isIntersecting;
};