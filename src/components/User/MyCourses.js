import {Link} from 'react-router-dom';

function MyCourses() {
    return (
        <div className="card">
            <h5 className="card-header">My Courses</h5>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>PHP Developemnt</td>
                        <td><Link to="/">Suraj Kumar</Link></td>
                        <td>
                            <button className="btn btn-danger btn-sm active">Delete</button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
               
    )
}

export default MyCourses;