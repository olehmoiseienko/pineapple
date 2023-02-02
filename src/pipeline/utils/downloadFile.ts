// TODO: it's temp solution. Find more safe solution

const DEFAULT_FILE_EXT = "json"
const DEFAULT_FILE_NAME = "pipeline"
const DEFAULT_FILE_FORMAT = "data:text/json;chatset=utf-8"

const convertDataToString = (data: any): string => encodeURIComponent(
  JSON.stringify(data)
)

const exportData = (data: any) => {
  const jsonString = `${DEFAULT_FILE_FORMAT},${convertDataToString(data)}`;
  const element = document.createElement("a");
  element.href = jsonString;
  element.download = `${DEFAULT_FILE_NAME}.${DEFAULT_FILE_EXT}`;
  element.click();
};

export default exportData;
