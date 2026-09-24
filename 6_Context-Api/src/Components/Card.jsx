import { useTheme } from "./UseTheme"

function Card() {
    const {theme, toggleTheme} = useTheme();

    return (
        <main className="page-shell">
            <div className={`card product-card ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className={`card-title ${theme === "dark" ? 'text-green-100' : 'text-green-800'}`}>Jonathan</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button 
                        className="btn btn-primary"
                        onClick={toggleTheme}
                        >Toggle Theme</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Card