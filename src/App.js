import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom';

//import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import { Counter } from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import EditPostForm from './features/posts/EditPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import { Navbar } from './layouts/Navbar';

// Building this application by follwoing th e Official Documentation :)

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
          <Routes>
              {/* <Route exact path="/" element={<PostsList />} /> */}
              <Route path="/posts" element={[<AddPostForm/>,<PostsList/>]} />
              <Route path="/posts/:postId" element={<SinglePostPage />} />
              <Route exact path="/editPost/:postId" element={<EditPostForm />} />
              <Route exact path="/counter" element={<Counter />} />
          </Routes>
            
            {/* <Navigate to="/" replace={true}/> */}
        
      </div>
    </Router>
  );
}

export default App;
