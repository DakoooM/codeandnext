import { useCallback, useState } from "react";

export default function useGeneratedPassword(passwordLength = 8) {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = useCallback(() => {
    var generatedStr = "";
    var passChar = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * passChar.length);
      generatedStr += passChar.substring(randomNumber, randomNumber + 1);
    }

    setGeneratedPassword(generatedStr);
  }, [ passwordLength ]);

  return [ generatedPassword, generatePassword ];
}