import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const DataSciencePage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Data Science
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Data science is important because it combines tools, methods, and technology to generate meaning from data. Now a days devices  can automatically collect and store information. Online systems and payment portals capture more data in the fields of e-commerce, medicine, finance, and every other aspect of human life.
                        </span>
                        <br />
                        <span>
                            Artificial intelligence and machine learning innovations have made data processing faster and more efficient. Industry demand has created an ecosystem of courses, degrees, and job positions within the field of data science. Because of the cross-functional skillset and expertise required, data science shows strong projected growth over the coming decades.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        Data science is used to study data in four main ways:
                    </h2>
                    <div className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                1. Descriptive analysis
                            </span>
                            <span>
                                Descriptive analysis examines data to gain insights into what happened or what is happening in the data environment. It is characterized by data visualizations such as pie charts, bar charts, line graphs, tables, or generated narratives. For example, a flight booking service may record data like the number of tickets booked each day. Descriptive analysis will reveal booking spikes, booking slumps, and high-performing months for this service.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                2. Diagnostic analysis
                            </span>
                            <span>
                                Diagnostic analysis is a deep-dive or detailed data examination to understand why something happened. It is characterized by techniques such as drill-down, data discovery, data mining, and correlations. Multiple data operations and transformations may be performed on a given data set to discover unique patterns in each of these techniques, for example, the flight service might drill down on a particularly high-performing month to better understand the booking spike. This may lead to the discovery that many customers visit a particular city to attend a monthly sporting event.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                3. Predictive analysis
                            </span>
                            <span>
                                Predictive analysis uses historical data to make accurate forecasts about data patterns that may occur in the future. It is characterized by techniques such as machine learning, forecasting, pattern matching, and predictive modelling. In each of these techniques, computers are trained to reverse engineer causality connections in the data.For example, the flight service team might use data science to predict flight booking patterns for the coming year at the start of each year. The computer program or algorithm may look at past data and predict booking spikes for certain destinations in May. Having anticipated their customer’s future travel requirements, the company could start targeted advertising for those cities from February.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                4.	Prescriptive analysis
                            </span>
                            <span>
                                Prescriptive analytics takes predictive data to the next level. It not only predicts what is likely to happen but also suggests an optimum response to that outcome. It can analyze the potential implications of different choices and recommend the best course of action. It uses graph analysis, simulation, complex event processing, neural networks, and recommendation engines from machine learning.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataSciencePage;