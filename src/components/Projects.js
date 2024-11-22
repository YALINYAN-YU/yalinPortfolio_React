import React from 'react';

const Projects = () => {
    const projects = [
        {
            company: 'TAWA Services Inc.',
            role: 'Data Engineer',
            period: 'Nov 2023 – Now',
            achievements: [
                "Designed and implemented a recommendation system for TAWA 2.0 e-commerce app/website, leveraging Apache Kafka and Flink for real-time streaming data processing",
                "Built a scalable distributed storage and indexing system using ClickHouse, optimized for high-volume data processing and model training",
                "Developed ETL pipelines using Spark MLlib, enhancing sales revenue by 22% in Q3 through collaborative filtering and embedding algorithms",
                "Deployed Grafana for pipeline monitoring, ensuring system reliability and stability",
                "Saved $3 million by delivering a data warehouse solution, including data modeling and schema design, and optimizing data pipelines using AWS services",
                "Implemented Apache Airflow to replace Cron jobs, achieving a 20% improvement in processing efficiency",
            ],
        },
        {
            company: 'Pacific Gas and Electric Company',
            role: 'Data Engineer',
            period: 'April 2022 – July 2023',
            achievements: [
                "Implemented end-to-end ETL pipelines for processing 65 TB raw data using AWS services, improving efficiency by 20%",
                "Streamlined data processing tasks with Python, SQL, and PySpark, and optimized data models for business intelligence tools like Tableau and Power BI",
                "Automated CI/CD workflows using Jenkins and Terraform, saving 20 hours of manual effort",
                "Collaborated on GraphQL API development for enhanced data access and retrieval",
            ],
        },
        {
            company: 'PayPal Inc.',
            role: 'Data Engineer',
            period: 'Oct 2021 – Mar 2022',
            achievements: [
                "Developed a real-time fraud alert monitoring system, achieving a 50% increase in operational efficiency for the fraud defense team",
                "Optimized algorithms to reduce false alerts by 10%, and automated reporting with Python and SQL",
                "Designed email interfaces and dashboards for real-time alerts using Python and Matplotlib",
            ],
        },
        {
            company: 'Yeshiva University',
            role: 'Research Assistant',
            period: 'Oct 2019 – Sept 2020',
            achievements: [
                "Enhanced database management systems (MySQL, PostgreSQL, MongoDB) and developed Tableau dashboards for data-driven insights",
                "Implemented machine learning algorithms (LSTM, linear regression) for price prediction",
                "Utilized Beautiful Soup for data extraction from HTML/XML files, streamlining information gathering",
            ],
        },
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <h3 style={{ margin: '0 0 10px', fontWeight: 'bold', textAlign: 'left' }}>
                        {project.company}
                    </h3>
                    <p style={{ margin: '0 0 10px' }}>
                        <strong>Role:</strong> {project.role} <br />
                        <strong>Period:</strong> {project.period}
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                        {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Projects;
