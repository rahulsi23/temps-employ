import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Footer, Header } from "./components/common";
import {
  AcceptJobDetailMainPage,
  AuthRolePage,
  ChangePasswordMainPage,
  ChatPage,
  CompanyHomeMainPage,
  CompanyType,
  CompletedJobDetailMainPage,
  CreatePasswordPage,
  CscsPage,
  FeedbackMainPage,
  ForgotPasswordPage,
  HelpSupportMainnPage,
  HomePage,
  InProgressJobDetailMainPage,
  JobDetailMainPage,
  LimitedCompany,
  LimitedCompanyProfileMainPage,
  LoginPage,
  NationalInsuranceNumberPage,
  NotificationMainPage,
  OtpPage,
  OwnerNiNumber,
  PartnerShip,
  PartnershipProfileMainPage,
  PersonalDetailsPage,
  PostJobMainPage,
  PrivacyPolicyMainPage,
  ProfileMainPage,
  RatingListMainPage,
  RequestJobDetailMainPage,
  RightToWorkPage,
  SignUpPage,
  SoleTrader,
  SoleTraderProfileMainPage,
  TimeSheetMainPage,
  WalletMainPage,
  WorkerHomeMain,
  WorkerProfileMainPage,
} from "../src/RoutesMain";
import "./index.css";

function App() {
  const role = localStorage.getItem("userType");
  const isHr = role === "HR";
  const isEmp = role === "EMPOLYEE";
  console.log(role, isHr, isEmp);
  const routes = useRoutes([
    {
      path: "/login-roles",
      element: <AuthRolePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/otp",
      element: <OtpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/create-password",
      element: <CreatePasswordPage />,
    },
    {
      path: "/personal-detail",
      element: <PersonalDetailsPage />,
    },
    {
      path: "/national-insurance",
      element: <NationalInsuranceNumberPage />,
    },
    {
      path: "/right-to-work",
      element: <RightToWorkPage />,
    },
    {
      path: "/cscs",
      element: <CscsPage />,
    },
    {
      path: "/company-type",
      element: <CompanyType />,
    },
    {
      path: "/sole-trader",
      element: <SoleTrader />,
    },
    {
      path: "/partnership",
      element: <PartnerShip />,
    },
    {
      path: "/owner-ni-number",
      element: <OwnerNiNumber />,
    },
    {
      path: "/limited-company",
      element: <LimitedCompany />,
    },
    {
      path: "/*",
      element: (
        <div className="wrapper">
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            {isEmp && (
              <>
                <Route path="/home" index element={<WorkerHomeMain />} />
                <Route path="/request-job-detail" index element={<RequestJobDetailMainPage />}/>
                <Route path="/accept-job-detail" index element={<AcceptJobDetailMainPage />} />
                <Route path="/completed-job-detail" index element={<CompletedJobDetailMainPage />} />
                <Route path="/chat" index element={<ChatPage />} />
                <Route path="/notification" index element={<NotificationMainPage />} />
                <Route path="/wallet" index element={<WalletMainPage />} />
                <Route path="/profile" index element={<ProfileMainPage />} />
                <Route path="/change-password" index element={<ChangePasswordMainPage />} />
                <Route path="/privacy-policy" index element={<PrivacyPolicyMainPage />}/>
                <Route path="/support"  index  element={<HelpSupportMainnPage />}/>
                <Route path="/ratings" index element={<RatingListMainPage />} />
                <Route path="/time-sheet"   index element={<TimeSheetMainPage />} />
              </>
            )}
            {/* hrroute */}
            {isHr && (
              <>
             <Route path="/home" index element={<CompanyHomeMainPage />} />
                <Route path="/inprogress-job-detail" index element={<InProgressJobDetailMainPage />}/>
                <Route path="/completed-job-detail" index element={<CompletedJobDetailMainPage />} />
                <Route path="/feedback" index element={<FeedbackMainPage />} />
                <Route path="/post-detail" index element={<PostJobMainPage />} />
                <Route path="/job-detail" index element={<JobDetailMainPage />} />
                <Route path="/sole-trader-profile" index element={<SoleTraderProfileMainPage />} />
                <Route path="/partnership-profile" index element={<PartnershipProfileMainPage />} />
                <Route path="/limited-company-profile" index element={<LimitedCompanyProfileMainPage />} />
                <Route path="/chat" index element={<ChatPage />} />
                <Route path="/wallet" index element={<WalletMainPage />} />
                <Route path="/notification" index  element={<NotificationMainPage />}/>
                <Route path="/change-password" index element={<ChangePasswordMainPage />}/>
                <Route path="/privacy-policy" index element={<PrivacyPolicyMainPage />} />
                <Route path="/support" index element={<HelpSupportMainnPage />} />
                <Route path="/profile" index element={<ProfileMainPage />} />
                <Route path="/ratings" index element={<RatingListMainPage />} />
                <Route path="/worker-Profile" index element={<WorkerProfileMainPage />} />

              </>
            )}
          </Routes>
          <Footer />
        </div>
      ),
    },
  ]);
  return <>{routes}</>;
}

export default App;
