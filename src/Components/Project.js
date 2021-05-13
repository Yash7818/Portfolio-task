import React from 'react';
import Carousel from 'nuka-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Project(){

    const projarr = [
        {
            head:"Legal Document Recommendation System",
            desc:"Recommendation System for Indian Legal Documents, given small details of the legal case. Uses extractive summary approach to speed up the recommendation.Ranking of recommendations decided using cosine similarity score of documents.More than 90% accurate and achieves around 0.95 on the F1-score metric",
            date:"July '19 to June '20",
            techs:"Python, Numpy, Machine Learning, NLP, Scikit-learn, Gensim, Pandas, Scipy, NLTK"
        },
        {
            head:"Home Automation Using Machine Learning",
            desc:"Project of automating homes and offices using machine learning concepts.One component is built from scratch voice-controlled electrical appliances using smartphone only.Another component finds the solution of automating offce lighting by analyzing patterns from past and considering affecting factors like daylight using neural networks.Miniature model of offce lighting was used in the department in reality and turned out to be great success for them",
            date:"Sept. '17 to Apr. '18",
            techs:"Python, Numpy, Machine Learning, Android"
        },
        {
            head:"Stock Market Prediction",
            desc:"Use of Machine Learning Basic Models to predict future stock prices.Used data of last 1 year for future days last price prediction.Best model developed was 95% accurate for one of the stocks",
            date:"May '17 to Aug. '17",
            techs:"Python, Machine Learning, Numpy"
        }

    ];
    return(
        <>
        <h1>Projects</h1>

            <div class="proj-spe swiper-container">
                <div class="swiper-wrapper">
                <Carousel 
                    renderCenterLeftControls={({ previousSlide}) => (
                   <ArrowBackIosIcon onClick={previousSlide} style={{fontSize:"3em"}} />
                    )}
                    renderCenterRightControls={({ nextSlide}) => (
                   <ArrowForwardIosIcon onClick={nextSlide} style={{fontSize:"3em"}}/>
                    )}

                >
                {projarr.map((item,index)=>(
                <div class="myslide fade swiper-slide" >
                    <div class="proj1" style={{marginLeft:"3.5em"}} >
                        <div class="proj-data" style={{width:"100%",alignSelf:"center"}}>
                            <h2>{item.head}</h2>
                            <h4>{item.date}</h4>
                            {item.desc}
                            <div>
                                <h3>Techs used:</h3>
                                <div>
                                    {item.techs}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
                }
                 
                </Carousel>   
                </div>
            </div> 
        </>
    );
}