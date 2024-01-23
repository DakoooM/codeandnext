import { useCallback } from "react"
import { v4 as uuidv4 } from "uuid";

export default function useUtils() {
  const capitalize = useCallback(word => word.charAt(0).toUpperCase() + word.slice(1), []);
  const format = useCallback(number => number.toLocaleString("fr-FR"), []);
  const uuid = useCallback(() => uuidv4(), []);
  
  const secondsToHours = useCallback(totalSecs => {
    const totalMinutes = Math.floor(totalSecs / 60);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = totalSecs % 60;
  
    return [hours, minutes, seconds];
  }, []);

  const formatTime = useCallback((hours, minutes, seconds) => {
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
  
    if (hours !== "00") {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else {
      return `${minutes}m ${seconds}s`;
    }
  })

  const timeFormat = useCallback(seconds => {
    const [h, m, s] = secondsToHours(seconds);

    const time = formatTime(h, m, s);

    return time;
  })

  return { 
    timeFormat,
    capitalize,
    format,
    uuid,
  }
}