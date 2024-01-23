import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button";
import { InputWithLabel } from "../Inputs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import TextLine from "../TextLine";
import useGeneratedPassword from "@/hooks/useGenerate";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useModal } from "@/hooks/useModal";

export function SignupPage() {
  const { infos } = useModal();
  const [ signWith, signIsLoading ] = useAuth();
  const SignupForm = useRef(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [generatedPass, generatePassword] = useGeneratedPassword(12);

  const onSubmitSignUp = (e) => {
    e.preventDefault();

    console.log("form submitted");
  }

  useEffect(() => {
    setPasswordValue(generatedPass);
  }, [generatedPass]);

  return (
    <form onSubmit={e => onSubmitSignUp(e)} ref={SignupForm} className="form-signup">
      <InputWithLabel
        type="email"
        label="Email"
        holder="johndoe@gmail.com"
        onChange={e => setEmailValue(e.target.value)}
        value={emailValue}
        formRef={SignupForm}
        disabled={signIsLoading}
        required
      />

      <InputWithLabel
        type="password"
        label="Mot de passe"
        holder="codeandchil2023"
        formRef={SignupForm}
        onChange={e => setPasswordValue(e.target.value)}
        value={passwordValue}
        disabled={signIsLoading}
        minLength={5}
        required
      />

      <div className="flex_buttons">
        <Button theme="primary" isLoading={signIsLoading} flex={true} onClick={generatePassword} title="Générer automatiquement un mot de passe">Générer</Button>
        <Button type="submit" isLoading={signIsLoading} flex={true} theme="success">{"S'inscrire"}</Button>
      </div>

      <p className="already_register" onClick={() => infos(true, "login")}>Déja inscrit ? Connecter vous dès maintenant!</p>

      <TextLine text="Ou s'inscrire depuis" mBottom={10} />

      <div className="btns-flex">
        <Button onClick={() => signWith("google")} disabled={signIsLoading} theme="" variant="outlined" flex={true} icon={<FcGoogle />} borderSize={2} borderColor="black" color="black">
          Google
        </Button>

        <Button onClick={() => signWith("github")} disabled={signIsLoading} icon={<FaGithub />} flex={true} color="white" borderColor="#2f3337" bgColor="#2f3337">
          Github
        </Button>

        <Button onClick={() => signWith("facebook")} disabled={signIsLoading} icon={<FaFacebookF />} flex={true} color="white" borderColor="#385499" bgColor="#385499">
          Facebook
        </Button>
      </div>
    </form>
  )
}

export function LoginPage() {
  const { infos } = useModal();
  const LoginForm = useRef(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();

    console.log("form submitted");
  }


  return (
    <form onSubmit={e => onSubmitLogin(e)} ref={LoginForm} className="form-signup">
      <InputWithLabel
        type="email"
        label="Email"
        holder="johndoe@gmail.com"
        onChange={e => setEmailValue(e.target.value)}
        value={emailValue}
        formRef={LoginForm}
        required
      />

      <InputWithLabel
        type="password"
        label="Mot de passe"
        holder="codeandchil2023"
        formRef={LoginForm}
        onChange={e => setPasswordValue(e.target.value)}
        value={passwordValue}
        minLength={5}
        required
      />

      <div className="flex_buttons">
        <Button type="submit" flex={true} theme="success">Se connecter</Button>
      </div>

      <p className="already_register" onClick={() => infos(true, "signup")}>Pas de compte ? Inscrivez-vous dès maintenant!</p>

      <TextLine text="Ou se connecter depuis" mBottom={10} />

      <div className="btns-flex">
        <Button variant="outlined" flex={true} theme="" icon={<FcGoogle />} borderSize={2} borderColor="black" color="black">
          Google
        </Button>

        <Button icon={<FaGithub />} flex={true} color="white" borderColor="#2f3337" bgColor="#2f3337">
          Github
        </Button>

        <Button icon={<FaFacebookF />} flex={true} color="white" borderColor="#385499" bgColor="#385499">
          Facebook
        </Button>
      </div>
    </form>
  )
}