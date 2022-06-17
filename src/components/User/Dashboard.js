import {Link} from 'react-router-dom';
import MyCourses from './MyCourses';

function Dashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/favorite-courses" className="list-group-item list-group-item-action">My Courses</Link>
                            <Link to="/favorite-courses" className="list-group-item list-group-item-action">Favorite Courses</Link>
                            <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommended Couses</Link>
                            <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile Settings</Link>
                            <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>
                    </div>
                </aside>
                <section className="col-md-9">
                   <MyCourses />
                </section>
            </div>
        </div>
    )
}

export default Dashboard;