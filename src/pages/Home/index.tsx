import React, { useState, useCallback } from 'react';
import { Container } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import { FiTarget, FiMonitor, FiCode, FiSmartphone } from 'react-icons/fi';
import {
  FaMoneyBill,
  FaMapMarkerAlt,
  FaBusinessTime,
  FaSearchDollar,
  FaUserTie,
} from 'react-icons/fa';
import Depo from '../../components/Depoimentos';
import heroBanner from '../../assets/banners/hero.jpg';
import DepoimentosImg from '../../assets/depoimentos/testimonial-founder.png';
import {
  HeroCaption,
  Category,
  BoxCategory,
  SingleServices,
  ButtonCategory,
  BackgroundCv,
  CvCaption,
  SectionJobs,
  JobsTitle,
  SingleJob,
  Works,
  WorksTitle,
  SingleProcess,
  ProcessIcon,
  Depoimentos,
  CarouselCaption,
} from './styles';
import ImgJob1 from '../../assets/jobs/job-list1.png';

interface CarouserProps {
  selectedIndex: [];
}

const Home: React.FC<CarouserProps> = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((selectedIndex: any) => {
    setIndex(selectedIndex);
  }, []);

  return (
    <>
      <Container className="p-0" fluid>
        <img className="img-fluid" src={heroBanner} alt="Banner" />
        <HeroCaption className="hero-caption">
          <h1>Encontre as melhores vagas do mercado! </h1>
        </HeroCaption>
      </Container>

      <Container>
        <div className="row">
          <div className="col-lg-12">
            <Category>
              <span>pacotes em destaque</span>
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
              <h5>
                <a href="q">Designer</a>
              </h5>
              <span>
                <a href="a">655</a>
              </span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiCode />
              <h5>
                <a href="a">Programadores</a>
              </h5>
              <span>
                <a href="a">655</a>
              </span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiTarget />
              <h5>
                <a href="a">Marketing</a>
              </h5>
              <span>
                <a href="a">655</a>
              </span>
            </SingleServices>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleServices>
              <FiSmartphone />
              <h5>
                <a href="a">Mobile</a>
              </h5>
              <span>
                <a href="a">655</a>
              </span>
            </SingleServices>
          </div>
        </BoxCategory>
        <div className="row">
          <div className="col-lg-12">
            <ButtonCategory>
              <a href="a">Saiba mais</a>
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
                <a href="a">Cadastre seu currículo agora</a>
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
                    <a href="a">
                      <img src={ImgJob1} alt="Job" />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html">
                      <h4>Digital Marketing</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro
                      </li>
                      <li>
                        <FaMoneyBill /> R$3500,00 - R$4000,00
                      </li>
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
                    <a href="a">
                      <img src={ImgJob1} alt="Job" />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html">
                      <h4>Digital Marketing</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro
                      </li>
                      <li>
                        <FaMoneyBill /> R$3500,00 - R$4000,00
                      </li>
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
                    <a href="a">
                      <img src={ImgJob1} alt="Job" />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html">
                      <h4>Digital Marketing</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro
                      </li>
                      <li>
                        <FaMoneyBill /> R$3500,00 - R$4000,00
                      </li>
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
                    <a href="a">
                      <img src={ImgJob1} alt="Job" />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html">
                      <h4>Digital Marketing</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <FaMapMarkerAlt /> Volta Redonda, Rio de Janeiro
                      </li>
                      <li>
                        <FaMoneyBill /> R$3500,00 - R$4000,00
                      </li>
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
      <Works>
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <WorksTitle>
                <span>aplicar processo</span>
                <h2>Como Funciona</h2>
              </WorksTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <SingleProcess>
                <ProcessIcon>
                  <FaSearchDollar />
                </ProcessIcon>
                <div className="process-caption">
                  <h5>1. Procure um Emprego</h5>
                  <p>
                    Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                    tempor incididunt ut laborea.
                  </p>
                </div>
              </SingleProcess>
            </div>

            <div className="col-lg-4 col-md-6">
              <SingleProcess>
                <ProcessIcon>
                  <FaBusinessTime />
                </ProcessIcon>
                <div className="process-caption">
                  <h5>2. Candidatar-se ao emprego</h5>
                  <p>
                    Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                    tempor incididunt ut laborea.
                  </p>
                </div>
              </SingleProcess>
            </div>

            <div className="col-lg-4 col-md-6">
              <SingleProcess>
                <ProcessIcon>
                  <FaUserTie />
                </ProcessIcon>
                <div className="process-caption">
                  <h5>3. Consiga seu emprego</h5>
                  <p>
                    Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                    tempor incididunt ut laborea.
                  </p>
                </div>
              </SingleProcess>
            </div>
          </div>
        </Container>
      </Works>

      <Container>
        <Depoimentos>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={DepoimentosImg}
                alt="First slide"
              />
              <CarouselCaption>
                <span>First slide label</span>
                <p>teste</p>
                <p>
                  “I am at an age where I just want to be fit and healthy our
                  bodies are our responsibility! So start caring for your body
                  and it will care for you. Eat clean it will care for you and
                  workout hard.”
                </p>
              </CarouselCaption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={DepoimentosImg}
                alt="First slide"
              />
              <CarouselCaption>
                <span>First slide label</span>
                <p>teste</p>
                <p>
                  “I am at an age where I just want to be fit and healthy our
                  bodies are our responsibility! So start caring for your body
                  and it will care for you. Eat clean it will care for you and
                  workout hard.”
                </p>
              </CarouselCaption>
            </Carousel.Item>
          </Carousel>
        </Depoimentos>
      </Container>
    </>
  );
};

export default Home;
