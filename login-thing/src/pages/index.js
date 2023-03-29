import React, {Fragment} from 'react';
function Index(){
    return(
        <Fragment>
            
        
      <div className id="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  {/* <i class="fas fa-3x fa-tachometer-alt tm-site-icon"></i> */}
                  <img src="img/Trin-icon.png" alt="Tiger" height="60%" width="20%" />
                  <h1 className="tm-site-title mb-0">Dashboard</h1>
                </a>
                <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Dashboard
                        <span className="sr-only">(current)</span>
                      </a>
                    </li><li className="nav-item">
                      <a className="nav-link" href="products.html">Browser</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="accounts.html">Profile</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Settings
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Idk</a>
                        <a className="dropdown-item" href="#">Something</a>
                        <a className="dropdown-item" href="#">Helpful</a>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="login.html">
                        <i className="far fa-user mr-2 tm-logout-icon" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* row */}
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
                    </tr></tbody>
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
                Copyright © Dr. Lewis - Never met the guy
              </p>
            </div>
          </footer>
        </div>
      </div>
      {/* https://jquery.com/download/ */}
      {/* https://momentjs.com/ */}
      {/* http://www.chartjs.org/docs/latest/ */}
      {/* https://fullcalendar.io/ */}
      {/* https://getbootstrap.com/ */}
    
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