import {Link} from 'react-router-dom';
export const Sidebar=()=>{
    return(
        <aside className='flex flex-col gap-3 border-r-2 border-amber-800 w-24 h-screen p-3'>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <Link to="important">Important</Link>
            <Link to="bin">Bin</Link>
        </aside>

    )
}