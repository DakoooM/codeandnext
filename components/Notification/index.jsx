import useDocument from "@/hooks/useDocument";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom"
import { IoIosCheckmarkCircleOutline, IoIosClose, IoIosWarning } from "react-icons/io";
import { MdReportGmailerrorred, MdOutlineInfo } from "react-icons/md";

/* 
    Example of usage:

    const [notif, setDataNotif] = useState({show: false, time: 10});
    <Notification show={notif.show} onClose={() => setDataNotif({show: false, time: 10})} time={notif.time}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Notification>
    <button type="button" onClick={() => setDataNotif({show: true, time: 15})}>Appuyez déclencher notification</button>
*/
export default function Notification({
  show = false,
  time = 5,
  onClose = () => { },
  children = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam pariatur? Distinctio molestiae vero laudantium officia, veniam aliquam consectetur iste.",
  type = "error" /* success, warning, error, info */
}) {
  const documentObj = useDocument();
  const [duration, setDuration] = useState(time);

  useEffect(() => {
    if (show === true) {
      const interval = setTimeout(() => {
        setDuration(time => time - 1);
      }, 1 * 1000);

      if (duration === 0) {
        clearTimeout(interval);
        setDuration(time);
        onClose();
      }

      return () => clearTimeout(interval);
    }
  }, [show, duration]);

  const NotifContent = (
    <div className={show ? `Notify_Container ${type}` : `Notify_Container ${type} hide`}>
      <div className="Notify">
        {type === "success" ? (
          <IoIosCheckmarkCircleOutline className="Icon" />
        ) : type === "warning" ? (
          <IoIosWarning className="Icon" />
        ) : type === "error" ? (
          <MdReportGmailerrorred className="Icon" />
        ) : (
          <MdOutlineInfo className="Icon" />
        )}

        <div className="Message">
          {children}
        </div>

        <IoIosClose className="Close" onClick={() => onClose()} />
      </div>
    </div>
  );

  if(!documentObj) return undefined;

  return createPortal(NotifContent, documentObj.body);
}