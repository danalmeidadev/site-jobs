import React from 'react';
import heroBanner from '../../assets/banners/hero.jpg';
import { Container, Row } from 'reactstrap';
import { HeroCaption, Category, BoxCategory, SingleServices, ButtonCategory, BackgroundCv, CvCaption, SectionJobs, JobsTitle, SingleJob } from './styles';
import IconDesigner from '../../assets/icones/designer.svg'
import { FiTarget, FiMonitor, FiCode, FiSmartphone } from 'react-icons/fi';
import {FaMoneyBill, FaMapMarkerAlt} from 'react-icons/fa';
import ImgJob1 from '../../assets/jobs/job-list1.png';
import ImgJob2 from '../../assets/jobs/job-list2.png';
import ImgJob3 from '../../assets/jobs/job-list3.png';
import ImgJob4 from '../../assets/jobs/job-list4.png';


const Home: React.FC = () => {

  return (
    <>
      <Container className="p-0" fluid={true}>
        <img className="img-fluid" src={heroBanner} alt="Banner" />
        <HeroCaption className="hero-caption">
          <h1>Encontre as melhores vagas do mercado! </h1>
        </HeroCaption>
      </Container>

      <Container>
        <div className="row">
          <div className="col-lg-12">
            <Category>
              <span>
                pacotes em destaque
        </span>
              <h1>Principais Categorias </h1>
            </Category>
          </div>
        </div>
      </Container>

      <Container>
        <BoxCategory>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiMonitor />
              <h5><a href="">Designer</a></h5>
              <span><a href="">655</a></span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiCode />
              <h5><a href="">Programadores</a></h5>
              <span><a href="">655</a></span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiTarget />
              <h5><a href="">Marketing</a></h5>
              <span><a href="">655</a></span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiSmartphone />
              <h5><a href="">Mobile</a></h5>
              <span><a href="">655</a></span>
            </SingleServices>
          </div>

        </BoxCategory>
        <div className="row">
          <div className="col-lg-12">
            <ButtonCategory>
              <a href="">Saiba mais</a>
            </ButtonCategory>
          </div>
        </div>
      </Container>

      <BackgroundCv>
        <Container>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <CvCaption>
                <p>Confira nossas vagas!</p>
                <p>Faça a diferença com seu currículo online!</p>
                <a href="">Cadastre seu currículo agora</a>
              </CvCaption>
            </div>
          </div>
        </Container>
      </BackgroundCv>

      <SectionJobs>
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <JobsTitle>
                <span>Vagas Recentes</span>
                <h2>Oportunidades em Destaque</h2>
              </JobsTitle>
            </div>
          </div>
          <div className="row justify-content-centrer">
            <div className="col-lg-12">

              <SingleJob>
                <div className="job-items">
                  <div className="company-img">
                    <a href="a"><img src={ImgJob1} alt="Job" /></a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html"><h4>Digital Marketing</h4></a>
                    <ul>
                      <li>Creative Agency</li>
                      <li><FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro</li>
                      <li><FaMoneyBill /> R$3500,00 - R$4000,00</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link">
                  <a href="a">Full Time</a>
                  <span>7 horas atras</span>
                </div>
              </SingleJob>

              <SingleJob>
                <div className="job-items">
                  <div className="company-img">
                    <a href="a"><img src={ImgJob1} alt="Job" /></a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html"><h4>Digital Marketing</h4></a>
                    <ul>
                      <li>Creative Agency</li>
                      <li><FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro</li>
                      <li><FaMoneyBill /> R$3500,00 - R$4000,00</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link">
                  <a href="a">Full Time</a>
                  <span>7 horas atras</span>
                </div>
              </SingleJob>

              <SingleJob>
                <div className="job-items">
                  <div className="company-img">
                    <a href="a"><img src={ImgJob1} alt="Job" /></a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html"><h4>Digital Marketing</h4></a>
                    <ul>
                      <li>Creative Agency</li>
                      <li><FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro</li>
                      <li><FaMoneyBill /> R$3500,00 - R$4000,00</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link">
                  <a href="a">Full Time</a>
                  <span>7 horas atras</span>
                </div>
              </SingleJob>

              <SingleJob>
                <div className="job-items">
                  <div className="company-img">
                    <a href="a"><img src={ImgJob1} alt="Job" /></a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html"><h4>Digital Marketing</h4></a>
                    <ul>
                      <li>Creative Agency</li>
                      <li><FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro</li>
                      <li><FaMoneyBill /> R$3500,00 - R$4000,00</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link">
                  <a href="a">Full Time</a>
                  <span>7 horas atras</span>
                </div>
              </SingleJob>
            </div>
          </div>
        </Container>
      </SectionJobs>
    </>
  );
};

export default Home;
