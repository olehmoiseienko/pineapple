import React from "react";
import Header from "./header/Header";
import PipelineContainer from "./pipeline/PipelineContainer";
import StyledMainLayout from "./shared/StyledMainLayout";

function App() {
  return (
    <>
      <Header />
      <StyledMainLayout>
        <PipelineContainer />
      </StyledMainLayout>
    </>
  );
}

export default App;
