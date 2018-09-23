import '../components/Utility';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Title>Mail</Title>
    <Text>
      <h2>Accessing a <a>knutsen.co</a> email</h2>
      <blockquote>
        If you don&apos;t already have one, please contact me
        through your current email at <code>moi@knutsen.co</code> to
        set one up, then follow the instructions below.
      </blockquote>

      <p>
        Since this is on a private server, setup will be a little
        different from other email services.
      </p>

      <p>
        A suggested email client is Mozilla&apos;s&nbsp;
        <a href="https://www.thunderbird.net/">Thunderbird</a> due to it&apos;s
        auto-configuration functionality. However, in all likelihood you&apos;ll
        want to try to stick with whatever email client you use now. Gmail&apos;s
        phone app mail-client works very well with external email on smartphones,
        but not the browser-based Gmail client. For computers I recommended getting
        a proper email-client that can handle any mail, like Thunderbird.
      </p>

      <h3>General instructions</h3>
      Setting up with email over <b>SSL/TLS</b> (Secure):
      <br/>
      It is very important to use the server URLs provided below when setting
      up the email client, don&apos;t let it say <q>knutsen.co</q>.

      <p><q>IMAP</q> is the recommended protocol.</p>
      <table>
        <tbody>
          <tr>
            <td>Username:</td>
            <td><u><i>name</i>@knutsen.co</u> ─ (your email address.)</td>
          </tr>
          <tr>
            <td>Password:</td>
            <td> Use the email account&apos;s password.</td>
          </tr>
          <tr>
            <td>Incoming Server:</td>
            <td><u>n1plcpnl0111.prod.ams1.secureserver.net</u>
              <ul>
                <li>IMAP Port: 993</li>
                <li>POP3 Port: 995</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Outgoing Server:</td>
            <td><u>n1plcpnl0111.prod.ams1.secureserver.net</u>
              <ul>
                <li>SMTP Port: 465</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <div>Authentication is required for IMAP, POP3, and SMTP.</div>
            </td>
          </tr>
        </tbody>
      </table>

    </Text>
  </Layout>
);
