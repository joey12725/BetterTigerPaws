import React, {Fragment, useState, useEffect} from 'react';
import MenuBar from "./menuBar";
import {Link, Navigate} from 'react-router-dom';
import { useQuery ,useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Auth } from 'aws-amplify';
import NavBar from './NavBar';


function Products(){
    const classes = [{name: 'Biology', code: 'BIO 101', professor: 'Dr. Smith', dept: 'Biology' }, {name: 'Biology', code: 'BIO 101', professor: 'Dr. Smith', dept: 'Biology' }]
    let courses = [{course_name: "Empty", course_id: "Empty", taught_by: "Empty", section_code: "Empty", meeting_days: "Empty", meeting_time: "Empty", semester: "Empty"}]

    const [userAttributes, setAttributes] = useState('');
    const [selectedSections, setSelectedSections] = useState([]);

    const ListPostsQuery = gql`
    query MyQuery {
        getAllSections {
          meeting_time
          section_code
          semester
          taught_by
          meeting_days
          course_name
          course_id
          course_subj
        }
      }
      
      
    `;

    const RegisterMutation = gql`
    mutation MyMutation($person_id: ID!, $section_code: String!) {
        registerSection(person_id: $person_id, section_code: $section_code) {
            course_id
            semester
            meeting_time
            meeting_days
            taught_by
            course_name
            course_subj
      }
    }
      
    `;

    useEffect(() => {
    async function getUserAttributes() {
        // Retrieve the current authenticated user
        const user = await Auth.currentAuthenticatedUser();
      
        // Retrieve the user's attributes
        const attributes = user.attributes;
      
        // Print the attributes to the console
        console.log(attributes);
        setAttributes(attributes);
      }
      getUserAttributes();
    }, []);

    console.log(userAttributes)
    const { loading, error, data } = useQuery(ListPostsQuery);
    
    const [registerSection, { data: dataMutation, loading: loadingMutation, error:errorMutation }] = useMutation(RegisterMutation);
      

        // Log the data
    if (!loading && !error) {
          console.log('Query data:', data.getAllSections);
          courses = data.getAllSections;
    }

    const handleCheckboxChange = (event, item) => {
        if (event.target.checked) {
          setSelectedSections((prevSelectedCourses) => [...prevSelectedCourses, item]);
        } else {
          setSelectedSections((prevSelectedCourses) => prevSelectedCourses.filter((course) => course.section_code !== item.section_code));
        }
      };
    
      const handleAddSelectedCourses = () => {
        selectedSections.forEach((section) => {
            registerSection({ variables: { person_id: userAttributes.sub, section_code: section.section_code } });
        });
    };

    return(
        
        <Fragment>
<body id="reportsPage" className="bg02">
    <div className="" id="home">
        <NavBar></NavBar>
        <div className="container">
            <MenuBar/>
            <div className="row tm-content-row tm-mt-big">
                <div className="col-xl-8 col-lg-12 tm-md-12 tm-sm-12 tm-col">
                    <div className="bg-white tm-block h-100">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="tm-block-title d-inline-block">Class Browser</h2>

                            </div>
                            <div className="col-md-4 col-sm-12 text-right">

                            {userAttributes['custom:isAdmin'] !== null && userAttributes['custom:isAdmin'] == 'True' ? (
                                <Link to="/addproduct">Add Class</Link>
                                ) : (
                                <div></div>
                                )}

                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-striped tm-table-striped-even mt-3">
                                <thead>
                                    <tr className="tm-bg-gray">
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col" className="text-center">Dept</th>
                                        <th scope="col" className="text-center">Class Code</th>
                                        <th scope="col">Professor</th>
                                       <th scope="col" className="text-center">Meeting Times</th>
                                       <th scope="col" className="text-center">Meeting Days</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {courses.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">
                                        <input value={item.course_name} type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, item)} />
                                    </th>
                                    <td className="tm-product-name">{item.course_name}</td>
                                    <td className="text-center">{item.course_subj}</td>
                                        <td className="text-center">{item.section_code}</td>
                                        <td>{item.taught_by}</td>
                                        <td>{item.meeting_days}</td>
                                        <td>{item.meeting_time}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="tm-table-mt tm-table-actions-row">
                            <div className="tm-table-actions-col-left">
                                <button className="btn btn-danger" onClick={handleAddSelectedCourses}>Add Selected to Dashboard</button>
                            </div>
                            <div className="tm-table-actions-col-right">
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-12 tm-md-12 tm-sm-12 tm-col">
                    <div className="bg-white tm-block h-100">
                        <h2 className="tm-block-title d-inline-block">Departments</h2>
                        <table className="table table-hover table-striped mt-3">
                            <tbody>
                                <tr>
                                    <td>Biology</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Chemistry</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Communications</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Economics</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Engineering</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>History</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Mathematics</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Physics</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>

                        <a href="#" className="btn btn-primary tm-table-mt">Switch to Pathways</a>
                    </div>
                </div>
            </div>
            <footer className="row tm-mt-small">
                <div className="col-12 font-weight-light">
                    <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                        Copyright &copy; Dr. Myers - He look like Einstein
                        
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <script src="../../public/js/jquery-3.3.1.min.js"></script>
    
    <script src="../../public/js/bootstrap.min.js"></script>
    
    
</body>
        </Fragment>
    )
}

export default Products;

//Shit didn't work so deleted
/*
<script>
        $(function () {
            $('.tm-product-name').on('click', function () {
                window.location.href = "edit-product.html";
            });
        })
    </script>
*/