import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function CourseDetail() {
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                    <p className="fw-bold">Course By: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Furation: 3 Hours 30 Minuts</p>
                    <p className="fw-bold">Total Enrolled: 456 Students</p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            {/* Course Vídeos */}
            <div className="card mt-4">
                <h5 className="card-header">
                    Course Videos
                </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="brn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="brn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="brn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="brn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="brn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                </ul>
            </div>

            <h3 className="pub-1 mb-4 mt-5">Related Courses<a href="#" class="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                <div className="card">
                    <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;