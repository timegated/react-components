import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/common/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <Router>
        <Layout>
            <App />
        </Layout>
    </Router>,
    document.getElementById("root")
);