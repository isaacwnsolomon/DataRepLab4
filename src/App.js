
// Adding imports such as routing, navigation bar and components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

// App function
function App() {
  return (
    // Routing navigation bar to components
    <Router>
      <NavigationBar />
      <Routes>
        
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Footer/>} />
        <Route path="/create" element={<Header/>} />
      </Routes>
    </Router>
  );
}
// Exporting app 
export default App;