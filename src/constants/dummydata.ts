import { LLMType, ModelDataObj, ModelStatus, ModelType } from "./types";

const getRandomDateWithinLast3Days = () => {
    const now = Date.now();
    const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    const randomTimestamp = Math.floor(Math.random() * (now - threeDaysAgo) + threeDaysAgo);
    return new Date(randomTimestamp);
  };
  
  // Utility to generate a random ID
  const generateRandomId = () => `#${Math.floor(1000000 + Math.random() * 9000000)}`;
  
  // Generate dummy data
  export const dummyData: ModelDataObj[] = Array.from({ length: 100 }, (_, index) => ({
    modelName: `Model ${index + 1}`,
    id: generateRandomId(),
    description: `Description for model ${index + 1}`,
    modelType: Object.values(ModelType)[Math.floor(Math.random() * Object.values(ModelType).length)],
    createdOn: getRandomDateWithinLast3Days(),
    lastTrainedOn: getRandomDateWithinLast3Days(),
    // status: Object.values(ModelStatus)[Math.floor(Math.random() * Object.values(ModelStatus).length)],
    status:ModelStatus.Active,
    llm: Object.values(LLMType)[Math.floor(Math.random() * Object.values(LLMType).length)],
  }));