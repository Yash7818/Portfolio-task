import React from 'react';

export default function Resume(){
    return (
        <>
        <h1>Resume</h1>
            <div className="resume-w">
                <div className="resume-t">
                    <div className="resume-tf">
                        <h2>Summary</h2>
                        
                        <ul>
                        <h3>Sourabh Varshney</h3>
                        <div>
                            Highly talented IT Professional with exemplary academic and professional record,
                            known for providing great analysis, insights for complex situations and
                            ending innovative solutions to various types of problems
                        </div>
                        <div className="resume-a">
                            Budaun, Uttar Pradesh
                        </div>
                        <div className="resume-a">
                            sourabhvarshney111@gmail.com
                        </div>
                        </ul>
                    
                    </div>
                    <div className="resume-ts">
                        <h2>
                            Education
                        </h2>
                        <ul>
                            <li>
                                <h3>Bachelor Of Technology,Computer Engineering</h3>
                                <div>
                                   National Institute Of Technology, Surat
                                </div>
                                <div className="resume-y">
                                    2016-2020
                                </div>
                                <div>
                                    CGPA - 9.56
                                </div>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>
                <div className="resume-l" >
                    <h2>Work Experience</h2>
                    <ul>
                        <li>
                            <h3>D. E. Shaw India Private Limited</h3>
                            <div>
                                Member Technical
                            </div>
                            <div className="resume-s">
                                Full time &#8226; Present
                            </div>
                        </li>
                        <li className="sec-resu">
                            <h3>D. E. Shaw India Private Limited</h3>
                            <div>Intern</div>
                            <div className="resume-s">
                                Internship &#8226; May - July '19
                            </div>
                        </li>
                        <li className="sec-resu">
                            <h3>MLPACK</h3>
                            <div>Contributor</div>
                            <div className="resume-s">
                                Part time &#8226; Dec '17 - Apr '18
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
           
        </>
    );
}