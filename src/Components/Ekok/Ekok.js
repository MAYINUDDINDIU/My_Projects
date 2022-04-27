import React, { useEffect, useState } from 'react';
import logo from '../icon/logo.png'
import { Tooltip, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadialBarChart, RadialBar, Cell, BarChart, Bar, ResponsiveContainer, ComposedChart, Area, Scatter } from 'recharts';
import './Ekok.css'
import useData from '../useData/useData';
import axios from 'axios';


const Ekok = () => {

    const [ekokData, setEkokData] = useState([]);
    const [reData, setReData] = useState([]);
    useEffect(() => {
        axios.get('http://202.164.213.67/payment/business.php')
            .then(data => {
                const loadedData = data.data.Policy_Statement;

                const phoneData = loadedData.map(ekok => {

                    // const office = {
                    //     ofc: ekok.OFF_NAME

                    // }

                    // const fy_b = {
                    //     fb: ekok.FY_BUSINESS
                    // }
                    // const fy_t = {
                    //     ft: ekok.FY_TARGET
                    // }
                    const partss = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 1000000;
                    const ph = {
                        name: partss[0],
                        target: (partss[1]) / figCore,
                        business: (partss[2]),
                        ratio: (partss[3]),
                    };
                    return ph;
                });
                setEkokData(phoneData);
                console.log(phoneData);

            })
    }, [])

    // RENUAL DATA ================================================
    useEffect(() => {
        axios.get('http://202.164.213.67/payment/business.php')
            .then(data => {
                const loadedData = data.data.Policy_Statement;

                const phoneData = loadedData.map(ekok => {

                    // const office = {
                    //     ofc: ekok.OFF_NAME

                    // }

                    // const fy_b = {
                    //     fb: ekok.FY_BUSINESS
                    // }
                    // const fy_t = {
                    //     ft: ekok.FY_TARGET
                    // }
                    const parts = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;

                    const ph = {
                        name: parts[0],
                        target: (parts[1]) / figCore,
                        business: (parts[2]),
                        ratio: (parts[3]),
                        re_target: (parts[4]),
                        re_business: (parts[5]),
                        re_ratio: (parts[6]),
                        t_bus: (parts[7]),
                        t_target: (parts[8]),
                        t_ratio: (parts[9])
                    };
                    return ph;
                });
                setReData(phoneData);
                console.log(phoneData);

            })
    }, [])
    // RENUAL DATA ================================================

    return (

        <div>
            <button style={{ fontSize: '12px' }} className='btn btn-primary m-1'><b>FIRST YEAR TARGET VS BUSINESS</b></button>
            {/* <img className='rounded-circle shadow bg-white p-3 m-3' style={{ width: '100px', height: '100px' }} src={logo} alt="" /> */}
            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>BUSINESS</b>  INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-EKOK)</p> */}
            <div className="row container-fluid justify-content-center p-1">
                <div class="shadow p-3 m-0 mb-2 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "220px", marginTop: '0px', background: '#eceff1' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />
                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={40} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="target"
                                        barSize={30}
                                        fill="#0031ca"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="business"
                                        barSize={25}
                                        fill="#00600f"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Ratio'

                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={100}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>


            <button style={{ fontSize: '12px' }} className='btn btn-primary m-1'><b >RENEWAL TARGET VS BUSINESS</b></button>

            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>RENEWAL</b>  BUSINESS INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-EKOK)</p> */}
            <div className="row container-fluid p-1">
                <div class="shadow p-3 m-0 mb-1 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "220px", marginTop: '0px', background: '#eceff1' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={reData}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}

                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />
                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={40} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_target"
                                        barSize={30}
                                        fill="#0088a3"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="R_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_business"
                                        barSize={25}
                                        fill="#004ba0"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="R_Bus"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="re_ratio"
                                        stroke="#82ba00"
                                        yAxisId="right"
                                        color='#fff'
                                        name='R_Ratio'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>


            <button style={{ fontSize: '12px' }} className='btn btn-primary m-1'><b>TOTAL TARGET VS BUSINESS</b></button>

            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>TOTAL</b>  BUSINESS INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-EKOK)</p> */}
            <div className="row container-fluid p-1">
                <div class="shadow p-3  mb-5 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "220px", marginTop: '0px', background: '#ffebee' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={reData}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />
                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={75} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_target"
                                        barSize={30}
                                        fill="#0068ba"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="T_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_bus"
                                        barSize={25}
                                        fill="#5cac50"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="T_Bus"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="t_ratio"
                                        stroke="#004f00"
                                        yAxisId="right"
                                        color='#333'
                                        activeDot={{ r: 10 }}
                                        name='T_Ratio'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>





        </div >
    );
};

export default Ekok;