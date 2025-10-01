import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CourseDetail from "../pages/Home/Courses/CourseDetail/CourseDetail";



function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses/:id" element={<CourseDetail />} />

                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
