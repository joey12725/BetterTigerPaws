import React, {Fragment} from 'react';

import MenuBar from "./menuBar";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function Index(){
    return(
        <Fragment>
            
            <body id="reportsPage">
        <div className="" id="home">
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
                        <table className="table table-hover table-striped mt-3">
                            <tbody>
                                <tr>
                                    <td>Ancient Pottery Studies - CLAS-3455-2</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Yoga Economics - ECON-3302</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Advanced Quantum Calculus Deluxe - MATH - 1306-1</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Philosophy of Cheese Selection (Abridged) - PHIL-2609-3</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Studies of the Dubious - CSCI-3309</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tm-col tm-col-big">
                    <div className="bg-white tm-block">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Dashboarded Classes</h2>
                            </div>
                        </div>
                        <table className="table table-hover table-striped mt-3">
                            <tbody>
                                <tr>
                                    <td>Hispanic Basket Weaving - ANTH-1301-2</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Classic Cambodian Film Hist. - FILM-2309</td>
                                    <td> </td>
                                </tr>
                                
                            </tbody>
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
        </Fragment>
    )
}

export default Index;

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