import { BiLogoFacebook, BiLogoGmail, BiLogoTwitter } from "react-icons/bi";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";

function SharePage({ title, url }) {
  return (
    <div className="shared">
      <div className="btn-share" title="Share on Facebook">
        <FacebookShareButton url={url} quote={title}>
          <BiLogoFacebook className="logo face" />
        </FacebookShareButton>
      </div>

      <div className="btn-share" title="Share on Mail">
        <EmailShareButton url={url} subject={title}>
          <BiLogoGmail className="logo mail" />
        </EmailShareButton>
      </div>

      <div className="btn-share" title="Share on Twitter">
        <TwitterShareButton url={url} title={title} quote={title}>
          <BiLogoTwitter className="logo twit" />
        </TwitterShareButton>
      </div>
    </div>
  )
}

      export default SharePage;