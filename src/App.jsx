import style from "./components/moviesCard.module.css";
import { Detail } from "./pages/Details";
import {
    Link,
    Route, Routes
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export function App() {
    return (
        
        <div>
            <header className={style.header}>
              <Link to='/'><h1 className={style.text}>Movies</h1></Link>  
            </header>
                <main className={style.main}>
                    <Routes>
                        <Route path="/movie/:movieId" element= {<Detail/>} />
                        <Route path="/" element={<LandingPage/>}/>
                    </Routes>    
                </main>
        </div>
           
    );
}
