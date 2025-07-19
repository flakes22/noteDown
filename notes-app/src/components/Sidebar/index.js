import { Link } from 'react-router-dom';
export const Sidebar = () => {
    return (
        <aside className='flex flex-col gap-6 border-r-2 border-amber-800 h-screen p-4'>
            <Link className="flex align-center gap-1"to="/" >
                <span class="material-symbols-outlined">home</span>
                <span>Home</span></Link>
            <Link className="flex align-center gap-1" to="/archive">
                <span class="material-symbols-outlined">
                    archive
                </span>
                <span>Archive</span>
            </Link>
            <Link className="flex align-center gap-1" to="important">
            <span class="material-symbols-outlined">
label_important
</span><span>Important</span></Link>
            <Link className="flex align-center gap-1" to="bin">
            <span class="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span></Link>
        </aside>

    )
}