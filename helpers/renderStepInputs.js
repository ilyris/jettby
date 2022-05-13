export const renderStepInputs = (data, step, Component) => {
  switch (step) {
    case 1:
      return data.step1.map((data) => {
        return <Component inputData={data} />;
      });
    case 2:
      return data.step2.map((data) => {
        return <Component inputData={data} />;
      });
    case 3:
      return data.step3.map((data) => {
        return <Component inputData={data} />;
      });
    case 4:
      return data.step4.map((data) => {
        return <Component inputData={data} />;
      });
    case 5:
      return data.step5.map((data) => {
        return <Component inputData={data} />;
      });
    default:
      return "eat my ass";
  }
};
