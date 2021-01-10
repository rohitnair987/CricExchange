import Header from './components/Header';
import Footer from './components/Footer';
import { SearchPlayer } from './components/SearchPlayer';

export const App = (): JSX.Element => {
    return (
        <div className="main-container">
            <Header />

            <SearchPlayer />
            
            <Footer />
        </div>
    );
}
