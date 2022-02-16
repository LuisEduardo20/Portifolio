import ProjectCard from "../ProjectCard";
import { Container, Title, ProjectsSlider } from "./style";
import { repositories } from "../../repository";

const Projects = () => {
  const showProjects = repositories.map(
    ({ name, imgUrl, description, repositoryLink, applicationLink }) => {
      return (
        <ProjectCard
          title={name}
          imgUrl={imgUrl}
          description={description}
          repositoryLink={repositoryLink}
          applicationLink={applicationLink}
        />
      );
    }
  );

  return (
    <Container id='projetos'>
      <Title>Projetos</Title>

      <ProjectsSlider>{showProjects}</ProjectsSlider>
    </Container>
  );
};

export default Projects;
