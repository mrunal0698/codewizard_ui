import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Links from "pages/Home";
import NotFound from "pages/NotFound";
import {Navigate, Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';

const Error1 = React.lazy(() => import("pages/Error1"));
const Error = React.lazy(() => import("pages/Error"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const WhatsNew = React.lazy(() => import("pages/WhatsNew"));

const ResetPasswordEight = React.lazy(() => import("pages/ResetPasswordEight"));
const ResetPasswordTen = React.lazy(() => import("pages/ResetPasswordTen"));
const ResetPasswordNine = React.lazy(() => import("pages/ResetPasswordNine"));
const ResetPasswordFive = React.lazy(() => import("pages/ResetPasswordFive"));
const ResetPasswordFour = React.lazy(() => import("pages/ResetPasswordFour"));
const ResetPasswordThree = React.lazy(() => import("pages/ResetPasswordThree"));
const ResetPasswordTwo = React.lazy(() => import("pages/ResetPasswordTwo"));
const ResetPasswordOne = React.lazy(() => import("pages/ResetPasswordOne"));
const ForgotPasswordFive = React.lazy(() => import("pages/ForgotPasswordFive"));
const ForgotPasswordFour = React.lazy(() => import("pages/ForgotPasswordFour"));
const ForgotPasswordThree = React.lazy(() =>
  import("pages/ForgotPasswordThree")
);
const ForgotPasswordTwo = React.lazy(() => import("pages/ForgotPasswordTwo"));
const ForgotPasswordOne = React.lazy(() => import("pages/ForgotPasswordOne"));
const OTPOne = React.lazy(() => import("pages/OTPOne"));
const LoginSix = React.lazy(() => import("pages/LoginSix"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const LoginFour = React.lazy(() => import("pages/LoginFour"));
const AddCardDetailsNineteen = React.lazy(() =>
  import("pages/AddCardDetailsNineteen")
);
const BillingAddressTen = React.lazy(() => import("pages/BillingAddressTen"));
const Allfeaturesandbenefits = React.lazy(() =>
  import("pages/Allfeaturesandbenefits")
);
const AllfeaturesandbenefitsOne = React.lazy(() =>
  import("pages/AllfeaturesandbenefitsOne")
);
const EditCardDetails = React.lazy(() => import("pages/EditCardDetails"));
const MyAccountbillingTwo = React.lazy(() =>
  import("pages/MyAccountbillingTwo")
);
const MyAccountbillingOne = React.lazy(() =>
  import("pages/MyAccountbillingOne")
);
const PaymentDetailsEleven = React.lazy(() =>
  import("pages/PaymentDetailsEleven")
);
const SelectPlans = React.lazy(() => import("pages/SelectPlans"));
const SelectPlansOne = React.lazy(() => import("pages/SelectPlansOne"));
const MyAccountPassword = React.lazy(() => import("pages/MyAccountPassword"));
const MyAccountMyDetailsNine = React.lazy(() =>
  import("pages/MyAccountMyDetailsNine")
);

const Signup = React.lazy(() => import("screens/Signup"));
const Pricing = React.lazy(() => import("screens/Pricing"));
const FrontendApp = React.lazy(() => import("screens/frontendApp"));
const BackendApp = React.lazy(() => import("screens/backendApp"));
const ModelLibrary = React.lazy(() => import("screens/ModelLibrary"));
const FECodeGenDetail = React.lazy(() => import("screens/FECodeGenDetail"));
const BECodeGenDetail = React.lazy(() => import("screens/BECodeGenDetail"));
const Home = React.lazy(() => import("screens/Home"));
const Settings = React.lazy(() => import("screens/Settings"));
const PreBuiltApps = React.lazy(() => import("screens/PreBuiltApps"));
const HelpandSupport = React.lazy(() => import("screens/HelpAndSupport"));
const Solutions = React.lazy(() => import ("screens/Solutions"));
const TechnicalSolutions = React.lazy(() => import("screens/TechnicalSolutions"));
const FETemplate = React.lazy(() => import('screens/FETemplate'));
const InputTable = React.lazy(() => import("screens/inputTable"));
const CustomSales = React.lazy(() => import("screens/ContactSales"));
const WizardGPTHome = React.lazy(() => import("screens/WizardGPTHome"));
const Feedback = React.lazy(() => import("screens/Feedback"));

const ProtectedRoute = () => {
   const { isAuthenticated, isLoading } = useAuth0();
   const [loading,setLoading] = useState(isLoading);

    useEffect(() => { setLoading(isLoading) },[isLoading]);
    if(loading) {
      return(
        <div id="busyloader" className="preloader">
          <div className="loader-modal">
            <img src="/images/logo-footer.png" alt="preloader" />
          </div>
        </div> 
      )
    }

  return (
    !isAuthenticated && !loading ? <Navigate to='/'  /> : <Outlet/>
  )
};

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>} >
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
        <Route
          path="/myaccountmydetailsnine"
          element={<MyAccountMyDetailsNine />}
        />
        <Route path="/myaccountpassword" element={<MyAccountPassword />} />
        <Route path="/selectplansone" element={<SelectPlansOne />} />
        <Route path="/selectplans" element={<SelectPlans />} />
        <Route
          path="/paymentdetailseleven"
          element={<PaymentDetailsEleven />}
        />
        <Route
          path="/myaccountbillingone"
          element={<MyAccountbillingOne />}
        />
        <Route
          path="/myaccountbillingtwo"
          element={<MyAccountbillingTwo />}
        />
        <Route path="/editcarddetails" element={<EditCardDetails />} />
        <Route
          path="/allfeaturesandbenefitsone"
          element={<AllfeaturesandbenefitsOne />}
        />
        <Route
          path="/allfeaturesandbenefits"
          element={<Allfeaturesandbenefits />}
        />
        <Route path="/billingaddressten" element={<BillingAddressTen />} />
        <Route
          path="/addcarddetailsnineteen"
          element={<AddCardDetailsNineteen />}
        />
        <Route path="/loginfour" element={<LoginFour />} />
        <Route path="/logineight" element={<LoginEight />} />
        <Route path="/loginsix" element={<LoginSix />} />
        <Route path="/otpone" element={<OTPOne />} />
        <Route path="/forgotpasswordone" element={<ForgotPasswordOne />} />
        <Route path="/forgotpasswordtwo" element={<ForgotPasswordTwo />} />
        <Route
          path="/forgotpasswordthree"
          element={<ForgotPasswordThree />}
        />
        <Route path="/forgotpasswordfour" element={<ForgotPasswordFour />} />
        <Route path="/forgotpasswordfive" element={<ForgotPasswordFive />} />
        <Route path="/resetpasswordone" element={<ResetPasswordOne />} />
        <Route path="/resetpasswordtwo" element={<ResetPasswordTwo />} />
        <Route path="/resetpasswordthree" element={<ResetPasswordThree />} />
        <Route path="/resetpasswordfour" element={<ResetPasswordFour />} />
        <Route path="/resetpasswordfive" element={<ResetPasswordFive />} />
        <Route path="/resetpasswordnine" element={<ResetPasswordNine />} />
        <Route path="/resetpasswordten" element={<ResetPasswordTen />} />
        <Route path="/resetpasswordeight" element={<ResetPasswordEight />} />   
        <Route path="/error1" element={<Error1 />} />
        <Route path="/dhiwise-dashboard" element={<Links />} />

        <Route path="/our-home" element={<Home />} />
        <Route path="/design-library" element={<ModelLibrary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/error" element={<Error />} />
        <Route path="/backend-codegen-detail" element={<BECodeGenDetail />} />
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/frontend-app" element={<FrontendApp />} />
        <Route path="/backend-app" element={<BackendApp />}/>
        <Route path="/pre-built-apps" element={<PreBuiltApps />}/>
        <Route path="/help-and-support" element={<HelpandSupport />} />
        <Route path="/frontend-codegen-detail" element={<FECodeGenDetail />} />
        <Route path="/plugins" element={<Solutions />}/>
        <Route path="/arch-blue-prints" element={<TechnicalSolutions />}/>
        <Route path="/templates" element={<FETemplate />}/>
        <Route path="/input-table" element={<InputTable />} />
        <Route path="/design/edit/:id" element={<InputTable />} />
        <Route path="/contact-sales" element={<CustomSales />} />
        <Route path="/wizard-GPT" element={<WizardGPTHome />} />
        </Route>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </React.Suspense>
  );
};
export default AppRoutes;
