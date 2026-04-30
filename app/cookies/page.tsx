import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";
import HeaderShell from "../components/HeaderShell";

export const metadata: Metadata = {
  title: "Cookies — HoloBob",
};

export default function CookiesPage() {
  return (
    <>
      <HeaderShell />
      <LegalLayout title="Cookies" lastUpdated="April 29, 2026">
        <p>
          This Cookie Policy explains how HoloBob (&ldquo;<strong>Company</strong>,&rdquo;{" "}
          &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; and &ldquo;
          <strong>our</strong>&rdquo;) uses cookies and similar technologies to recognize you when
          you visit our website at <Link href="/">holobob.com</Link> (&ldquo;
          <strong>Website</strong>&rdquo;). It explains what these technologies are and why we use
          them, as well as your rights to control our use of them.
        </p>
        <p>
          In some cases we may use cookies to collect personal information, or that becomes
          personal information if we combine it with other information.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you
          visit a website. Cookies are widely used by website owners in order to make their
          websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, HoloBob) are called &ldquo;first-party
          cookies.&rdquo; Cookies set by parties other than the website owner are called
          &ldquo;third-party cookies.&rdquo; Third-party cookies enable third-party features or
          functionality to be provided on or through the website (e.g., advertising, interactive
          content, and analytics). The parties that set these third-party cookies can recognize
          your computer both when it visits the website in question and also when it visits
          certain other websites.
        </p>

        <h2>Why do we use cookies?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some cookies are required for
          technical reasons in order for our Website to operate, and we refer to these as
          &ldquo;essential&rdquo; or &ldquo;strictly necessary&rdquo; cookies. Other cookies also
          enable us to track and target the interests of our users to enhance the experience on
          our Online Properties. Third parties serve cookies through our Website for advertising,
          analytics, and other purposes. This is described in more detail below.
        </p>

        <h2>How can I control cookies?</h2>
        <p>
          HoloBob is in pre-alpha and we&rsquo;re keeping cookie usage minimal. Today the site
          does not display a cookie banner or in-page preference center. The only analytics in use
          is <strong>Vercel Analytics</strong>, which is cookieless by default and does not track
          you across other sites or build advertising profiles.
        </p>
        <p>
          You can still block or delete cookies through your browser settings (see below). If you
          choose to reject cookies, you may still use our Website, though access to some
          functionality may be restricted. When we add features that rely on additional cookies, a
          preference center will appear here so you can opt in or out by category.
        </p>

        <h2>How can I control cookies on my browser?</h2>
        <p>
          As the means by which you can refuse cookies through your web browser controls vary from
          browser to browser, you should visit your browser&rsquo;s help menu for more
          information. The following is information about how to manage cookies on the most
          popular browsers:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edge
            </a>
          </li>
          <li>
            <a
              href="https://help.opera.com/en/latest/web-preferences/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opera
            </a>
          </li>
        </ul>
        <p>
          In addition, most advertising networks offer you a way to opt out of targeted
          advertising. If you would like to find out more information, please visit:
        </p>
        <ul>
          <li>
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance
            </a>
          </li>
          <li>
            <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance of Canada
            </a>
          </li>
          <li>
            <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">
              European Interactive Digital Advertising Alliance
            </a>
          </li>
        </ul>

        <h2>What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use
          other, similar technologies from time to time, like web beacons (sometimes called
          &ldquo;tracking pixels&rdquo; or &ldquo;clear gifs&rdquo;). These are tiny graphics
          files that contain a unique identifier that enables us to recognize when someone has
          visited our Website or opened an email including them. This allows us, for example, to
          monitor the traffic patterns of users from one page within a website to another, to
          deliver or communicate with cookies, to understand whether you have come to the website
          from an online advertisement displayed on a third-party website, to improve site
          performance, and to measure the success of email marketing campaigns. In many
          instances, these technologies are reliant on cookies to function properly, and so
          declining cookies will impair their functioning.
        </p>

        <h2>Do you use Flash cookies or Local Shared Objects?</h2>
        <p>
          Websites may also use so-called &ldquo;Flash Cookies&rdquo; (also known as Local Shared
          Objects or &ldquo;LSOs&rdquo;) to, among other things, collect and store information
          about your use of our services, fraud prevention, and for other site operations.
        </p>
        <p>
          If you do not want Flash Cookies stored on your computer, you can adjust the settings of
          your Flash player to block Flash Cookies storage using the tools contained in the{" "}
          <a
            href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Storage Settings Panel
          </a>
          . You can also control Flash Cookies by going to the{" "}
          <a
            href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Global Storage Settings Panel
          </a>{" "}
          and following the instructions (which may include instructions that explain, for
          example, how to delete existing Flash Cookies (referred to &ldquo;information&rdquo; on
          the Macromedia site), how to prevent Flash LSOs from being placed on your computer
          without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies
          that are not being delivered by the operator of the page you are on at the time).
        </p>
        <p>
          Please note that setting the Flash Player to restrict or limit acceptance of Flash
          Cookies may reduce or impede the functionality of some Flash applications, including,
          potentially, Flash applications used in connection with our services or online content.
        </p>

        <h2>Do you serve targeted advertising?</h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to serve advertising
          through our Website. These companies may use information about your visits to this and
          other websites in order to provide relevant advertisements about goods and services
          that you may be interested in. They may also employ technology that is used to measure
          the effectiveness of advertisements. They can accomplish this by using cookies or web
          beacons to collect information about your visits to this and other sites in order to
          provide relevant advertisements about goods and services of potential interest to you.
          The information collected through this process does not enable us or them to identify
          your name, contact details, or other details that directly identify you unless you
          choose to provide these.
        </p>

        <h2>How often will you update this Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example,
          changes to the cookies we use or for other operational, legal, or regulatory reasons.
          Please therefore revisit this Cookie Policy regularly to stay informed about our use of
          cookies and related technologies.
        </p>
        <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

        <h2>Where can I get further information?</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email
          us at <a href="mailto:derik@holobob.com">derik@holobob.com</a> or by post to:
        </p>
        <p>
          HoloBob
          <br />
          1924 Keystone Dr
          <br />
          Erie, PA 16509
          <br />
          United States
          <br />
          Phone: (+1) 814-790-3755
        </p>
      </LegalLayout>
      <Footer />
    </>
  );
}
