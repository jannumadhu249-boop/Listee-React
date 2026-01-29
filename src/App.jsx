import { Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from './components/layout/MainLayout'
import AdminLayout from './components/layout/AdminLayout'

// User Pages
import Home from './pages/user/Home'
import Home2 from './pages/user/Home2'
import Home3 from './pages/user/Home3'
import Home4 from './pages/user/Home4'
import Home5 from './pages/user/Home5'
import Home6 from './pages/user/Home6'
import Home7 from './pages/user/Home7'
import Home8 from './pages/user/Home8'
import Home9 from './pages/user/Home9'
import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Login from './pages/user/Login'
import Signup from './pages/user/Signup'
import ForgotPassword from './pages/user/ForgotPassword'
import ListingGrid from './pages/user/ListingGrid'
import ListingGridSidebar from './pages/user/ListingGridSidebar'
import ListingListSidebar from './pages/user/ListingListSidebar'
import ListingmapGrid from './pages/user/ListingmapGrid'
import ListingmapList from './pages/user/ListingmapList'
import ServiceDetails from './pages/user/ServiceDetails'
import Categories from './pages/user/Categories'
import Pricing from './pages/user/Pricing'
import Faq from './pages/user/Faq'
import Gallery from './pages/user/Gallery'
import HowItWorks from './pages/user/HowItWorks'
import TermsCondition from './pages/user/TermsCondition'
import PrivacyPolicy from './pages/user/PrivacyPolicy'
import BlogList from './pages/user/BlogList'
import BlogGrid from './pages/user/BlogGrid'
import BlogDetails from './pages/user/BlogDetails'
import BlogListSidebar from './pages/user/BlogListSidebar'
import BlogGridSidebar from './pages/user/BlogGridSidebar'
import Dashboard from './pages/user/Dashboard'
import Profile from './pages/user/Profile'
import MyListing from './pages/user/MyListing'
import Bookmarks from './pages/user/Bookmarks'
import Messages from './pages/user/Messages'
import Reviews from './pages/user/Reviews'
import AddListing from './pages/user/AddListing'
import NotFound from './pages/NotFound'
import Error500 from './pages/Error500'

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard'
import AdminListings from './pages/admin/Listings'
import AdminCategories from './pages/admin/Categories'
import AdminSubCategories from './pages/admin/SubCategories'
import AdminLocations from './pages/admin/Locations'
import AdminReviewType from './pages/admin/ReviewType'
import AdminReview from './pages/admin/Review'
import AdminComments from './pages/admin/Comments'
import AdminAmenities from './pages/admin/Amenities'
import AdminProductEnquiry from './pages/admin/ProductEnquiry'
import AdminTransactions from './pages/admin/Transactions'
import AdminPaymentGateway from './pages/admin/PaymentGateway'
import AdminTaxRates from './pages/admin/TaxRates'
import AdminPayoutRequest from './pages/admin/PayoutRequest'
import AdminPayoutSettings from './pages/admin/PayoutSettings'
import AdminChat from './pages/admin/Chat'
import AdminAddPage from './pages/admin/AddPage'
import AdminPagesList from './pages/admin/PagesList'
import AdminAllBlog from './pages/admin/AllBlog'
import AdminAddBlog from './pages/admin/AddBlog'
import AdminBlogsCategories from './pages/admin/BlogsCategories'
import AdminBlogsComments from './pages/admin/BlogsComments'
import AdminCountries from './pages/admin/Countries'
import AdminStates from './pages/admin/States'
import AdminCities from './pages/admin/Cities'
import AdminTestimonials from './pages/admin/Testimonials'
import AdminFaq from './pages/admin/Faq'
import AdminMembership from './pages/admin/Membership'
import AdminMembershipTransactions from './pages/admin/MembershipTransactions'
import AdminEarnings from './pages/admin/AdminEarnings'
import AdminProviderEarnings from './pages/admin/ProviderEarnings'
import AdminUserList from './pages/admin/UserList'
import AdminUserCustomers from './pages/admin/UserCustomers'
import AdminUserProviders from './pages/admin/UserProviders'
import AdminRolesPermissions from './pages/admin/RolesPermissions'
import AdminDeleteAccountRequests from './pages/admin/DeleteAccountRequests'
import AdminCacheSystem from './pages/admin/CacheSystem'
import AdminEmailTemplates from './pages/admin/EmailTemplates'
import AdminContactMessages from './pages/admin/ContactMessages'
import AdminAbuseReports from './pages/admin/AbuseReports'
import AdminLocalization from './pages/admin/Localization'
import AdminSignin from './pages/admin/Signin'

function App() {
  return (
    <Routes>
      {/* User Routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/index-4" element={<Home4 />} />
        <Route path="/index-5" element={<Home5 />} />
        <Route path="/index-6" element={<Home6 />} />
        <Route path="/index-7" element={<Home7 />} />
        <Route path="/index-8" element={<Home8 />} />
        <Route path="/index-9" element={<Home9 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing-grid" element={<ListingGrid />} />
        <Route path="/listing-grid-sidebar" element={<ListingGridSidebar />} />
        <Route path="/listing-list-sidebar" element={<ListingListSidebar />} />
        <Route path="/listingmap-grid" element={<ListingmapGrid />} />
        <Route path="/listingmap-list" element={<ListingmapList />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-list-sidebar" element={<BlogListSidebar />} />
        <Route path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-listing" element={<MyListing />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Route>

      {/* Auth Routes without Layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Routes with AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="listings" element={<AdminListings />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="sub-categories" element={<AdminSubCategories />} />
        <Route path="locations" element={<AdminLocations />} />
        <Route path="review-type" element={<AdminReviewType />} />
        <Route path="review" element={<AdminReview />} />
        <Route path="comments" element={<AdminComments />} />
        <Route path="amenities" element={<AdminAmenities />} />
        <Route path="product-enquiry" element={<AdminProductEnquiry />} />
        <Route path="transactions" element={<AdminTransactions />} />
        <Route path="payment-gateway" element={<AdminPaymentGateway />} />
        <Route path="tax-rates" element={<AdminTaxRates />} />
        <Route path="payout-request" element={<AdminPayoutRequest />} />
        <Route path="payout-settings" element={<AdminPayoutSettings />} />
        <Route path="chat" element={<AdminChat />} />
        <Route path="add-page" element={<AdminAddPage />} />
        <Route path="pages-list" element={<AdminPagesList />} />
        <Route path="all-blog" element={<AdminAllBlog />} />
        <Route path="add-blog" element={<AdminAddBlog />} />
        <Route path="blogs-categories" element={<AdminBlogsCategories />} />
        <Route path="blogs-comments" element={<AdminBlogsComments />} />
        <Route path="countries" element={<AdminCountries />} />
        <Route path="states" element={<AdminStates />} />
        <Route path="cities" element={<AdminCities />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="faq" element={<AdminFaq />} />
        <Route path="membership" element={<AdminMembership />} />
        <Route path="membership-transactions" element={<AdminMembershipTransactions />} />
        <Route path="admin-earnings" element={<AdminEarnings />} />
        <Route path="provider-earnings" element={<AdminProviderEarnings />} />
        <Route path="user-list" element={<AdminUserList />} />
        <Route path="user-customers" element={<AdminUserCustomers />} />
        <Route path="user-providers" element={<AdminUserProviders />} />
        <Route path="roles-permissions" element={<AdminRolesPermissions />} />
        <Route path="delete-account-requests" element={<AdminDeleteAccountRequests />} />
        <Route path="cachesystem" element={<AdminCacheSystem />} />
        <Route path="email-templates" element={<AdminEmailTemplates />} />
        <Route path="contact-messages" element={<AdminContactMessages />} />
        <Route path="abuse-reports" element={<AdminAbuseReports />} />
        <Route path="localization" element={<AdminLocalization />} />
      </Route>

      {/* Admin Auth Routes */}
      <Route path="/admin/signin" element={<AdminSignin />} />

      {/* Error Pages */}
      <Route path="/error-500" element={<Error500 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
