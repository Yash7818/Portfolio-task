import React from 'react';
import Button from '@material-ui/core/Button';

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
                        <div className="resume-ts" >
                            <h2>Awards</h2>
                            <ul>
                               <li>
                                   <h3>Inception 2.0</h3>
                                   <div>ACM NIT Surat</div>
                                   <div>Held 2nd Position in the competitive programming competition</div>
                               </li>
                            </ul>
                        </div>

                        <div className="resume-ts" >
                                <Button variant="contained" color="primary" onClick={()=>window.open("https://drive.google.com/file/d/1dl0-vEN9bnlSUX1EsOiEkuZVHS45Jl1p/view?usp=sharing")}>Resume</Button>
                        </div>

                    </div>
                </div>
                <div className="resume-l" >
                    <div>
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
                    <div>
                    <h2>Publications</h2>
                    <ul>
                        <li>
                           <div>
                           A. Trivedi, A. Trivedi, S. Varshney, V. Joshipura, R. Mehta and J. Dhanani, "Extracted Summary Based
                            Recommendation System for Indian Legal Documents," 2020 11th International Conference on Computing,
                            Communication and Networking Technologies (ICCCNT), Kharagpur, India, 2020, pp. 1-6, doi:
                            10.1109/ICCCNT49239.2020.9225290.
                           </div>
                        </li>
                        <li className="sec-resu">
                            <div>
                            Trivedi A., Trivedi A., Varshney S., Joshipura V., Mehta R., Dhanani J. (2021) Similarity Analysis of Legal
                            Documents: A Survey. In: Fong S., Dey N., Joshi A. (eds) ICT Analysis and Applications. Lecture Notes in
                            Networks and Systems, vol 154. Springer, Singapore. https://doi.org/10.1007/978-981-15-8354-4_49
                            </div>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                
            </div>
           
        </>
    );
}