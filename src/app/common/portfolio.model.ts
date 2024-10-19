import { Education } from "../education/education.model";
import { Experience } from "../experience/experience.model";
import { Skill } from "../skills/skills.model";
import { PersonalInfo } from "./personal-info.model";

export interface PortfolioData {
    personalInfo: PersonalInfo,
    skills: Skill[],
    experience: Experience[],
    education: Education[]
}