import React, { useEffect, useRef, useState, Fragment } from "react";
import { Grid, Card, Box, Typography, CardContent } from "@mui/material";

const cardStyle = {
  maxWidth: 600,
  margin: "0 auto",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const Features = () => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = boxRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            md: "20px",
            lg: "20px",
          },
        }}
      >
        <Box
          ref={boxRef}
          sx={{
            opacity: isVisible ? 2 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(80px)",
            transition: "opacity 1.5s ease, transform 1.5s ease",
          }}
        >
          <Typography variant="h1" textAlign="center">
            Interesting Features
          </Typography>
          <Typography variant="body1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>

      {/* 3 GRIDS */}

      <Box
        ref={boxRef}
        sx={{
          opacity: isVisible ? 2 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 2s ease, transform 2s ease",
        }}
      >
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
              xs: "8px",
              sm: "16px",
              md: "32px",
              lg: "48px",
            },
          }}
        >
          <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2,  md: 3, lg: 3 }}
              >
                <Grid item xs={12}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-end",
                          lg: "flex-end",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="56"
                        viewBox="0 0 57 56"
                        fill="none"
                      >
                        <path
                          d="M51.6745 19.8334C51.6745 11.4571 44.8841 4.66675 36.5078 4.66675C31.6478 4.66675 27.3217 6.95878 24.546 10.5169C36.3843 10.9746 45.8411 20.7163 45.8411 32.6667C45.8411 32.9241 45.8368 33.1805 45.8281 33.4358L46.6033 33.6432C48.8581 34.2465 50.9209 32.1837 50.3176 29.9289L50.0204 28.8182C49.7803 27.9209 49.9247 26.973 50.3106 26.1281C51.1864 24.2107 51.6745 22.0791 51.6745 19.8334Z"
                          fill="#FC9E22"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M42.3411 32.6667C42.3411 42.9761 33.9838 51.3334 23.6745 51.3334C20.7916 51.3334 18.0614 50.6799 15.6239 49.5129C14.7861 49.1119 13.837 48.971 12.9397 49.2111L10.079 49.9766C7.82418 50.5799 5.76137 48.517 6.36467 46.2623L7.13011 43.4015C7.37019 42.5042 7.22936 41.5551 6.82828 40.7173C5.66132 38.2798 5.00781 35.5496 5.00781 32.6667C5.00781 22.3574 13.3652 14.0001 23.6745 14.0001C33.9838 14.0001 42.3411 22.3574 42.3411 32.6667ZM15.5078 35.0001C16.7965 35.0001 17.8411 33.9554 17.8411 32.6667C17.8411 31.3781 16.7965 30.3334 15.5078 30.3334C14.2191 30.3334 13.1745 31.3781 13.1745 32.6667C13.1745 33.9554 14.2191 35.0001 15.5078 35.0001ZM23.6745 35.0001C24.9631 35.0001 26.0078 33.9554 26.0078 32.6667C26.0078 31.3781 24.9631 30.3334 23.6745 30.3334C22.3858 30.3334 21.3411 31.3781 21.3411 32.6667C21.3411 33.9554 22.3858 35.0001 23.6745 35.0001ZM31.8411 35.0001C33.1298 35.0001 34.1745 33.9554 34.1745 32.6667C34.1745 31.3781 33.1298 30.3334 31.8411 30.3334C30.5525 30.3334 29.5078 31.3781 29.5078 32.6667C29.5078 33.9554 30.5525 35.0001 31.8411 35.0001Z"
                          fill="#FC9E22"
                        />
                      </svg>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-end",
                          lg: "flex-end",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "right",
                          lg: "right",
                        },
                      }}
                    >
                      Intelligent Conversations
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        display: "flex",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "right",
                          lg: "right",
                        },
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor do eiusmod tempor{" "}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      paddingTop: {
                        xs: "50px",
                        sm: "50px",
                        md: "50x",
                        lg: "100px",
                      },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.5469 10.8488C37.7099 11.3321 36.6396 11.0453 36.1564 10.2083C35.6731 9.37129 35.9599 8.301 36.7969 7.81776L44.8798 3.15109C45.4928 2.79718 46.2586 2.84738 46.8202 3.27826C47.3817 3.70915 47.6284 4.43588 47.4452 5.11957L45.1224 13.7882L49.5465 11.234C50.3835 10.7507 51.4538 11.0375 51.937 11.8745C52.4203 12.7115 52.1335 13.7818 51.2965 14.2651L43.2136 18.9317C42.6006 19.2857 41.8348 19.2355 41.2733 18.8046C40.7117 18.3737 40.465 17.647 40.6482 16.9633L42.971 8.29461L38.5469 10.8488Z"
                        fill="#FC9E22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.9086 14.3489C29.0716 13.8656 28.7848 12.7954 29.268 11.9584C29.7513 11.1213 30.8216 10.8346 31.6586 11.3178L35.7 13.6511C36.313 14.005 36.6525 14.6934 36.5601 15.3951C36.4677 16.0969 35.9617 16.6739 35.278 16.8571L32.9841 17.4717L33.3667 17.6926C34.2037 18.1758 34.4905 19.2461 34.0072 20.0831C33.524 20.9201 32.4537 21.2069 31.6167 20.7237L27.5753 18.3903C26.9623 18.0364 26.6228 17.3481 26.7152 16.6464C26.8076 15.9446 27.3136 15.3676 27.9973 15.1844L30.2912 14.5698L29.9086 14.3489Z"
                        fill="#FC9E22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.3361 7.61064C29.3366 7.401 27.3075 8.35575 26.2365 10.2083C25.8172 10.9352 25.5916 11.719 25.5426 12.5029C25.4333 12.5758 25.3262 12.6533 25.2225 12.733C24.1561 13.5647 23.4281 14.7952 23.2458 16.1897C23.0954 17.3268 23.3232 18.4502 23.853 19.4095C24.3053 20.2298 24.9787 20.9316 25.8252 21.4215L29.8664 23.7548C32.3774 25.2041 35.5892 24.345 37.0384 21.8339C37.3973 21.2119 37.6149 20.5465 37.7004 19.8766C38.0467 20.5283 38.5332 21.1139 39.1427 21.581C40.8278 22.873 43.1247 23.0257 44.9635 21.9638L47.2399 20.649C48.5877 23.5999 49.3385 26.8789 49.3385 30.3333C49.3385 43.219 38.8921 53.6666 26.0052 53.6666C13.1183 53.6666 2.67188 43.219 2.67188 30.3333C2.67188 17.4475 13.1183 6.99996 26.0052 6.99996C27.8395 6.99996 29.6237 7.20959 31.3361 7.61064ZM13.0465 26.2545C13.5661 26.2181 14.097 26.4117 14.473 26.8287C15.5576 28.0364 16.7243 28.5833 17.8385 28.5833C18.5324 28.5833 19.2467 28.3714 19.9486 27.9202C20.3747 27.6468 20.7951 27.2845 21.2041 26.8287C21.5732 26.4186 22.0939 26.2226 22.6066 26.2522C22.9894 26.275 23.3677 26.4231 23.6753 26.6989C24.3942 27.346 24.4523 28.4511 23.8063 29.1712C22.2454 30.9052 20.1947 32.0833 17.8385 32.0833C15.4824 32.0833 13.4316 30.9052 11.8708 29.1712C11.2248 28.4511 11.2829 27.346 12.0018 26.6989C12.3026 26.4277 12.6717 26.2796 13.0465 26.2545ZM30.8063 26.8287C30.1603 26.111 29.054 26.0517 28.3351 26.6989C27.6162 27.346 27.5581 28.4511 28.2041 29.1712C29.765 30.9052 31.8158 32.0833 34.1719 32.0833C36.528 32.0833 38.5788 30.9052 40.1397 29.1712C40.7856 28.4511 40.7275 27.346 40.0086 26.6989C39.2897 26.0517 38.1834 26.111 37.5374 26.8287C36.4528 28.0364 35.2861 28.5833 34.1719 28.5833C33.0576 28.5833 31.891 28.0364 30.8063 26.8287ZM28.3385 39.6666C28.3385 40.9563 27.2938 42 26.0052 42C24.7166 42 23.6719 40.9563 23.6719 39.6666C23.6719 38.3769 24.7166 37.3333 26.0052 37.3333C27.2938 37.3333 28.3385 38.3769 28.3385 39.6666Z"
                        fill="#FC9E22"
                      />
                    </svg>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-end",
                          lg: "flex-end",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "right",
                          lg: "right",
                        },
                      }}
                    >
                      Emotional Recognition
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        display: "flex",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "right",
                          lg: "right",
                        },
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor do eiusmod tempor{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card style={cardStyle}>
                <CardContent>
                  <img
                    src="/featureimg.png"
                    alt="Responsive Image"
                    style={imageStyle}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2,  md: 3, lg: 3 }}
              >
                <Grid item xs={12}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="56"
                        viewBox="0 0 57 56"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.4922 4.66675C17.8272 4.66675 9.99219 12.684 9.99219 22.5737C9.99219 27.8759 12.2462 32.6415 15.8222 35.918C17.0141 37.0101 17.8971 37.8191 18.5229 38.4062C18.8358 38.6997 19.075 38.929 19.2515 39.105C19.3395 39.1927 19.4069 39.2621 19.457 39.3159C19.4818 39.3425 19.5005 39.3633 19.5141 39.3788C19.5273 39.3939 19.5336 39.4018 19.5336 39.4018C20.0855 40.0987 20.205 40.2784 20.2761 40.4413C20.3472 40.6042 20.3984 40.8152 20.5377 41.7007C20.5926 42.0504 20.5982 42.6492 20.5982 44.2791L20.5982 44.3491C20.5982 45.3037 20.5982 46.1271 20.658 46.8027C20.7213 47.5172 20.8614 48.2247 21.2377 48.8916C21.6566 49.634 22.2591 50.2505 22.9846 50.6791C23.6363 51.0641 24.3277 51.2075 25.026 51.2722C25.6863 51.3335 26.4909 51.3334 27.4238 51.3334H27.5606C28.4935 51.3334 29.2981 51.3335 29.9584 51.2722C30.6567 51.2075 31.3481 51.0641 31.9998 50.6791C32.7253 50.2505 33.3278 49.634 33.7467 48.8916C34.1229 48.2247 34.2631 47.5172 34.3263 46.8027C34.3862 46.127 34.3862 45.3037 34.3861 44.3491V44.2791C34.3861 42.6492 34.3917 42.0504 34.4467 41.7007C34.5859 40.8152 34.6371 40.6042 34.7083 40.4413C34.7794 40.2784 34.8989 40.0987 35.4507 39.4018C35.4507 39.4018 35.4564 39.3946 35.4703 39.3788C35.4839 39.3633 35.5025 39.3425 35.5274 39.3159C35.5775 39.2621 35.6448 39.1927 35.7328 39.105C35.9094 38.929 36.1486 38.6997 36.4615 38.4062C37.0873 37.8191 37.9703 37.0101 39.1621 35.918C42.7381 32.6415 44.9922 27.8759 44.9922 22.5737C44.9922 12.684 37.1572 4.66675 27.4922 4.66675ZM31.1907 45.9071H23.7937C23.8006 46.1333 23.8111 46.3309 23.8269 46.5088C23.8701 46.9975 23.9432 47.1749 23.9932 47.2636C24.1328 47.5111 24.3337 47.7166 24.5755 47.8595C24.6622 47.9107 24.8356 47.9854 25.3132 48.0297C25.8126 48.076 26.4716 48.0776 27.4922 48.0776C28.5127 48.0776 29.1718 48.076 29.6712 48.0297C30.1488 47.9854 30.3222 47.9107 30.4089 47.8595C30.6507 47.7166 30.8515 47.5111 30.9912 47.2636C31.0412 47.1749 31.1142 46.9975 31.1575 46.5088C31.1733 46.3309 31.1837 46.1333 31.1907 45.9071ZM30.0833 19.0785C30.7982 19.6011 30.9638 20.6178 30.4531 21.3494L27.7045 25.2869H30.9767C31.5727 25.2869 32.1186 25.6277 32.3913 26.1699C32.664 26.7121 32.6177 27.3648 32.2713 27.861L27.7259 34.3726C27.2152 35.1042 26.2216 35.2737 25.5066 34.7511C24.7916 34.2285 24.626 33.2118 25.1367 32.4802L27.8853 28.5427H24.6131C24.0172 28.5427 23.4712 28.2019 23.1985 27.6597C22.9258 27.1175 22.9722 26.4648 23.3185 25.9686L27.864 19.457C28.3747 18.7254 29.3683 18.5559 30.0833 19.0785Z"
                          fill="#FC9E22"
                        />
                      </svg>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      Contextual Understanding
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor do eiusmod temporsdsad{" "}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        paddingTop: {
                          xs: "50px",
                          sm: "50px",
                          md: "50x",
                          lg: "100px",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="56"
                        viewBox="0 0 57 56"
                        fill="none"
                      >
                        <path
                          d="M33.8349 8.16585C30.5192 6.61138 26.8035 6.61138 23.4878 8.16585L7.8752 15.4854C5.36453 16.6624 4.70995 19.9815 5.91146 22.2755L5.91146 33.8333C5.91146 34.7998 6.69496 35.5833 7.66146 35.5833C8.62796 35.5833 9.41146 34.7998 9.41146 33.8333V24.9014L23.488 31.5008C26.8037 33.0553 30.5194 33.0553 33.8351 31.5008L49.4477 24.1813C52.8438 22.5891 52.8438 17.0777 49.4477 15.4855L33.8349 8.16585Z"
                          fill="#FC9E22"
                        />
                        <path
                          d="M12.3281 30.1344V38.7927C12.3281 41.1447 13.503 43.3468 15.5606 44.4863C18.9868 46.3837 24.4708 49 28.6615 49C32.8521 49 38.3362 46.3837 41.7623 44.4863C43.82 43.3468 44.9948 41.1447 44.9948 38.7927V30.1345L35.3208 34.6698C31.0638 36.6656 26.2593 36.6656 22.0023 34.6698L12.3281 30.1344Z"
                          fill="#FC9E22"
                        />
                      </svg>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      Learning and development
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor do eiusmod tempor{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

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
                md: "50x",
                lg: "50x",
              },
              paddingBottom: {
                xs: "50px",
                sm: "50px",
                md: "50px",
                lg: "100px",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M27.9671 50.0476L29.1064 48.1242C29.99 46.6323 30.4318 45.8864 31.1415 45.4739C31.8512 45.0614 32.7447 45.046 34.5318 45.0152C37.17 44.9698 38.8247 44.8083 40.2123 44.2339C42.787 43.1681 44.8326 41.1239 45.8991 38.551C46.3668 37.4225 46.5611 36.1173 46.6417 34.2495C46.6574 33.8854 46.6653 33.7034 46.5687 33.5648C46.4722 33.4262 46.2937 33.3689 45.9367 33.2542C43.4014 32.44 34.8949 29.5222 30.3346 25.6667C25.2654 21.3808 20.7748 12.3026 19.6493 9.91743C19.5145 9.63179 19.4471 9.48897 19.3237 9.41121C19.2002 9.33345 19.0423 9.33438 18.7266 9.33624C13.8968 9.36464 11.8413 9.55826 9.68543 10.8785C8.27156 11.7443 7.08281 12.9323 6.21639 14.3452C4.66797 16.8703 4.66797 20.3076 4.66797 27.1822V29.2823C4.66797 34.1749 4.66797 36.6213 5.46782 38.551C6.5343 41.1239 8.57988 43.1681 11.1546 44.2339C12.5422 44.8083 14.1968 44.9698 16.835 45.0152C18.6221 45.046 19.5156 45.0614 20.2253 45.4739C20.935 45.8864 21.3768 46.6323 22.2605 48.1242L23.3997 50.0476C24.4151 51.762 26.9517 51.762 27.9671 50.0476Z"
                  fill="#FC9E22"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.9697 2.84083C32.6813 3.51154 32.674 4.59227 31.9537 5.2547L29.6158 7.40446C31.6497 7.42361 33.6061 7.46975 35.3715 7.581C36.8898 7.67666 38.3117 7.82285 39.5506 8.05234C40.7641 8.27713 41.9334 8.60454 42.8621 9.12785C44.5883 10.1005 46.0418 11.4364 47.1022 13.0276C48.1225 14.5585 48.5719 16.2889 48.7876 18.3756C48.9987 20.4171 48.9987 22.9684 48.9987 26.2034V26.2931C48.9987 27.2358 48.1779 28 47.1654 28C46.1528 28 45.332 27.2358 45.332 26.2931C45.332 22.9486 45.33 20.5615 45.1378 18.7027C44.9484 16.8702 44.5873 15.7289 43.9866 14.8274C43.233 13.6966 42.1976 12.7438 40.9636 12.0484C40.5697 11.8264 39.8845 11.5949 38.8351 11.4005C37.8111 11.2108 36.5617 11.0776 35.124 10.987C33.463 10.8823 31.6105 10.8378 29.6459 10.8188L31.9537 12.9409C32.674 13.6033 32.6813 14.684 31.9697 15.3548C31.2582 16.0255 30.0975 16.0322 29.3771 15.3697L23.8771 10.3122C23.5283 9.99153 23.332 9.55416 23.332 9.09779C23.332 8.64142 23.5283 8.20406 23.8771 7.88337L29.3771 2.82585C30.0975 2.16341 31.2582 2.17012 31.9697 2.84083Z"
                  fill="#FC9E22"
                />
              </svg>
            </Box>
            <Typography variant="h4" textAlign="center">
              Personalized Interactions{" "}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Features;
