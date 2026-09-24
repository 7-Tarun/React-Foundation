import { useAuth } from '../Context/AuthContext'

function Profile() {
    const { user, login, logout } = useAuth();

    return (

        <div className="flex min-h-screen items-center justify-center bg-blue-50 from-slate-50 via-white to-zinc-100 p-8">


            <div className="flex w-72 flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-semibold text-white shadow-md">
                    JD
                </div>



                <h2 className="mt-4 text-lg font-semibold text-slate-900">{`${user === null ? 'Welcome Guest' : `Welcome: ${user.name}`}`}</h2>
                <p className="text-sm text-slate-500">Frontend Developer</p>

                {user === null ? (
                    <button
                        type="button"
                        onClick={login}
                        className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        Login In
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={logout}
                        className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        Login Out
                    </button>
                )}

            </div>

        </div>
    );
}

export default Profile