import React, { Fragment } from "react";
import { Grid, Box, Typography, Container, Link } from "@mui/material";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <Fragment>
      <Box
        sx={{
          paddingLeft: {
            xs: "16px",
            sm: "32px",
            md: "64px",
            lg: "250px",
          },
          paddingRight: {
            xs: "16px",
            sm: "32px",
            md: "64px",
            lg: "250px",
          },
          paddingTop: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "50px",
          },
          paddingBottom: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "50px",
          },
        }}
      >
        <Box>
          <Box paddingBottom={3}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
              }}
            >
              Privacy Policy
            </Typography>
          </Box>

          <Box paddingBottom={3}>
            <Typography
              color="primary"
              variant="body1Bold"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              Last Modified: 20 July 2023
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            Welcome to Happy Wally, an app designed to make you smile!{" "}
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            Your privacy is of utmost importance to us. This Privacy Policy (the
            "Policy") explains how we collect, use, store, disclose, and protect
            your personal information when you use our Happy Wally app (the
            "App").{" "}
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            By using the App, you agree to the collection, use, and disclosure
            of your personal information in accordance with this Policy. If you
            do not agree to this Policy, please do not use the App.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            Contents from Tik Tok may appear in Happy Wally. By accessing and
            using Happy Wally, you likewise agree to conform with the Privacy
            Policy of Tik Tok.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The following are incorporated herein and by your continued access
            and use of Happy Wally, you abide and conform to the same
            <Link
              href="https://www.tiktok.com/legal/page/global/tik-tok-developer-terms-of-service/en"
              color="primary"
              underline="none"
              target="_blank"
            >
              {" "}
              Tiktok Developer Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="https://ads.tiktok.com/i18n/official/policy/commercial-terms-of-service"
              color="primary"
              underline="none"
              target="_blank"
            >
              {" "}
              Tiktok Commercial Business Terms of Service.
            </Link>{" "}
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Information We Collect</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="body1Bold">Personal Information:</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            When you use the App, we may collect personally identifiable
            information, such as your name, email address, and age, if you
            choose to provide it. You can use the App without providing this
            information, but certain features, such as personalized content and
            in-app purchases, may not be available.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="body1Bold">Usage Information:</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            When you use the App, we may collect personally identifiable
            information, such as your name, email address, and age, if you
            choose to provide it. You can use the App without providing this
            information, but certain features, such as personalized content and
            in-app purchases, may not be available.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="body1Bold">Device Information:</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            When you use the App, we may collect personally identifiable
            information, such as your name, email address, and age, if you
            choose to provide it. You can use the App without providing this
            information, but certain features, such as personalized content and
            in-app purchases, may not be available.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="body1Bold">Cookies:</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            We may use cookies and similar technologies to collect information
            about your use of the App and to provide you with a more
            personalized user experience.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">
            Information Sharing and Disclosure
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Box paddingBottom={3}>
            <Typography variant="body1">
              We do not sell or rent your personal information to third parties.
              We may share your personal information with:
            </Typography>
          </Box>
          <Typography>
            • Service providers who help us operate the App, such as payment
            processors, analytics providers, and customer support providers;
          </Typography>
          <Typography>
            • Law enforcement, government agencies, or other parties, if
            required by law or in connection with legal proceedings;{" "}
          </Typography>
          <Typography>• Other parties, with your consent.</Typography>
        </Box>

        <Box paddingBottom={3}>
          <Typography variant="h5">Data Security</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The Company has implemented measures designed to secure your
            personal information from accidental loss and from unauthorized
            access, use, alteration and disclosure. The Company stores all
            information you provide to it on its secure servers behind
            firewalls. The safety and security of your information also depends
            on you. Where the Company has given you (or where you have chosen) a
            password for access to certain parts of the App, you are responsible
            for keeping this password confidential. The Company asks you not to
            share your password with anyone.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The transmission of information via the Internet and mobile
            platforms is not completely secure. Although the Company does its
            best to protect your personal information, the Company cannot
            guarantee the security of your personal information transmitted
            through the App. Any transmission of personal information is at your
            own risk. The Company is not responsible for circumvention of any
            privacy settings or security measures that it provides.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Children's Privacy</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The App is not intended for use by children under the age of 13. If
            we become aware that we have collected personal information from a
            child under 13, we will take steps to delete such information as
            soon as possible. If you believe that the Company might have any
            information from or about a child under 13, please contact the
            Company at{" "}
            <Typography component="span" color="primary">
              app@happywally.com
            </Typography>
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Changes to This Privacy Policy</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated Policy on the App. Your
            continued use of the App after the effective date of the updated
            Policy constitutes your acceptance of the changes.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Contact Us</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            If you have any questions or concerns about these Terms or your use
            of the App, please contact us at:
          </Typography>
          <Typography>VirtualWorxs Pty Ltd</Typography>
          <Typography>
            433 Collins Street, Melbourne 3000 Victoria, Australia
          </Typography>
          <Typography color="primary">app@happywally.com</Typography>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Privacy;
