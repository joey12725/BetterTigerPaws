import React, {Fragment, useState, useEffect} from 'react';
import MenuBar from "./menuBar";
import {Link, Navigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
function AddProduct(){
    let [courseName, setCourseName] = useState('');
    let [courseID, setCourseID] = useState('');
    let [professor, setProfessor] = useState('');
    let [subject, setSubject] = useState('');
    let [sectionCode, setSectionCode] = useState('');
    let [meetingDays, setMeetingDays] = useState('');
    let [meetingTime, setMeetingTime] = useState('');
    let [semester, setSemester] = useState('');

    
    
    const ListPostsMutation = gql`
    mutation MyMutation(
        $course_id: ID!,
        $course_name: String!,
        $course_subj: String!,
        $meeting_days: String!,
        $meeting_time: String!,
        $section_code: String!,
        $semester: String!,
        $taught_by: String!
        ) {
        createSection(
          course_id: $course_id,
          course_name: $course_name,
          course_subj: $course_subj,
          meeting_days: $meeting_days,
          meeting_time: $meeting_time,
          section_code: $section_code,
          semester: $semester,
          taught_by: $taught_by
          ) {
              course_id
              semester
              meeting_time
              meeting_days
              taught_by
              course_name
            }
        }
        `;
        
    const [createSection, { data, loading, error }] = useMutation(ListPostsMutation);
      
    

    const handleSectionSubmit = (e) => {
        e.preventDefault()
        console.log(courseID)
        console.log(courseName)
        console.log(professor)
        console.log(subject)
        console.log(sectionCode)
        console.log(meetingDays)
        console.log(meetingTime)
        console.log(semester)

        createSection({
            variables: {
              course_id: courseID,
              course_name: courseName,
              course_subj: subject,
              meeting_days: meetingDays,
              meeting_time: meetingTime,
              section_code: sectionCode,
              semester: semester,
              taught_by: professor
            }
          });

        console.log(error)
    }
    
    return(
        <Fragment>
            
<body className="bg02">
    <div className="container">
        <MenuBar/>
        <div className="row tm-mt-big">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <div className="bg-white tm-block">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tm-block-title d-inline-block">Create Section</h2>
                        </div>
                    </div>
                    <div className="row mt-4 tm-edit-product-row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <form action="" className="tm-edit-product-form">
                                <div className="input-group mb-3">
                                    <label  className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Course ID
                                    </label>
                                    <input id="name" name="name" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" onChange={e => setCourseID(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Course Name</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setCourseName(e.target.value)} required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Course Subject</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setSubject(e.target.value)} required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Semester </label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setSemester(e.target.value)} required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Section Code</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setSectionCode(e.target.value)}required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Meeting Time</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setMeetingTime(e.target.value)}required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Taught By</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setProfessor(e.target.value)}required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Meeting Days</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" onChange={e => setMeetingDays(e.target.value)} required></textarea>
                                </div>
                               
                                <div className="input-group mb-3">
                                    <div className="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                                        <button type="submit" className="btn btn-primary" onClick={handleSectionSubmit}>Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <footer className="row tm-mt-big">
            <div className="col-12 font-weight-light">
                <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                    Copyright &copy; Leeroy's Buttcheeks
                </p>
            </div>
        </footer>
    </div>


    
</body>
        </Fragment>
    )
}

export default AddProduct;

//shit Brok 

/*
<script>
        $(function () {
            $('#expire_date').datepicker();
        });
    </script>
*/
