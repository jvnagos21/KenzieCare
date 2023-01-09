import React from "react";
import { DivLink, LinkToForm } from "../../Components/DivLinkToForm";
import { ClickLogo } from "../../Components/Form";
import { Header } from "../../Components/Header";
import {  BackGroundSecundary, MainLanding } from "../../Components/MainLanding";
import {
  DivAnimation,
  DivPrimaryStyled,
  SectionPrimaryStyled,
} from "../../Components/SectionPrimaryLanding";
import {
  DivHowitWorksStyled,
  DivSecundaryStyled,
  IconPrimaryStyled,
  SectionSecundaryStyled,
} from "../../Components/SectionSecundaryLanding";
import {
  DivFigureSteps,
  FigureSecundary,
  LineSteps,
  SectionStepbyStep,
} from "../../Components/SectionStepByStep";

const LandingPage = () => {
  return (
    <>
      <Header>
        <div>
          <div>
            <ClickLogo to="/landing">
              <img src="/Logo.png" alt="iconLogo" />
            </ClickLogo>
          </div>
          <DivLink>
            <LinkToForm to="/register">Cadastre-se</LinkToForm>
            <LinkToForm to="/login">Faça seu login</LinkToForm>
          </DivLink>
        </div>
      </Header>
      <MainLanding>
        <SectionPrimaryStyled>
          <DivPrimaryStyled>
            <div>
              <div>
                <h2>MELHORES ONGS 2022</h2>
                <p>As melhores ONGs do Brasil</p>
              </div>
              <p>Conheça, escolha e doe para a sua preferida.</p>
            </div>
          </DivPrimaryStyled>
          <DivAnimation>
            <img
              src="/different-people-doing-volunteer-work-with-food (1).jpg"
              alt="photosONG"
            />
            <img
              src="/group-of-happy-and-diverse-volunteers.jpg"
              alt="photosONG"
            />
            <img src="/close-up-people-working-together.jpg" alt="photosONG" />
            <img
              src="/close-up-people-with-food-donations.jpg"
              alt="photosONG"
            />
            <img
              src="/group-of-different-people-volunteering-at-a-foodbank-for-poor-people.jpg"
              alt="photoONG"
            />
          </DivAnimation>
        </SectionPrimaryStyled>
        <BackGroundSecundary>
          <SectionSecundaryStyled>
            <DivSecundaryStyled>
              <IconPrimaryStyled>
                <img src="/graf-9 (1).svg" alt="icons" />
              </IconPrimaryStyled>
              <DivHowitWorksStyled>
                <h2>
                  <img src="/iconTitle.svg" alt="icon" /> Como funciona
                </h2>
                <p>
                  As organizações listadas nessa página foram selecionadas como
                  as melhores ONGs do Brasil no ano de 2022. Agora é só escolher
                  as causas que você quer apoiar.
                </p>
              </DivHowitWorksStyled>
            </DivSecundaryStyled>
          </SectionSecundaryStyled>
          <SectionStepbyStep>
            <DivFigureSteps>
              <figure>
                <img src="/icon-1 (1).svg" alt="" />
              </figure>
              <p>ONGS SE INSCREVEM</p>
              <span>Foram algumas ONGs participantes.</span>
            </DivFigureSteps>
            <LineSteps src="/line (1).svg" alt="" />
            <DivFigureSteps>
              <figure>
                <img src="/icon-2 (1).svg" alt="" />
              </figure>
              <p>SELECIONAMOS AS MELHORES</p>
              <span>Após um criterioso processo de seletiva</span>
            </DivFigureSteps>
            <LineSteps src="/line (1).svg" alt="" />
            <DivFigureSteps>
              <figure>
                <img src="/ico3 (1).svg" alt="icon" />
              </figure>
              <p>AGORA É COM VOCÊ</p>
              <span>Conheça, filtre e encontre a que você quer apoiar.</span>
            </DivFigureSteps>
            <LineSteps src="/line (1).svg" alt="" />
            <DivFigureSteps>
              <figure>
                <img src="/ico4 (1).svg" alt="icon" />
              </figure>
              <p>ESCOLHA E DOE</p>
              <span>Faça sua doação com segurança clicando em Doar</span>
            </DivFigureSteps>
          </SectionStepbyStep>
          <FigureSecundary>
            <img src="/graf-10 (1).svg" alt="icons" />
          </FigureSecundary>
        </BackGroundSecundary>
      </MainLanding>
    </>
  );
};

export default LandingPage;
