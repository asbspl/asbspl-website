import "./Solutions.css";
import Solutionbreadcrumb from "../../components/Solutionbreadcrumb/Solutionbreadcrumb"
import WorkflowSection from "../../components/WorkflowSection/WorkflowSection"
import ConstructionWorkflow from "../../components/ConstructionWorkflow/ConstructionWorkflow";

const Solutions = () => {
  return (
    <section>
    <Solutionbreadcrumb/>
    <ConstructionWorkflow/>
    <WorkflowSection/>
    </section>
  );
};

export default Solutions;
