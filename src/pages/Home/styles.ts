import styled from 'styled-components';
import BackgroundCV from '../../assets/banners/cv_bg.jpg';

export const Content = styled.img`
position: relative;`


export const HeroCaption = styled.div`
position: absolute;
color: #28395a;
line-height: 1.2;
top: 37%;
left: 19%;

h1 {
  font-family: 'Poppins', sans-serif;
    font-size: 60px;
    max-width: 490px;
    font-weight: 600;
}
`;

export const Category = styled.div`

span {
  color: #fb246a;
  text-transform: uppercase;
  display: block;
  margin: 100px 0 10px 0;
  text-align: center;
}
h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  color: #28395a;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
}
`;

export const BoxCategory = styled.div`
display: flex;
margin-top: 50px;
justify-content: center;

`;

export const SingleServices = styled.div`
border: 1px solid #dafcef;
padding: 44px 0;
transition: 3s;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

svg {
  font-size: 70px;
}

h5 a {
  display: block;
    color: #000;
    text-decoration: none;
    transition: 3s;
    margin-top: 15px;

  }
  span a {
    color: #000;
    text-decoration: none;
    transition: 3s;
  }
&:hover {
  box-shadow: 0px 10px 30px 0px rgba(133,66,189,0.3);
  color: #fb246a;
  h5 a {
    color: #fb246a;

  }
  span a {
        color: #fb246a;
    }
}
`;

export const ButtonCategory = styled.div`
margin-top: 90px;
display: flex;
justify-content: center;

a{
  text-decoration: none;
  border: 1px solid #8b92dd;
  color: #8b92dd;
  font-family: 'Poppins', sans-serif;
  background: none;
  -moz-user-select: none;
  padding: 19px 120px;
  margin: 0;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  position: relative;
  transition: color .3s linear;
  position: relative;
  overflow: hidden;
  margin: 0;

  &:hover {
    color: #fff;
  }

  &::before {
    border: 1px solid transparent;

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 101%;
    height: 101%;
    background:  #8b92dd;
    z-index: -1;
    transition: transform 0.5s;
    transition-timing-function: ease;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleY(0);
    border-radius: 0px
  }

  &:hover::before {
    transform: scale(1);
    order: 2px solid transparent;

  }
}

`;

export const BackgroundCv = styled.section`
    margin-top: 100px;
    background: url(${BackgroundCV}) no-repeat no-repeat 4% 142%;
    position: relative;
    z-index: 1;
    margin-top: 77px;
    height: 63vh;

&::before{
  position: absolute;
  content: "";
  background-color: rgba(31, 43, 123, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
}

`;

export const CvCaption = styled.div`
text-align: center;
padding-top: 60px;

p:nth-child(1){
  font-family: 'Poppins', sans-serif;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
}

p + p {
  color: #fff;
    font-weight: 700;
    font-size: 60px;
    line-height: 1.3;
    margin-bottom: 51px;
  }

  a{
  text-decoration: none;
  border: 1px solid #8b92dd;
  color: #8b92dd;
  font-family: 'Poppins', sans-serif;
  background: none;
  -moz-user-select: none;
  padding: 19px 28px;
  margin: 0;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  position: relative;
  transition: color .3s linear;
  position: relative;
  overflow: hidden;
  margin: 0;

  &:hover {
    color: #fff;
  }

  &::before {
    border: 1px solid transparent;

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 101%;
    height: 101%;
    background:  #8b92dd;
    z-index: -1;
    transition: transform 0.5s;
    transition-timing-function: ease;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleY(0);
    border-radius: 0px
  }

  &:hover::before {
    transform: scale(1);
    order: 2px solid transparent;

  }
}`;

export const SectionJobs = styled.section`
padding-top: 150px;
padding-bottom: 130px;

`;

export const JobsTitle = styled.div`
text-align: center;

span{
  color: #fb246a;
  font-size: 16px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}
h2 {
  color: #28395a;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 95px;
}`;

export const SingleJob = styled.div`

display: flex;
padding: 36px 30px;
justify-content: space-between;
flex-wrap: wrap;
transition: 4s;
margin-bottom: 30px;

a{
  text-decoration: none;
}
svg{
  font-size: 25px;
}

.job-items {
  display: flex;
  flex-wrap: wrap;
}
h4 {
  color: #28395a;
  font-size: 24px;
  transition: .4s;
  margin-left: 30px;

  &:hover{
    color: #8b92dd;
  }

}
ul{
  display: flex;
}

ul li {
  margin-right: 48px;
  list-style: none;
}

.items-link a {
  display: block;
  color: #8b92dd;
  border: 1px solid #8b92dd;
  border-radius: 30px;
  padding: 4px 33px;
  text-align: center;
  margin-bottom: 25px;
  transition: color .4s;

  &:hover{
    background-color: #8b92dd;
    color: #fff;
    transition: color .4s linear;
  }
}


`;


