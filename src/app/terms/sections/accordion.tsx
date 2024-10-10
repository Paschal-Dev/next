import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyAccordion({ deviceType }: any): React.JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionStyle = {
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper": {
      marginRight: 3,
      marginLeft: "-8px",
    },
  };

  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
                mt: 2,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    1. GENERAL
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. We retain the right, at any time, in our sole and
                    absolute discretion, and without previous notice, to amend,
                    modify, change, or revise this Agreement. Any such
                    modifications to how you utilize the Services will take
                    effect when they are posted on the Peerwallet website, not
                    in the past. We may also let you know by email if you have
                    given us your email address when the Agreement has been
                    changed. Your only option if you disagree with the terms of
                    the amended Agreement is to immediately stop using the
                    Services and close your account.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. You are accountable for carefully reading the Agreement
                    and periodically reviewing it when it is updated on the
                    Peerwallet Website. Your acceptance to be bound by the
                    then-current Agreement will be indicated by your continued
                    use of the Services.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    3. A waiver of any of our rights or remedies by Peerwallet
                    failure or delay in fully or partially implementing any
                    element of the Agreement is not intended.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    1B. consumer protection
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    CONSUMER PROTECTION
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    2. ACCOUNT & REGISTRATION
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. You must set up an account on our website to utilize the
                    Services. We will ask you for details, such as your name,
                    address, and other personal information, during the
                    registration process to confirm your identification. We have
                    the right to decline to maintain an account for you at our
                    sole discretion. You declare that you are (a) of legal age
                    in your jurisdiction to enter into this Agreement and (b)
                    have not previously had your access to our Services
                    suspended or terminated.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. By using your account, you affirm and agree that you will
                    only use our Services for personal use. You are not
                    permitted to use your account to serve as a middleman or
                    broker for any other person, business, or organization. You
                    are only permitted to have one account, and you may not
                    lend, sell, share, or otherwise make your account
                    information available to anyone or anything besides yourself
                    unless specifically permitted by Peerwallet. Any usernames,
                    email addresses, passwords, two-factor authentication codes,
                    and other codes or credentials that you use to access the
                    Services are your sole responsibility and are subject to
                    your full responsibility and liability. There must be no
                    false or fraudulent information in your account. It is
                    forbidden to fabricate information for your account, lie
                    about your country of origin, or present fake identity
                    documents.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    3. You consent to give us the information we need during the
                    account registration process to verify your identity and
                    identify money laundering, terrorist funding, fraud, or any
                    other financial crime, and you permit us to keep a record of
                    such information. Before being allowed to access the
                    Services, you will have to go through a few verification
                    processes. These processes may change as a result of the
                    continuing data we gather on you. We may ask for personal
                    information, such as your name, address, phone number, email
                    address, date of birth, social security number, taxpayer
                    identification number, and official identification. You
                    certify that all of the information you provide to us is
                    true, accurate, and not deceptive by providing it to us
                    along with this or any other information that may be
                    necessary. You acknowledge that if any of the details you
                    supply change, you will notify us right away. YOU AGREE TO
                    PERMIT US TO SEEK ANY INFORMATION WE DEEMED NECESSARY TO
                    CONFIRM YOUR IDENTITY OR PROTECT YOU AND/OR US AGAINST FRAUD
                    OR OTHER FINANCIAL CRIME, DIRECTLY OR THROUGH THIRD PARTIES,
                    AND TO TAKE ANY ACTION WE DEEMED NECESSARY BASED ON THE
                    RESULTS OF SUCH INQUIRIES. You acknowledge and agree that,
                    when we do these inquiries, credit reference, fraud
                    prevention, or financial crime agencies may receive your
                    personal information and that they may fully respond to our
                    inquiries.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    4. If you are using the Services on behalf of a legal
                    entity, such as a corporation, you also represent and
                    warrant that the legal entity is properly organized and in
                    good standing under the applicable laws of the jurisdiction
                    in which it was formed, and (ii) you have been given proper
                    authorization by the legal entity to act on its behalf. Only
                    the individual who registered the corporate-verified account
                    is authorized to use it and it is specific to that legal
                    entity. Corporate accounts cannot be shared with or used by
                    other people or organizations. The following confined
                    exemptions are available for authenticated corporate
                    accounts: <br /> ● An authorized corporate account may have
                    many active users accounts at any given time, provided that
                    each one is business-verified and run by authorized workers
                    of the firm that Peerwallet has previously disclosed and
                    approved, in its sole and absolute discretion; <br /> ●
                    Corporate accounts are prohibited from receiving numerous
                    offers for the same transaction from their other corporate
                    accounts and are only permitted to have one current offer
                    for a particular transaction at any given moment.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    5. Any IDs, passwords, hints, personal identification
                    numbers (PINs), API keys, or other codes that you use to
                    access our Services must be kept secure and under your
                    complete control at all times. Any loss or breach of the
                    information mentioned above and/or your personal information
                    may allow other parties to access your account without
                    authorization and result in the loss or theft of any digital
                    assets and/or monies related to it, including any linked
                    payment methods. To ensure that you get any messages or
                    alerts that we might send you, it is your responsibility to
                    keep your account profile email address, phone number, and
                    other contact information up to date. When connected to your
                    account, you should never permit remote access or share your
                    computer screen with anyone. Assuming no error on the part
                    of Peerwallet, we disclaim all liability for any loss you
                    may suffer as a result of unauthorized access to your
                    account login information and/or your failure to heed any
                    warnings or messages we may send you.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    6. You might need to comply with some legal requirements in
                    your home nation or state to utilize our services. You
                    certify that you have examined your local laws and
                    regulations, and are aware of and meet any such duties by
                    agreeing to the terms of this Agreement. We do not provide
                    the usage of our Services in some jurisdictions due to legal
                    or regulatory restrictions. You declare that you are not a
                    resident of or subject to the laws and rules of those
                    jurisdictions by agreeing to the provisions of this
                    Agreement.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    7. We might not offer all of the Services in all markets and
                    countries, and we might restrict or forbid users from
                    certain jurisdictions (referred to as Restricted
                    Jurisdictions) from using all or a portion of the Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    3. PRIVACY POLICY & SECURITY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. We make an effort to protect your personal information by
                    taking all necessary precautions. We cannot, however,
                    guarantee the security of any information you provide
                    online. You acknowledge the security risks associated with
                    giving out personal information and transacting online via
                    the Internet, and you agree not to hold us liable in the
                    event of a breach of security unless it was our fault.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    2. Please view our official privacy statement.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    4. NO WARRANTY, LIMITATION OF LIABILITY & ASSUMPTION OF RISK
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. THE SERVICES ARE DELIVERED AS IS AND AS AVAILABLE,
                    WITHOUT ANY GUARANTEES, REPRESENTATIONS, OR WARRANTIES,
                    EITHER EXPRESS, IMPLIED, OR STATUTORY. PEERWALLET EXPRESSLY
                    DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND/OR NON-INFRINGEMENT TO
                    THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. PEERWALLET
                    MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE
                    CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE OPERATION
                    OF THE WEBSITE, ANY PART OF THE SERVICES, OR ANY OF THE
                    MATERIALS CONTAINED THEREIN. A USER MAY SUFFER DISRUPTIONS
                    OR LOSSES, BUT PEERWALLET IS NOT RESPONSIBLE FOR EITHER.
                    About your use and access to the services and website, YOU
                    HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED UPON
                    ANY OTHER STATEMENT OR UNDERSTANDING, WHETHER WRITTEN OR
                    ORAL. INCLUDING BUT NOT LIMITED TO THE ABOVE, YOU HEREBY
                    ACKNOWLEDGE AND ACCEPT THE VARIOUS RISKS INCLUDING BUT NOT
                    LIMITED TO HARDWARE FAILURE, SOFTWARE ISSUES, INTERNET
                    CONNECTION FAILURE, MALICIOUS SOFTWARE, THIRD-PARTY
                    INTERFERENCE RESULTING IN LOSS OR LACK OF ACCESS TO YOUR
                    ACCOUNT OR WALLET, AND OTHER USER. You acknowledge and
                    accept that PeerWallet is not responsible for any
                    communication problems, interruptions, errors, distortions,
                    or delays you may encounter while using the services,
                    regardless of the cause.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    2. IN NO EVENT SHALL PEERWALLET, ITS AFFILIATES AND SERVICE
                    PROVIDERS, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS,
                    AGENTS, EMPLOYEES, ADVISORS, CONSULTANTS OR REPRESENTATIVES,
                    BE LIABLE (A) FOR ANY AMOUNT GREATER THAN THE VALUE OF TOTAL
                    FEES PAID BY YOU FOR THE SERVICE THAT IS SUBJECT OF THE
                    CAUSE OF ACTION IN THE TWELVE (12) MONTHS PRIOR TO THE LOSS
                    ARISING OR (B) FOR ANY LOST PROFITS, DIMINUTION IN VALUE OR
                    BUSINESS OPPORTUNITY, ANY LOSS, DAMAGE, CORRUPTION OR BREACH
                    OF DATA OR ANY OTHER INTANGIBLE PROPERTY OR ANY SPECIAL,
                    INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES,
                    WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT
                    LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION
                    WITH AUTHORIZED OR UNAUTHORIZED USE OF THE SITE OR THE
                    SERVICES, OR THIS AGREEMENT, EVEN IF AN AUTHORIZED
                    REPRESENTATIVE OF PEERWALLET HAS BEEN ADVISED OF OR KNEW OR
                    SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES, AND
                    NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF
                    ITS ESSENTIAL PURPOSE, EXCEPT TO THE EXTENT OF A FINAL
                    JUDICIAL DETERMINATION THAT SUCH DAMAGES WERE A RESULT OF
                    PEERWALLET GROSS NEGLIGENCE, FRAUD, WILLFUL MISCONDUCT OR
                    INTENTIONAL VIOLATION OF LAW. SOME JURISDICTIONS DO NOT
                    ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
                    CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY
                    TO YOU.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    3. The underlying software protocols that control how
                    Digital Assets are used are not under our control or
                    ownership. The underlying protocols are typically open
                    source and available for anybody to use, copy, alter, and
                    distribute. We do not take any responsibility for how the
                    underlying protocols perform, and we are unable to ensure
                    the security or functionality of network activities.
                    Particularly, the underlying protocols could experience
                    abrupt modifications to their working principles (including
                    forks). Any such significant operational changes could
                    have a considerable impact on the currency availability,
                    value, usability, and/or name. The occurrence and specifics
                    of these significant operating changes are outside
                    Peerwallet control. You are responsible for keeping
                    yourself informed of upcoming operational changes, and you
                    must carefully weigh both information that is already
                    available to the public and information that might be
                    provided by Peerwallet when deciding whether to keep using
                    the Services. Peerwallet retains the right to take whatever
                    measures are required to safeguard the security and safe
                    functioning of its platform in the case of such an
                    operational change, including temporarily suspending
                    operations for the relevant digital currency(ies) and other
                    necessary actions. Even while these developments are beyond
                    our control and could take place without prior warning to
                    Peerwallet, we will make a fair attempt to let you know how
                    we intend to respond to them. We reserve the right to take
                    any action, including declining to support any new forks, in
                    reaction to any substantial operating change. You agree that
                    Peerwallet is not responsible for such operating changes and
                    is not accountable for any loss of value you may experience
                    as a result of such changes in operating rules. You realize
                    and accept the risks of operating modifications to the
                    protocols for Digital Assets. You agree that Peerwallet is
                    free to respond to any operating change at its sole
                    discretion and that we are under no obligation to help you
                    with unsupported currencies or protocols.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    4. You may read the material or use services offered by
                    third parties while using our services, including links to
                    those third parties websites and services (3rd party
                    content). Any third-party content is not supported,
                    adopted, or under our control, and we shall bear no
                    obligation or liability for it. Additionally, any
                    interactions or communications you have with such third
                    parties are completely private between you and them. You
                    acknowledge that your use of any third-party content and
                    contacts with third parties is solely at your own risk and
                    that we are not responsible or liable for any loss or damage
                    of any kind incurred as a consequence of any such dealings.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    5. To be clear, Peerwallet does not offer tax, legal, or
                    investing advice. Peerwallet does not provide investment
                    advice or securities services and is not registered with the
                    U.S. Securities and Exchange Commission. You are solely
                    responsible for deciding whether any investment, investment
                    strategy, or related transaction is appropriate for you
                    based on your investment objectives, financial situation,
                    and risk tolerance. All transactions through our Marketplace
                    are conducted on a peer-to-peer basis between the Seller and
                    the Buyer. Regarding your particular circumstances, you
                    should speak with a legal or tax expert. To help users
                    understand more about our Services, we occasionally post
                    educational content regarding our platform and products.
                    Information can be found through blog entries, articles,
                    news feeds, tutorials, videos, and connections to other
                    websites material. You should not regard any of the
                    Website material as advice of any kind since it is not,
                    and neither is the information supplied on the Website nor
                    any websites operated by third parties. You should carry out
                    your due research and speak with your financial advisors
                    before making any investment decisions, whether to buy,
                    sell, or hold any Digital Assets. If you decide to buy,
                    sell, or hold onto digital assets based on the information
                    supplied by peerwallet, peerwallet will not be held
                    accountable.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    6. You acknowledge that any changes in the value of the
                    Digital Assets are not our responsibility. We may take any
                    of the following actions in the case of a market
                    interruption or a Force Majeure occurrence: either (a)
                    restrict your ability to use the Services, or (b) stop you
                    from carrying out any acts on the Services. We will not be
                    responsible for any losses you sustain as a result of such
                    behavior. You understand that when Services are resumed
                    after any such occurrence, current market rates may be
                    materially different from those that were offered before
                    such an event.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    7. We offer no guarantees on the accuracy, timeliness, or
                    interruption-free operation of the Website or the server
                    that hosts it, nor do we guarantee that any faults will be
                    fixed. We will not be liable to you for any losses of any type
                    resulting from actions done or decisions made based on
                    materials or information found on the website.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    5. RELEASE OF PEERWALLET & INDEMNITY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. You release Peerwallet, its affiliates, and service
                    providers, as well as each of their respective officers,
                    directors, employees, agents, and representatives, from any
                    claims, demands, and damages of every kind and nature
                    arising out of or in any way connected with such disputes if
                    you disagree with one or more users of our Services. You
                    consent to defend, indemnify, and hold harmless Peerwallet,
                    its affiliates, and each of their officers, directors,
                    employees, agents, and representatives from any claim or
                    demand (including legal costs and any fines, fees, or
                    penalties imposed by any regulatory authority) resulting
                    from or connected to your violation of this Agreement, any
                    law or regulation, or the rights of any third party, or your
                    breach of this Agreement or your violation of such law or
                    regulation.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel7-content"
                  id="panel7-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    6. TRANSACTIONS ON PEERWALLET MARKETPLACE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    Users of the website can request offers to acquire or sell
                    financial assets. The provisions of this Agreement and any
                    additional terms that the user or the user counterparty
                    may specify are followed when a user commences a transaction
                    for the purchase or sale of Digital Assets. You may find a
                    step-by-step manual for purchasing and selling digital
                    assets on the Peerwallet Marketplace.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    The following general conditions apply to each of the
                    following transactions:
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    1. Buying Assets via an offer. When purchasing Digital
                    Assets on the Peerwallet Marketplace: <br /> • There is a
                    0.1% fee for Peerwallet Escrow as part of a transaction that
                    is payable by Buyers on our Marketplace. <br /> • Offers
                    from Peerwallet merchants have their terms and conditions
                    and each offer will vary in the exchange rate, speed of
                    exchange, and other terms and conditions imposed by the
                    merchant. By accepting a merchant’s offer you agree to be
                    bound by the terms and conditions of that offer. The terms
                    and conditions specified by the Merchants are valid in all
                    cases except when they contradict or violate this Agreement,
                    are illegal, are unreasonable or otherwise difficult to
                    comply with (as determined in Peerwallet’s sole and absolute
                    discretion), or if both users of the transaction consent to
                    alter the terms and conditions of such offer. IT IS YOUR
                    RESPONSIBILITY TO CAREFULLY READ THE MERCHANT’S OFFER TERMS
                    AND CONDITIONS AND FOLLOW THEM EXACTLY. IF YOU DO NOT FOLLOW
                    THE OFFER TERMS AND CONDITIONS, YOUR PAYMENT WILL NOT BE
                    ACCEPTED. NEVER SUBMIT PAYMENT UNLESS YOU HAVE FOLLOWED ALL
                    TERMS AND CONDITIONS LISTED IN THE OFFER. IF YOU SUBMIT
                    PAYMENT WITHOUT FOLLOWING THE TERMS AND CONDITIONS,
                    PEERWALLET CAN NOT ASSIST YOU IN A DISPUTE PROCESS TO
                    RECOVER YOUR PAYMENT. <br /> • The complete responsibility
                    for payment verification and giving instructions to release
                    digital assets from the Peerwallet platform rests with the
                    merchant, not Peerwallet. Report the problem right away
                    using the specified dispute button within the specific
                    transaction chat if the merchant fails to transfer the
                    Assets to you after you have properly fulfilled the
                    Merchant terms and conditions. The dispute will be
                    examined and resolved by peerwallet support. In the Section
                    “Disputing Transactions Via Peerwallet Dispute Resolution
                    Process, this dispute resolution procedure is further
                    explained. Peerwallet will be unable to help you with this
                    issue if you do not adhere to this dispute resolution
                    procedure.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    2. Selling Digital Assets When selling Digital Assets on the
                    Peerwallet Marketplace: <br /> • By the conditions of the
                    offer, merchants are required to verify and process the
                    payment promptly. It is your only duty and responsibility to
                    swiftly verify and process the payment when the Buyer has
                    made payment to you following the conditions of the offer,
                    after which you must release the Digital Assets from
                    Peerwallet Escrow and give them to the Buyer. You might not
                    be eligible to receive a refund for your locked Digital
                    Assets if you do not adhere to the offer requirements.{" "}
                    <br />• You as a Merchant assume all responsibility and risk
                    for any infringement of this Agreement resulting from the
                    sale of Digital Assets. You are liable for paying all
                    necessary taxes. You will be charged by Peerwallet a fee if
                    you lock digital assets in Peerwallet Escrow before a sale
                    as the merchant of such assets. Peerwallet will not
                    compensate the merchant for any damages, whether resulting
                    from a breach of this Agreement, fraud, or any other cause
                    unless it is found otherwise in its sole and absolute
                    discretion, and our fee will never be returned. <br /> •
                    Before releasing the Digital Assets from Peerwallet Escrow,
                    any money received must be completely processed and verified
                    as having been received by you. If you prematurely unlock
                    Digital Assets before payment has been properly validated
                    and received by you, Peerwallet is not liable for your loss.
                    You need to pay attention to and react to your Buyer. Any
                    offers that are not active should be deactivated. <br /> • It
                    is strictly forbidden to promote your website in any
                    Peerwallet Marketplace area (such as your bio, offer terms,
                    or transaction chat) in a way that would make it easier to
                    acquire or sell digital assets outside of Peerwallet
                    services. As long as the use of such external websites is
                    made clear in the offer terms and such websites may not
                    contain any other advertisements or your contact
                    information, it is occasionally acceptable to share your
                    website that was made specifically for the Seller to receive
                    payment to complete the transaction (i.e. trusted third
                    party debit/credit card processing) in the transaction
                    instructions.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    3. Compliance <br />• No third party, including but not
                    limited to any gift card issuer, is related with, associated
                    with, or endorsing Peerwallet or the Services. The owners of
                    designated trademarks, brands, and other identifiers are the
                    only owners of those items. In no way are these owners
                    endorsing, sponsoring, associated with, or affiliated with
                    Peerwallet and its Services. <br /> • Neither Peerwallet nor
                    any other gift card issuer authorized dealer is a licensed
                    gift card seller. The terms and restrictions of the
                    third-party retailer (Issuer) with whom the gift card is
                    redeemable (Issuer) apply to any gift cards you obtain
                    directly from a user utilizing the Peerwallet Marketplace.
                    The actions or inactions of any Issuer(s), as well as any
                    fees, fines, expiration dates, or other terms and conditions
                    related to the Issuer gift card obtained through the
                    Peerwallet Marketplace, are not the responsibility of
                    Peerwallet. By accepting a gift card from a user, you
                    confirm that you have read the terms and conditions and
                    assure Peerwallet that you are authorized to use the gift
                    card under the terms and conditions specified by the gift
                    card issuer or with applicable law. <br /> • ON OUR WEBSITE
                    AND MARKETPLACE, BREAKING OR RESELLING OF GIFT CARDS IS
                    STRICTLY PROHIBITED. AT PEERWALLET REQUEST, YOU AGREE TO
                    PROVIDE PEERWALLET WITH VALID PROOF OF OWNERSHIP OF YOUR
                    GIFT CARD, AND YOU MUST BE THE RIGHTFUL OWNER OF THE GIFT
                    CARD (SUCH AS A RECEIPT). NEITHER PEERWALLET NOR ANY
                    THIRD-PARTY PAYMENT METHODS ON OUR WEBSITE CLAIM, REPRESENT,
                    OR GUARANTEE THAT ANY THIRD-PARTY PAYMENT METHODS PERMIT
                    TRANSACTIONS VIA PEERWALLET SERVICE, NOR THAT ANY
                    THIRD-PARTY PAYMENT METHODS ON OUR WEBSITE SUPPORT OR ARE
                    SUPPORTED BY OUR SERVICES. IF SUCH THIRD-PARTY DOES NOT
                    PERMIT IT, YOU SHOULD NOT USE SUCH THIRD-PARTY PAYMENT
                    METHODS WITH PEERWALLET. <br /> • You are entirely
                    responsible for abiding by all laws and regulations
                    applicable to the jurisdiction(s) in which your transaction
                    occurs. <br /> • Peerwallet is the only site where
                    transactions are permitted. Exchanging external contact
                    information or accepting transactions outside the Peerwallet
                    platform is forbidden.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    4. Every transaction must happen inside Peerwallet.
                    Exchanging contact information with third parties or
                    accepting transactions outside of the Peerwallet platform
                    are both strictly forbidden.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    5. The only area for transactions to occur is within
                    Peerwallet. It is completely forbidden to accept payments
                    outside the Peerwallet platform or to share external contact
                    information.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    6. Relationship. Nothing in this Agreement, which makes you
                    and Peerwallet independent contractors with one another, is
                    intended to create or shall constitute any partnership,
                    joint venture, agency, consultancy, or trusteeship.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    7. Information accuracy. You guarantee and represent that
                    all information you submit through the Services is true and
                    correct. You agree and understand that Peerwallet is not
                    liable for any mistakes or omissions you make in connection
                    with any transaction started through the Services, such as
                    if you type in the wrong wallet address or supply inaccurate
                    information in any other way. We firmly advise you to
                    thoroughly review your transaction details before submitting
                    them using the Services.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    8. No cancellations or changes; wallet operations.
                    Peerwallet is unable to help you cancel or otherwise amend
                    your transaction once the information has been transmitted
                    to the digital currency network via the Services. Peerwallet
                    is unable to support any cancellation or change requests and
                    has no control over any networks using digital currencies.
                    No locked digital assets are stored or held in custody by
                    Peerwallet. Invariably, digital assets are tracked on the
                    corresponding networks or blockchains. Not on Peerwallet,
                    but rather within the digital currency network, all
                    transactions in digital currencies take place. On the
                    network of digital currencies, there are no assurances that
                    the transaction will go through. If obliged to do so by law
                    or if we believe the transactions to violate this
                    Agreement terms and conditions, Peerwallet maintains the
                    right to refuse to conduct any transaction. To the fullest
                    extent permitted by law, you hereby agree to bear
                    responsibility for all actions taken under your wallet and
                    to assume all risks associated with authorized or illegal
                    access to your wallet.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    9. Taxes. You are in charge of determining whether taxes if
                    any, apply to the transactions for which you have provided
                    transaction data through the Services, and you are also in
                    charge of reporting and remitting the right tax to the
                    relevant tax authority. You acknowledge and accept that
                    Peerwallet is not in charge of ascertaining whether taxes
                    are due on your digital currency transactions or of
                    gathering, disclosing, withholding, or remitting any taxes
                    due on any such transactions.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    10. User Credibility. We provide people with the opportunity
                    to comment on their interactions with you when you
                    participate in a Transaction. If users believe you have
                    broken this Agreement in any manner, they may also report
                    you to us. These reports are private, however, we may
                    utilize them about a dispute as per Section 8 of this
                    agreement.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    11. History of transactions. Through your Account, you may
                    see the history of your transactions. You acknowledge that
                    the terms of the transaction will not be affected or
                    rendered invalid by the Services failure to provide such
                    confirmation.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    12. Gateway using Peerwallet. The Authorized Merchants are
                    businesses that Peerwallet has approved to accept Peerwallet
                    as a payment mechanism for online purchases of products and
                    services. By choosing the Peerwallet Gateway option during
                    checkout or when making a payment, you can pay an authorized
                    merchant. The Peerwallet Gateway option will connect you to
                    a Seller or take you to our Marketplace where you can access
                    the Digital Assets in your account. The conditions outlined
                    in Section 7.1 of this Agreement will apply if you buy
                    Digital Assets from a Seller to complete the transaction.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    13. Consumer goods. Any products or services that you
                    purchase from an authorized merchant using your account or
                    the Peerwallet Pay product are not the responsibility of
                    Peerwallet. Any disagreement you may have with an Authorized
                    Merchant should be settled immediately with that Authorized
                    Merchant.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    14. Refunds and returns. Your decision to buy a product or
                    service from a third party with your Account is final.
                    Refunds and returns are not handled by us. In line with its
                    policies and at its sole discretion, an Authorized Merchant
                    may provide you with a return, shop credit, or gift card.
                  </Typography>
                  <Typography variant="body2" mt={3}>
                    15. Peerwallet charges fees for its services; these fees
                    will be indicated before you use any such services. For
                    further information, please see Peerwallet Fees.
                    Peerwallet has the right to modify its pricing and fees at
                    any time. Our rates are subject to change.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel8-content"
                  id="panel8-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    7. DISPUTING TRANSACTIONS VIA PEERWALLET DISPUTE
                    RESOLUTION PROCESS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. Disputing Transactions. The quickest method to resolve a
                    disagreement is typically for the parties to communicate,
                    work together to determine what went wrong, and find a
                    mutually accepted solution. Peerwallet support staff
                    (Peerwallet Support) can assist when a Buyer and a Seller
                    are unable to reach a mutually satisfactory resolution. Any
                    party to a transaction may start the dispute resolution
                    procedure (disputed transaction or dispute) at any time.
                    It is generally not possible to contest, reverse, or alter
                    transactions that have been marked as fully paid by the
                    buyer, canceled by the buyer, automatically canceled because
                    of the expiration of the period specified in the offer,
                    already disputed and resolved, or in which the merchant has
                    released the assets to the buyer.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. Dispute Resolution Process: Below are the steps
                    Peerwallet Support takes in the event of a dispute.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    • Initiation <br />
                    You can initiate a dispute by logging into your Peerwallet
                    Account, opening the transaction you would like to dispute,
                    and selecting the “dispute” button. The “dispute” button
                    will only appear active if the transaction has been marked
                    as fully paid by the Buyer. Once you initiate a dispute, you
                    will select the type of dispute from the options presented
                    and describe the issue giving rise to your dispute. Possible
                    options presented for describing your dispute if you are a
                    Merchant include: <br /> - an unresponsive Buyer – the Buyer
                    has marked the transaction as fully paid but is unresponsive
                    and inactive. <br /> - Payment issue – the Buyer is active
                    and has attempted to pay, but there are issues with the
                    payment. <br /> - Other – an open option where you can
                    describe what issue gave rise to the dispute. The Buyer will
                    be able to view your description. Possible options presented
                    for describing your dispute if you are a buyer include:{" "}
                    <br /> - Unresponsive vendor/merchant – you have paid, but
                    the Seller is unresponsive and inactive. <br />- Payment
                    issue – you have made the payment, but the Seller claims
                    there are issues with the payment and refuses to release the
                    Digital Assets. <br /> - Other – an open option where you
                    can describe what issue gave rise to the dispute. The Seller
                    will be able to view your description.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    • Notification <br />
                    Peerwallet Support will notify the other party that a
                    dispute has been filed once it has been lodged by emailing
                    them and sending a message using the transaction chat
                    function that is available to buyers and sellers in the
                    marketplace. If one of your transactions is being disputed,
                    Peerwallet Support will let you know which transaction is
                    being disputed and why. <br /> • Response Review the dispute
                    and explain what transpired to Peerwallet Support. Include
                    any supporting documentation you have, such as payment or
                    ownership receipts, or documentation showing whether you
                    have or have not received money, to substantiate your claim.
                    <br /> • Peerwallet Review Peerwallet Support will look into
                    disputed transactions and decide based on the facts
                    presented by both sides. Peerwallet Support arbitrates
                    conflicts by considering several variables as detailed in
                    Section 8 below.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    3. Dispute Review. Peerwallet Support may issue you with
                    instructions during a dispute review that you must abide by.
                    The instructions you receive may ask you to produce more
                    proof, such as extra ID verification, payment documentation,
                    or any other documents that Peerwallet deems necessary. You
                    may also be asked to supply this proof within a certain
                    amount of time. If you do not follow the rules, the issue can
                    be decided against you. Within 30 days of receiving the
                    disagreement, Peerwallet Support will ordinarily send notice
                    of its decision via the transaction chat tool in the
                    Marketplace, however, it may take longer in some cases.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    4. Unresponsiveness. It is crucial to stay active and
                    accessible throughout a transaction, from the moment it
                    begins to the moment it is finished, canceled, or settled.
                    This implies that if you can not respond to a request from
                    Peerwallet Support in a disputed transaction within the time
                    frame that Peerwallet Support specifies, you risk being
                    flagged as unresponsive and the dispute could be decided
                    against you.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    5. Chargebacks. When you are a party to a transaction, you
                    must be engaged and accessible throughout the whole process,
                    from when the transaction is initiated to when it is
                    finished, canceled, or settled. To put it another way, you
                    must be able to respond to a request from Peerwallet Support
                    in a disputed transaction within the time frame that
                    Peerwallet Support specifies, or you risk being flagged as
                    unresponsive and having the dispute decided against you.
                    Dispute Resolution. Once the dispute resolution procedure is
                    over, Peerwallet Support will usually transfer the Digital
                    Assets at issue to either the Buyer or the Seller of the
                    disputed transaction. The scenarios listed below will give
                    you an idea of how Peerwallet might handle a contested
                    transaction. This list is not meant to be comprehensive. The
                    specifics of the dispute and the evidence offered by the
                    users will have an impact on how it is resolved. When at
                    least one of the following conditions is satisfied,
                    Peerwallet Support may decide a disagreement in the Buyer
                    favor:
                    <br /> • According to the terms of the transaction offer,
                    the Buyer made payment following the first instructions
                    supplied by the Seller, and the Buyer has provided adequate
                    documentation to support this claim. When the buyer has
                    satisfied all of the seller terms and conditions as posted
                    at the time the buyer accepted and paid for the transaction,
                    the seller must complete the transaction; otherwise, the
                    seller is in breach of this Agreement.
                    <br /> • The Seller has stopped responding and has not given
                    an adequate response in the amount of time Peerwallet
                    Support has required.
                    <br />• The payment is made to a third party involved in the
                    transaction or it is paid to an account that is not set up
                    in the seller name. When one of the following conditions
                    is satisfied, Peerwallet Support may decide a dispute in the
                    Seller favor:
                    <br />• The Buyer has not paid, has not paid in full, or has
                    not paid by the initial instructions given by the Seller by
                    the transaction offer.
                    <br />• The payment provider or processor has held, paused,
                    frozen, or stopped the Buyer payment. This includes
                    instances where the Buyer charged back or contested a
                    payment through its bank or payment card issuer.
                    <br />• The Buyer has stopped responding and has not given a
                    complete response in the amount of time Peerwallet Support
                    has required.
                    <br />• The payment is made from a payment account that is
                    not registered in the Buyer name, or it is made by a third
                    party to the transaction. If the Buyer or Seller of a
                    disputed transaction provides false information, or false
                    documents, makes false statements or otherwise employs
                    deceptive practices, the dispute may be immediately resolved
                    against a such user, and at Peerwallet Support sole
                    discretion, such user account may be immediately suspended
                    or terminated. In some circumstances where neither party
                    satisfies the criteria, or where it is otherwise unclear or
                    impossible to determine which party has satisfied the
                    dispute resolution criteria, Peerwallet may choose to
                    resolve the dispute by dividing the Digital Assets at issue
                    between the Buyer and the Seller in an even or unequal
                    distribution.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    6. Appeal. You have the right to ask for an appeal if you
                    think Peerwallet handled a disagreement in a manner
                    inconsistent with this Agreement. You must promptly tell us
                    in writing by getting in touch with Peerwallet customer
                    support no later than 10 calendar days after receiving
                    notice of Peerwallet Support decision, and you must give
                    us enough information and proof to support your request.
                    Your appeal should precisely state how you think Peerwallet
                    handled the disagreement incorrectly by the rules of this
                    Agreement and offer proof of that incorrect judgment. Please
                    be reminded that whether during the dispute process or
                    generally any time when using our Services, you are
                    obligated to keep a civil tone and be respectful to other
                    users and Peerwallet Support. See generally, “Section 13 -
                    Prohibited Use”.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    7. Finality. You acknowledge and agree that, as outlined in
                    this Agreement, Peerwallet judgment on a dispute is
                    conclusive, final, and binding. With its choices, Peerwallet
                    will not be liable to either a Buyer or a Seller.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel9-content"
                  id="panel9-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    8. FEES FOR USING PEERWALLET SERVICES
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. Account creation is free. Peerwallet charges fees for its
                    services; these fees will be indicated before you use any
                    such services. For further information, please see
                    Peerwallet Fees. Peerwallet has the right to modify its
                    pricing and fees at any time. Our rates are subject to
                    change.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel10-content"
                  id="panel10-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    9. NO RIGHT TO CANCEL SERVICES OR FEES
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2" color={"#000"}>
                    1. Once you have indicated that you want to continue with a
                    Service or a transaction for which there is a fee, you will
                    not be eligible for a refund or reimbursement if you utilize
                    that Service or those services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
                mt:
                  deviceType === "mobile" ? 0 : deviceType === "tablet" ? 0 : 2,
              }}
            >
              <Accordion
                expanded={expanded === "panel11"}
                onChange={handleChange("panel11")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel11-content"
                  id="panel11-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    10. DISCONTINUANCE OF SERVICES
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. Any part of our Services may be changed or discontinued,
                    temporarily or permanently, at any time, at no cost to you,
                    with or without prior notice, and at our sole discretion.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel12"}
                onChange={handleChange("panel12")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel12-content"
                  id="panel12-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    11. SUSPENSION OR TERMINATION OF SERVICES & ACCOUNT;
                    LIMITING ACCESS TO YOUR WALLET
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. We may in our sole and absolute discretion, immediately
                    and without prior notice: (a) suspend, restrict, or
                    terminate your access to any or all of the Services
                    (including limiting access to your Wallet), and/or (b)
                    deactivate or cancel your account if: (i) we are so required
                    by applicable law, a facially valid subpoena, court order,
                    or binding order of a government authority; (ii) we
                    reasonably suspect you have or may act in violation of this
                    Agreement; (iii) use of your account is subject to any
                    pending litigation, investigation, or government proceeding
                    and/or we perceive a heightened risk of legal or regulatory
                    non-compliance associated with your account activity; (iv)
                    our service partners are unable to support your use; (v) you
                    take any action that we deem as circumventing our controls
                    and procedures or (vi) we think it is necessary to do so to
                    protect us, our users, including you, or our employees from
                    danger or loss. If we exercise our rights to limit or refuse
                    your access to the Services, we will not be responsible for
                    any consequences of our refusal to give you access to the
                    Services, including any delay, damage, or inconvenience you
                    may suffer as a result.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. 2. If we suspend or close your account, terminate your
                    use of the Services for any reason, or limit access to your
                    Wallet, we will attempt to provide you with notice of our
                    actions unless a court order or other legal process
                    prohibits us from providing you with such notice. YOU
                    ACKNOWLEDGE THAT OUR DECISION TO TAKE CERTAIN ACTIONS,
                    INCLUDING LIMITING ACCESS TO, SUSPENDING, OR CLOSING YOUR
                    ACCOUNT OR WALLET, MAY BE BASED ON CONFIDENTIAL CRITERIA
                    THAT ARE ESSENTIAL TO OUR RISK MANAGEMENT AND SECURITY
                    PROTOCOLS. YOU AGREE THAT PEERWALLET IS UNDER NO OBLIGATION
                    TO DISCLOSE THE DETAILS OF ITS RISK MANAGEMENT AND SECURITY
                    PROCEDURES TO YOU. If we suspend your account or access to
                    your Wallet, we will remove the suspension as soon as
                    possible once the reasons for the suspension no longer
                    exist, however, we are under no obligation to notify you as
                    to when (if ever) such suspension will be removed.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    3. 3. We might be forced to report any unclaimed Digital
                    Assets in your account as unclaimed property in compliance
                    with abandoned property regulations if you have Digital
                    Assets in your Peerwallet Wallet and there has not been any
                    activity in your account for a length of time specified by
                    the applicable law. If this happens, we will make a good-faith
                    effort to give you written notice. We may be required to
                    deliver any such Assets to the relevant country as unclaimed
                    property if you do not reply to any such notice within seven
                    (7) business days of receipt or as otherwise required by
                    law. As permitted by applicable legislation, we reserve the
                    right to deduct a dormancy fee or other administrative costs
                    from such unclaimed Assets.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel13"}
                onChange={handleChange("panel13")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel13-content"
                  id="panel13-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    12. PROHIBITED USE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. You acknowledge that you are entirely responsible for
                    your behavior while using our Services and that you will
                    only access or use the Services in a manner consistent with
                    the terms and conditions of this Agreement (including the
                    Privacy Policy). You agree not to, without limiting the
                    generality of the foregoing:
                    <br />• use our services in any way that might prevent other
                    users from fully appreciating them, disrupt their use of
                    them, or otherwise negatively affect them, or that might
                    break, disable, overload, or otherwise impair our services
                    functionality;
                    <br />• engage in any activity that might contravene, or
                    help in the contravention of, any law, statute, ordinance,
                    or regulation, sanctions programs imposed in the nations
                    where we conduct business or operations, or that would
                    involve the proceeds of any illegal activity; publish,
                    distribute, or disseminate any illegal information or
                    materials;
                    <br />• Defame, abuse, extort, harass, stalk, threaten, or
                    otherwise violate the legal rights (including, but not
                    limited to, rights of privacy, publicity, and intellectual
                    property) of other users; incite, threaten, facilitate,
                    promote, or encourage hate, racial intolerance, or violent
                    acts against others; harvest or otherwise collect
                    information about other users from our Website;
                    <br />• engage in any activity that aims to harm Peerwallet
                    or our users, whether through fraud, libel, or another type
                    of wrongdoing; or give false, inaccurate, misleading, or
                    other misleading information to Peerwallet or another user
                    in connection with our Services or as otherwise provided or
                    requested under this Agreement;
                    <br />• Use any robot, spider, crawler, scraper, or other
                    automated means or interface not provided by us to access
                    our Services or to extract data; attempt to get around any
                    content filtering measures we use; attempt to access any
                    service or area of our Services that you are not authorized
                    to access or placement of any advertisement or promotion
                    anywhere within Peerwallet Marketplace.
                    <br />• use Peerwallet intellectual property, name, or logo,
                    including use of Peerwallet trade or service marks,
                    without our prior written consent or in a manner that
                    otherwise harms Peerwallet or the Peerwallet brand; engage
                    in transactions involving items that infringe or violate any
                    copyright, trademark, right of publicity or privacy, or any
                    other proprietary right under the law, or other licensed
                    materials;
                    <br />• urge or incite any other party to partake in any of
                    the activities foreseen in this Section 13 prohibitions.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel14"}
                onChange={handleChange("panel14")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel14-content"
                  id="panel14-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    13. INTELLECTUAL PROPERTY RIGHTS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. Subject to the terms and conditions in this Agreement, we
                    grant you a limited, nonexclusive, nontransferable license
                    to access and use the Services, Website, and related
                    content, materials, and information (collectively, the
                    Content) solely for the purposes that Peerwallet may from
                    time to time approve. All other rights, titles, and
                    interests in the Services, Website, or Content are solely
                    the property of Peerwallet, and any other use of the Website
                    or Content is forbidden. You acknowledge that without
                    Peerwallet prior written authorization, you will not
                    duplicate, transmit, distribute, sell, license, reverse
                    engineer, alter, publish, take part in the transfer or sale
                    of, create derivative works from, or otherwise exploit any
                    of the Content, in whole or in part. Without Peerwallet
                    explicit written approval, you are not permitted to
                    reproduce, imitate, or utilize any of its trademarks,
                    registered marks, logos, or other intellectual property.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. Although we strive to deliver accurate and timely
                    information on the Peerwallet Website, there is a chance
                    that some of the material (including, but not limited to,
                    the Content) may occasionally be incomplete, outdated, or
                    subject to technical inaccuracies or typographical errors.
                    Information may occasionally change or be updated without
                    prior notice to continue to give you the most full and
                    accurate information available. This includes information
                    about our policies, goods, and Services. As a result, you
                    should always double-check material before relying on it,
                    and any judgments you make based on information found on the
                    Peerwallet Website are solely your own, and we disclaim all
                    accountability for them. Peerwallet does not guarantee the
                    correctness of the information provided by third parties and
                    only uses it for informational reasons. Although they may be
                    given as a convenience, links to third-party resources
                    (including without limitation, websites) are not under our
                    control. You understand and agree that the information,
                    content, and services found in any third-party materials or
                    on any third-party websites that are accessible through or
                    linked to the Peerwallet Website are not our responsibility.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel15"}
                onChange={handleChange("panel15")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel5-content"
                  id="panel15-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    14. FEEDBACK AND USER SUBMISSIONS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. Peerwallet is constantly looking for ways to make its
                    services and website better. The terms and conditions in
                    this Agreement will apply to any submissions you make if you
                    have any ideas or suggestions for Peerwallet Services or
                    the Website that could be improved or added.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    2. Any disclosure of ideas, feedback, or associated
                    information to Peerwallet, any of its subsidiaries, parents,
                    or affiliated businesses, or any of their officers,
                    directors, managers, members, shareholders, employees, and
                    agents, or any of their heirs, successors, representatives,
                    or assigns (each a Peerwallet Party and collectively the
                    Peerwallet Parties) will not be subject to any obligation
                    of confidentiality or expectation of payment.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    3. You give Peerwallet a non-exclusive, perpetual, worldwide
                    royalty-free license to use the entire content of your ideas
                    and feedback for any purpose by submitting them to
                    Peerwallet or any Peerwallet Party. This license extends to
                    any related materials that would be subject to intellectual
                    property rights as well. Additionally, to the fullest extent
                    permitted by law, you are waiving any moral rights you may
                    have in the Work. Additionally, you are representing and
                    warranting to such Peerwallet Party that the Work is
                    entirely your original creation, that no one else has any
                    rights in the Work, and that all Peerwallet Parties are free
                    of any royalties to implement the Work and to use the
                    related material as provided or as modified by any
                    Peerwallet Party, without obtaining prior permission from
                    any third party.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    4. Additionally, you agree that Peerwallet may sublicense
                    any Peerwallet Parties to use any Work and materials you
                    have supplied in any manner.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    5. At our sole discretion, we have the right to delete any
                    posting you could make on the website without giving you a
                    reason or a heads-up.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel16"}
                onChange={handleChange("panel16")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel16-content"
                  id="panel6-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    15. P2P GATEWAY TERMS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    In the event that verifiable financial losses are incurred
                    by the Merchant as a result of your utilization of the
                    gateway or your customer utilization of the gateway, the
                    responsibility for covering these losses shall lie with you,
                    the seller. Such losses may encompass a range of charges,
                    including but not limited to refund fees, chargeback fees,
                    gateway fines, and other associated expenses. The merchant
                    is required to provide substantiated evidence and must be
                    prepared to furnish login credentials to Peerwallet staff in
                    the event of a dispute. Once confirmed, the financial burden
                    of these fees will be assumed by the seller.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    Peerwallet operates as a peer-to-peer platform, affording
                    sellers the autonomy to select those peers whose terms align
                    with their preferences in terms of cost, fees, and other
                    usage conditions. Enabling the merchant gateway implies
                    your consent to adhere to all the terms stipulated by the
                    merchant, which can be found on the Funding Page of
                    Peerwallet.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={5}>
                    Peerwallet as a company does not integrate payment gateways,
                    we rely on approved merchants to integrate these gateways so
                    that sellers can use for their checkout. When there is a
                    dispute or chargeback request, the Merchant will open a
                    dispute request also on Peerwallet and the seller would be
                    contacted via a dispute resolution channel. When this
                    happens, sellers have the option to contact the buyer to
                    cancel dispute or dispute would be closed to favor the
                    Merchant.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    When a dispute is closed to favor the Merchant, the disputed
                    funds would be deducted from the Seller’s Peerwallet balance
                    and then credited to the Merchant’s Peerwallet balance.
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    In the case of a refund, the Merchant has the right to
                    refund a transaction from his gateway if the gateway is
                    compromised or the issuing Bank or issuing platform boldly
                    requests this. Also, if refunds MUST be done to restore the
                    account, then the Merchant can refund the transaction and
                    file for a dispute on Peerwallet. Evidence of refunds must
                    be visible and this would be approved by the Support staff
                    if this has been completed. Refund can be issued by the
                    Merchant if it meets all of the following;
                  </Typography>
                  <Typography variant="body2" color={"#000"} mt={3}>
                    1) Transaction done is within 180 days <br />
                    2) There has been a request to refund the transaction by the
                    issuing Bank or platform, or the gateway has been closed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel17"}
                onChange={handleChange("panel17")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel17-content"
                  id="panel17-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    16. HOW TO CONTACT US
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    Before contacting us, we advise you to look over our FAQ
                    page. If the FAQ page does not have the answers you need,
                    Peerwallet provides round-the-clock service. You can get in
                    touch with us through the support widget on the FAQ page.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel18"}
                onChange={handleChange("panel18")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel18-content"
                  id="panel18-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    17. FORCE MAJEURE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. We are not responsible for service delays, failures to
                    perform, or interruptions that are caused directly or
                    indirectly by factors outside of our reasonable control,
                    such as high market volatility, delays or failures brought
                    on by acts of God, government actions, terrorist acts, civil
                    unrest, war, strikes or other labor disputes, fire, or
                    disruptions in telecommunications, Internet, or network
                    services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel19"}
                onChange={handleChange("panel19")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel19-content"
                  id="panel19-header"
                  sx={accordionStyle}
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: 4,
                      borderTopLeftRadius: 4,
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                    fontWeight={400}
                  >
                    18. NATURE OF AGREEMENT
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    1. The terms and conditions in this Agreement comprise the
                    whole understanding between you and Peerwallet about their
                    subject matter, and this Agreement cancels and supersedes
                    any prior understandings and agreements between you and
                    Peerwallet on that subject. Without our prior written
                    agreement, you are not permitted to transfer any of your
                    rights or duties under this Agreement.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
