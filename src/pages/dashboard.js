import React, { Fragment, useEffect, useState } from 'react';
import NavBar from './NavBar';


import MenuBar from "./menuBar";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import FlatList from 'flatlist-react';
import { Auth } from 'aws-amplify';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
function Dashboard(){
    const [id, setId] = useState();
    const [section, setSections] = useState();
    const [pendingSection, setPendingSections] = useState();
    const ListPostsQuery = gql`
    query MyQuery($id: ID!) {
        getCurrentSection(person_id: $id){
          course_id
          semester
          meeting_time
          meeting_days
          taught_by
          course_name
        }
      }
      
      
      
    `;
    

    const PendingSectionQuery = gql`
    
    query MyQuery($id: ID!) {
        getPendingSection(person_id: $id) {
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
    const people = [
        {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
        {firstName: 'John', lastName: 'Doe', info: {age: 18}},
        {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
        {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
        {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
        {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
        {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
        {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
        {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
      ]

      
      useEffect(() => {
        async function requestData() {
          try {
            const session = await Auth.currentSession();
            setId(session.getIdToken().payload.sub);
            
            
          } catch (error) {
            console.log('Error getting current session:', error);
          }
        }
    
        requestData();
      }, []);
      
    console.log(id)

    const { loading, error, data } = useQuery(ListPostsQuery, {variables: { id: id },});

    const {loading: loadingPending, error: errorPending, data:dataPending} = useQuery(PendingSectionQuery, {variables: { id: id },});

    useEffect(() => {
        if (!loading && !error) {
          
          setSections(data.getCurrentSection);
        }
        else {
            console.log("Error", error)
        }
      }, [loading, error, data]);
    

      useEffect(() => {
        if (!loadingPending && !errorPending) {
          
          setPendingSections(dataPending.getPendingSection);
        }
        else {
            console.log("Error", error)
        }
      }, [loadingPending, errorPending, dataPending]);

      console.log(section) 
    
      const renderPerson = (section, idx) => {
        return (
            <div style={getItemStyle(idx)} key={idx}>
        {section.course_name} {section.taught_by} {section.meeting_time} {section.meeting_days}
        </div>
        );
    }
  
  const getItemStyle = (idx) => ({
    padding: 20,
    backgroundColor: idx % 2 === 0 ? '#c0c0c0' : '#ffffff',
  });


    

  


    return(
        
        
            
        
        
        

        <body id="reportsPage">
        <div className="" id="home">
        <NavBar />
        <div className="container">
        <MenuBar/>
            
            <div className="row tm-content-row tm-mt-big">
                <div className="tm-col tm-col-big">
                    <div className="bg-white tm-block">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Current Schedule</h2>
                            </div>
                        </div>
                        <FlatList
                            list={section}
                            renderItem={renderPerson}
                            renderWhenEmpty={() => <div>You have no classes for this semester!</div>}
                            displayrow

                        />
                    </div>
                </div>
                
                <div className="tm-col tm-col-big">
                    <div className="bg-white tm-block">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Pending Classes</h2>
                            </div>
                        </div>
                        <table className="table table-hover table-striped mt-3">
                        <FlatList
                            list={pendingSection}
                            renderItem={renderPerson}
                            renderWhenEmpty={() => <div>You have no pending classes!</div>}
                            displayrow

                        />
                        </table>
                    </div>
                </div>
    
            </div>
    
            <footer className="row tm-mt-small">
                <div className="col-12 font-weight-light">
                    <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                        Copyright &copy; Dr. Lewis - Never met the guy
                        
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <script src="../../public/js/jquery-3.3.1.min.js"></script>
   
    <script src="../../public/js/moment.min.js"></script>
   
    <script src="../../public/js/utils.js"></script>
    <script src="../../public/js/Chart.min.js"></script>
  
    <script src="../../public/js/fullcalendar.min.js"></script>
    
    <script src="../../public/js/bootstrap.min.js"></script>
  
    <script src="../../public/js/tooplate-scripts.js"></script>
    
    </body>
        
        
    );
}


export default Dashboard;


//this was deleted from that empty script thing, didn't work, no clue why

/* let ctxLine,
            ctxBar,
            ctxPie,
            optionsLine,
            optionsBar,
            optionsPie,
            configLine,
            configBar,
            configPie,
            lineChart;
        barChart, pieChart;
        $(function () {
            updateChartOptions();
            drawLineChart(); // Line Chart
            drawBarChart(); // Bar Chart
            drawPieChart(); // Pie Chart
            drawCalendar(); // Calendar

            $(window).resize(function () {
                updateChartOptions();
                updateLineChart();
                updateBarChart();
                reloadPage();
            });
        })
        */