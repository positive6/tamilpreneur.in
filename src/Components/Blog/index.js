import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Card from "../Cards/CardsUI";
import article1 from "../../img/article1.jpg";
import article2 from "../../img/article2.jpg";
import logo from "../../img/logo_card.png";
import { Router } from "react-router";

class Blog extends Component {
  render() {
    return (
      <Container>
        <div className="container-fluid d-flex  justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={article1}
                title="Hotel Management la Earn Pana Mudyuma?"
                text="Dr. ஜெயக்குமார் இருபது வருஷமா பெங்களூர்ல பிரபலமான பல ஸ்டார் ஹோட்டல்களுக்கும், கஃபேஸ்கும் கன்சல்டன்டா இருக்காரு. இவர் ஒரு ஸர்டிஃபைட்(certified) ஒயின்  டேஸ்டரும் கூட. மிடில் 90'ஸ்ல இன்ஜினியரிங், மெடிக்கல் படிச்சாதான் வேலை கிடைக்கும்னு எல்லாரும் நினைச்ச காலத்துல, வேற ஏதாவது வித்தியாசமா படிக்கலாம்னு, சென்னை IHM ல ஹோட்டல் மேனேஜ்மென்ட் படிச்சிருக்கார். Read More..."
                link="/learn_about_hotel_management"
                footnoteleft="By Saraswathi "
                footnoteright="HOTEL MANAGEMENT | 3min read"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={article2}
                title="AI namma Indian Education System ah maathuma?"
                text="ஜுங்ரூ, என்னடா பெயரே வித்யாசமா இருக்கேனு பாக்றீங்களா? ஆமாங்க, சேதுராமன், சிபி ஹரிஹரன் சேர்ந்து ஆரம்பிச்ச ஸ்டார்டப் தான் ஜுங்ரூ. Marks, Grades தாண்டி ஒரு ஸ்டுடென்ட்க்கு என்ன தேவைன்னு யோஸிச்சு, Adaptive learning method ஆதாரமா வச்சு ஆரம்பிச்சதுதான்  ஜுங்ரூ. ஸ்டுடென்ட்ஸ்காக ஆரம்பிச்ச ஸ்டார்டப்ங்கிறதால இப்படி அட்ராக்ட்டிவ் பெயர் வெச்சிருக்காங்கனு சொன்னாரு சிபி ஹரிஹரன். Read More..."
                link="/indian_education_system_with_ai"
                footnoteleft="By Saraswathi"
                footnoteright="ARTIFICIAL INTELLIGENCE | 3min read"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={logo}
                title="Post coming soon"
                text="Tamilpreneur reveals"
                footnoteleft=""
                footnoteright=""
              />
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            For more such articles, visit{" "}
            <Link to="https:/club.tamilpreneur.in">Tamilpreneur Club</Link>
          </p>
        </div>
      </Container>
    );
  }
}
export default Blog;
