import { MoviesGrid } from "../components/MoviesGrid";
import Search from "../components/Search";
import { useDebounce } from "../hoocks/useDebounse";
import { useQuery } from "../hoocks/UseQuery";

export default function LandingPage() {
    let query = useQuery();
    const search = query.get("search");

    const debounsed = useDebounce(search, 400)

    return (
        <div>
            <Search />
            <MoviesGrid key={debounsed} />
        </div>
    );
}
