import './App.css'
import { HashRouter, NavLink, Outlet, Routes, useParams, Route, useNavigate } from 'react-router-dom'

const Index = () => {
    return <p>首頁</p>
}
const Todo = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>這是 Todo 頁面</p>
            <button
                onClick={() => {
                    navigate('/login')
                }}
            >
                Logout
            </button>
        </>
    )
}
const Register = () => {
    return <p>這是註冊頁面</p>
}
const Login = () => {
    return <p>這是登入頁面</p>
}
const Post = () => {
    return (
        <div>
            <h3>Post 頁面</h3>
            <Outlet />
        </div>
    )
}
const PostId = () => {
    let params = useParams()
    return <p>Post: {params.postId}</p>
}
function App() {
    return (
        <div className="container">
            <HashRouter>
                <div className="nav-link">
                    <NavLink to="/">
                        <p>回到首頁</p>
                    </NavLink>
                    <NavLink to="/register">
                        <p>註冊頁面</p>
                    </NavLink>
                    <NavLink to="/login">
                        <p>登入頁面</p>
                    </NavLink>
                    <NavLink to="/todo">
                        <p>Todo 頁面</p>
                    </NavLink>
                    <NavLink to="/post">
                        <p>Post 頁面</p>
                    </NavLink>
                    <NavLink to="/post/post123">
                        <p>Post 詳細頁面</p>
                    </NavLink>
                </div>
                {/* Routes, Route 練習區 */}
                {/* 練習區 */}
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                    <Route path="/post" element={<Post />}>
                        <Route path=":postId" element={<PostId />}></Route>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
