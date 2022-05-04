import React from "react";

import Main from "./Main";
import Topbar from "./dashboard/container/Topbar";
import Footer from "./dashboard/container/Footer";
import Sidebar from './dashboard/container/Sidebare';


const App = () => (
    <React.Fragment>
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
                <Topbar />
                <Main />
            </div>
            <Footer />
        </div>
    </React.Fragment>
);

export default App;
