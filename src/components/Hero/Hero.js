import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle>
				Welcome to <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				The purpose oj JavaScript Mastery is to help apiring ans establishined developers to
			</SectionText>
			<Button onClick={() => window.location.assign("https://google.com")}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
