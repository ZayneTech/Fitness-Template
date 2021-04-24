import React from 'react'
import DoughnutChart from './doughnut-chart';
import LineChart from './line-chart';
import TopSelling from './top-selling-chart';



const AdminStatistics = () => {
    return (
        <section className="admin-page">
        <div className="admin-programs">
            <div className="program-stats">
                <div className="program-chart">
                    <LineChart />
                </div>

                <div className="program-chart">
                    <DoughnutChart />
                </div>
            </div>

            <div className="top-selling">
                <h3>Top Selling Program</h3>

                <div className="top-selling-stats">
                    <div className="top-stat" id="top-program-name">
                        <h4>Program Name: </h4>
                        <h3>Full Body Split</h3>
                    </div>
                    <div className="top-stat">
                        <h4> Amount Sold: </h4>
                        <h3> 1,000 </h3>
                        <div className="stat-chart">
                            <TopSelling />
                        </div>
                    </div>
                    <div className="top-stat">
                        <h4>Profits Earned: </h4>
                        <h3>$10,000</h3>
                    </div>
                    <div className="top-stat">
                        <h4> Monthly Earnings </h4>
                        <h3> $250</h3>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default AdminStatistics;