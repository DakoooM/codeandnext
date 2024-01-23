import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export function InputPassword({
  uniqueId = "",
  defaultValue = "",
  ...props
}) {
  const [ showPass, setShowPass ] = useState(false);

  return (
    <div className="InputEmail">
      <input
        type={showPass ? "text" : "password"}
        id={uniqueId}
        className="Input"
        value={defaultValue}
        {...props}
      />

      <span className="passwdIcon" onClick={() => setShowPass(b => !b)}>
        {showPass ? <AiOutlineEyeInvisible className="icon"/> : <AiOutlineEye className="icon"/>}
      </span>
    </div>
  )
}

export function Input({
  type = "text",
  uniqueId = "",
  ...props
}) {
  if (type === "password") {
    return <InputPassword uniqueId={uniqueId} autoComplete="on" {...props}/>
  }

  return <input
    type={type}
    id={uniqueId}
    className="Input"
    autoComplete="on"
    {...props}
  />
}

export function InputWithLabel({
  type = "text",
  cls_label = "",
  label = "Label",
  value = "",
  disabled = false,
  onChange = () => { },
  formRef = undefined,
  holder = "",
  required = false,
  ...props
}) {
  const generateId = uuidv4();

  function onKeyPressed(e, form) {
    const { key } = e;

    if (key.toLowerCase() === "enter") {
      console.log("pressed 'enter' key", "form is defined ?=", form);

      if (form && form.current) form.current.submit();
    }
  }

  return (
    <div className="input-group">
      <label htmlFor={generateId} className={`Label ${cls_label}`}>{label}</label>
      <Input
        type={type}
        uniqueId={generateId}
        onKeyUp={e => onKeyPressed(e, formRef)}
        onChange={e => onChange(e)}
        value={value}
        disabled={disabled}
        required={required}
        placeholder={holder}
        {...props}
      />
    </div>
  )
}

export function TextAreaWithLabel({
  type = "text",
  cls_label = "",
  label = "Label",
  value = "",
  disabled = false,
  onChange = () => {},
  formRef = undefined,
  holder = "",
  required = false,
  ...props
}) {
  const generateId = uuidv4();

  return (
    <div className="input-group">
      <label htmlFor={generateId} className={`Label ${cls_label}`}>{label}</label>

      <textarea 
        className="InputArea" 
        id={generateId} 
        placeholder={holder} 
        value={value}
        onChange={e => onChange(e)} 
        {...props}
      />
    </div>
  )
}