import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

// Layout with sidebar + header
import Layout from './Layout';

// Public page
import Login from './components/Login';

// Protected pages (all others)
import Addgroup from "./components/Addgroup";
import Addlnr from "./components/Addlnr";
import Addlogo from "./components/Addlogo";
import Addnotestatus from "./components/Addnotestatus";
import Addnotetype from "./components/Addnotetype";
import AddRole from "./components/AddRole";
import BookingFullReport from "./components/BookingFullReport";
import Contract from "./components/Contract";
import CorporateReports from "./components/CorporateReports";
import Dashboard from "./components/Dashboard";
import Datatable from "./components/Datatable";
import Editgroup from "./components/Editgroup";
import Edithotel from "./components/Edithotel";
import Editleads from "./components/Editleads";
import Editlnr from "./components/Editlnr";
import Editlogo from "./components/Editlogo";
import Editnotestatus from "./components/Editnotestatus";
import Editnotetype from "./components/Editnotetype";
import Editrole from "./components/Editrole";
import Edituser from "./components/Edituser";
import FrontdeskReport from "./components/FrontdeskReport";
import Grouplist from "./components/Grouplist";
import Hotelcopy from "./components/Hotelcopy";
import Hoteledittesting from "./components/Hoteledittesting";
import HotelAdd from "./components/HotelAdd";
import Index from "./components/Index";
import IndexHotel from "./components/IndexHotel";
import IndexHotelTest from "./components/IndexHotelTest";
import Leadedittesting from "./components/Leadedittesting";
import Leads from "./components/Leads";
import LeadsList from "./components/LeadsList";
import LeadsListTest from "./components/LeadsListTest";
import LeadAdd from "./components/LeadAdd";
import Lnrlist from "./components/Lnrlist";
import Logolist from "./components/Logolist";
import Notestatus from "./components/Notestatus";
import NotestatusOld from "./components/NotestatusOld";
import NotesReport from "./components/NotesReport";
import Notetype from "./components/Notetype";
import OwnerData from "./components/OwnerData";
import Permissionadd from "./components/Permissionadd";
import Permissionedit from "./components/Permissionedit";
import Permissionlist from "./components/Permissionlist";
import Printlead from "./components/Printlead";
import Resetpassword from "./components/Resetpassword";
import Role from "./components/Role";
import Table from "./components/Table";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Template4 from "./components/Template4";
import UserAdd from "./components/UserAdd";
import UserList from "./components/UserList";
import UserList1809 from "./components/UserList1809";
import Viewbookingcopy from "./components/Viewbookingcopy";
import Viewlead from "./components/Viewlead";
import ViewleadsBooking from "./components/ViewleadsBooking";
import ViewleadsContact from "./components/ViewleadsContact";
import ViewleadTesting from "./components/ViewleadTesting";
import Submitforaddhotel from "./components/Submitforaddhotel";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Layout */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            {/* Redirect to dashboard */}
            <Route index element={<Navigate to="/dashboard" />} />

            {/* All protected child routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addgroup" element={<Addgroup />} />
            <Route path="addlnr" element={<Addlnr />} />
            <Route path="addlogo" element={<Addlogo />} />
            <Route path="addnotestatus" element={<Addnotestatus />} />
            <Route path="addnotetype" element={<Addnotetype />} />
            <Route path="addrole" element={<AddRole />} />
            <Route path="bookingfullreport" element={<BookingFullReport />} />
            <Route path="contract" element={<Contract />} />
            <Route path="corporatereports" element={<CorporateReports />} />
            <Route path="datatable" element={<Datatable />} />
            <Route path="editgroup" element={<Editgroup />} />
            <Route path="edithotel" element={<Edithotel />} />
            <Route path="editleads" element={<Editleads />} />
            <Route path="editlnr" element={<Editlnr />} />
            <Route path="editlogo" element={<Editlogo />} />
            <Route path="editnotestatus" element={<Editnotestatus />} />
            <Route path="editnotetype" element={<Editnotetype />} />
            <Route path="editrole" element={<Editrole />} />
            <Route path="edituser" element={<Edituser />} />
            <Route path="frontdeskreport" element={<FrontdeskReport />} />
            <Route path="grouplist" element={<Grouplist />} />
            <Route path="hotelcopy" element={<Hotelcopy />} />
            <Route path="hoteledittesting" element={<Hoteledittesting />} />
            <Route path="hoteladd" element={<HotelAdd />} />
            <Route path="index" element={<Index />} />
            <Route path="indexhotel" element={<IndexHotel />} />
            <Route path="indexhoteltest" element={<IndexHotelTest />} />
            <Route path="leadedittesting" element={<Leadedittesting />} />
            <Route path="leads" element={<Leads />} />
            <Route path="leadslist" element={<LeadsList />} />
            <Route path="leadslisttest" element={<LeadsListTest />} />
            <Route path="leadadd" element={<LeadAdd />} />
            <Route path="lnrlist" element={<Lnrlist />} />
            <Route path="logolist" element={<Logolist />} />
            <Route path="notestatus" element={<Notestatus />} />
            <Route path="notestatusold" element={<NotestatusOld />} />
            <Route path="notesreport" element={<NotesReport />} />
            <Route path="notetype" element={<Notetype />} />
            <Route path="ownerdata" element={<OwnerData />} />
            <Route path="permissionadd" element={<Permissionadd />} />
            <Route path="permissionedit" element={<Permissionedit />} />
            <Route path="permissionlist" element={<Permissionlist />} />
            <Route path="printlead" element={<Printlead />} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="role" element={<Role />} />
            <Route path="table" element={<Table />} />
            <Route path="template1" element={<Template1 />} />
            <Route path="template2" element={<Template2 />} />
            <Route path="template3" element={<Template3 />} />
            <Route path="template4" element={<Template4 />} />
            <Route path="useradd" element={<UserAdd />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="userlist1809" element={<UserList1809 />} />
            <Route path="viewbookingcopy" element={<Viewbookingcopy />} />
            <Route path="viewlead" element={<Viewlead />} />
            <Route path="viewleadsbooking" element={<ViewleadsBooking />} />
            <Route path="viewleadscontact" element={<ViewleadsContact />} />
            <Route path="viewleadtesting" element={<ViewleadTesting />} />
            <Route path="submitforaddhotel" element={<Submitforaddhotel />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
