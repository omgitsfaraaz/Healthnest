import './Main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart'
import PopChart from '../PopChart';
import Dropdown from '../dropdown/Dropdown';
import BoysTemp from '../BoysTemp';
import BoysHeight from '../BoysHeight';
import NewScatter from '../NewScatter';
import PieChart from '../PieChart';
import Vision from '../Vision';
import VisionPie from '../VisionPie';
import Hearing from '../Hearing';
import HearingPie from '../HearingPie';
import NewHeight from '../NewHeight';

const items = [
    {
      id: 1,
      value: '2018',
    },
    {
      id: 2,
      value: '2019',
    },
    {
      id: 3,
      value: '2020',
    },
  ]

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello!</h1>
                        <p>Welcome to your Healthnest dashboard.</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Students</p>
                            <span className="font-bold text-title">578</span>
                        </div> 
                    </div>

                    <div className="card">
                        <i className="fas fa-allergies fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Allergies</p>
                            <span className="font-bold text-title">2467</span>
                        </div> 
                    </div>

                    <div className="card">
                        <i className="fas fa-hospital-user fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Medications</p>
                            <span className="font-bold text-title">340</span>
                        </div> 
                    </div>

                    <div className="card">
                        <i className="fas fa-blind fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Disabilities</p>
                            <span className="font-bold text-title">645</span>
                        </div> 
                    </div>

                </div>

                {/* <div className="charts">
                    <div className="charts__left">
                    <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Delhi Public School, Bangalore</p>
                            </div>
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Overview</h1>
                                <p>Delhi Public School, Bangalore</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Boys</h1>
                                <p>5,000</p>
                            </div>

                            <div className="card2">
                                <h1>Girls</h1>
                                <p>4,200</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>

                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div>
                    {/* <PopChart /> */}
                    <Dropdown title="Select year" items={items} multiSelect />
                </div>
                {/* <div className="">
                    <div>
                        <h1 className="height-heading">Boys Height</h1>
                        <BoysHeight />
                    </div>
                </div> */}
                <div>
                    <NewScatter />
                </div>
                <div>
                    <PieChart />
                </div>
                {/* <div>
                    <Eyesight />
                </div> */}
                <div>
                    <Vision />
                </div>
                <div>
                    <VisionPie />
                </div>
                <div>
                    <Hearing />
                </div>
                <div>
                    <HearingPie />
                </div>
                <div>
                    <NewHeight />
                </div>
            </div>
        </main>
    )
}

export default Main;