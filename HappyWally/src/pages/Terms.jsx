import React, { Fragment } from "react";
import { Grid, Box, Typography, Container, Link } from "@mui/material";
import Footer from "../components/Footer";

const Terms = () => {
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
        <Box paddingBottom={3}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            Terms and Conditions
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

        <Box paddingBottom={3}>
          <Typography>
            Welcome to Happy Wally, an app designed to make you smile!{" "}
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            These Terms and Conditions (the "Terms") govern your access and use
            of the Happy Wally app (the "App"), which is available for download
            on Google Play and the Apple App Store. The App is owned and
            operated by VirtualWorxs ("we," "us," or "our").{" "}
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            By downloading, accessing, or using the App, you agree to be bound
            by these Terms. If you do not agree to these Terms, please do not
            use the App.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">License</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to download, install, and use the App on your personal
            device, subject to these Terms. You may not use the App for any
            commercial purpose or in any manner not authorized by these Terms.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5"> In-App Purchases</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The App is free to download and use, but certain features or content
            may be available for purchase within the App ("In-App Purchases").
            In-App Purchases are processed through the applicable app store
            (e.g., Google Play or Apple App Store), and you may be required to
            provide your payment information to the app store to complete the
            transaction. Please review the app store's terms and conditions and
            privacy policy for more information about their practices.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Tik Tok Contents</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            Contents from Tik Tok may appear in Happy Wally. By accessing and
            using Happy Wally, you likewise agree to conform with all terms and
            conditions of Tik Tok, including its Developer Terms of Service and
            its Commercial Terms of Service.
          </Typography>
          <Box paddingTop={3} paddingBottom={3}>
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
          <Box>
            <Typography>
              Happy Wally acknowledges the intellectual property rights
              pertinent to said contents.
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">User Conduct</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            You agree to use the App in a manner that complies with all
            applicable laws and regulations. You also agree not to:
          </Typography>
          <Box paddingTop={3} paddingBottom={3}>
            <Typography>
              • Engage in any unlawful, fraudulent, or deceptive activity;
            </Typography>
            <Typography>
              • Transmit any content that is harmful, abusive, defamatory,
              vulgar, or otherwise objectionable;{" "}
            </Typography>
            <Typography>
              • Interfere with or disrupt the proper functioning of the App or
              the servers that support it;
            </Typography>
            <Typography>
              • Reverse-engineer, decompile, or disassemble the App or any part
              of it;
            </Typography>
            <Typography>
              • Remove any copyright, trademark, or other proprietary notices
              from the App;
            </Typography>
            <Typography>
              • Use the App for any purpose other than your personal,
              non-commercial use.
            </Typography>
          </Box>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Intellectual Property</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The App and all related content, including text, graphics, images,
            logos, and software, are the property of VitualWorxs or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws. Unauthorized use of the App or its
            content may result in a violation of these laws.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Disclaimer of Warranties</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            The App is provided "as is" and without warranties of any kind,
            either express or implied, including, but not limited to, implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the App will be
            uninterrupted, error-free, or free of viruses or other harmful
            components.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Limitation of Liability</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            In no event shall we, our affiliates, or our respective officers,
            directors, employees, or agents be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out
            of or in connection with your use of the App or any In-App
            Purchases, whether based on contract, tort, or any other legal
            theory, and whether or not we have been advised of the possibility
            of such damages.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Changes to These Terms</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            We may update these Terms from time to time. We will notify you of
            any changes by posting the updated Terms on the App. Your continued
            use of the App after the effective date of the updated Terms
            constitutes your acceptance of the changes.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Termination</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            We may terminate your access to the App at any time and for any
            reason, such as, but not limited to, violations of these Terms. Upon
            termination, you must cease all use of the App and uninstall it from
            your device.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Governing Law and Jurisdiction</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            These Terms shall be governed by and construed in accordance with
            the laws of Victoria, Australia without regard to its conflict of
            law principles. Any disputes arising out of or in connection with
            these Terms or your use of the App shall be subject to the exclusive
            jurisdiction of the courts located in Victoria, Australia.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Severability</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            If any provision of these Terms is deemed unlawful, void, or for any
            reason unenforceable, then that provision shall be deemed severable
            from these Terms and shall not affect the validity and
            enforceability of any remaining provisions
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Waiver</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. Any waiver of any
            provision of these Terms will be effective only if in writing and
            signed by us.
          </Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography variant="h5">Entire Agreement</Typography>
        </Box>
        <Box paddingBottom={3}>
          <Typography>
            These Terms, together with any additional terms and conditions you
            agree to when making In-App Purchases or using specific features of
            the App, constitute the entire agreement between you and us with
            respect to the App and supersede all prior or contemporaneous
            understandings and agreements, whether written or oral, with respect
            to the App.
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

export default Terms;
